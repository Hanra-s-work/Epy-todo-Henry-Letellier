const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require("./config/db.js");
const rauth = require("./routes/auth/auth.js");
const user = require("./routes/user/user.js");
const todo = require("./routes/todos/todos.js");
const mauth = require("./middleware/auth.js");
const assets = require("./assets.js");
const injection = require("./config/check_if_sql_injection.js");
const user_query = require("./routes/user/user.query.js");
const todo_query = require("./routes/todos/todos.query.js");
const status_output = require("./config/speak_on_correct_status.js");
const short_or_detailed = require("./config/short_or_detailed_message.js");
require('dotenv').config({ encoding: 'utf-8' });

const port = process.env.PORT || 3000;
var connection = null;
var user_email = null;
var is_logged_in = false;
var global_logged_in_token = null;

app.use(express.raw());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get('/override', (req, res) => {
    var title = 'Welcome to override\n';
    is_logged_in = true;
    user_email = "lumine@example.com";
    global_logged_in_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE5LCJlbWFpbCI6Imx1bWluZTlAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODQwMDQyMDZ9.1lXgYd4o9xim5zVlxXjnMd_qEvSfv6QuZtf8_9wapFE";
    if (is_logged_in === true) {
        status_output.success(res, { 'title': title, 'msg': `You are logged in as '${user_email}'\n` });
    }
})

app.post('/register', async (req, res) => {
    var title = 'Welcome to register\n';
    const error_message = "You must provide email, password, firstname and name\n";
    const body_content = req.body;
    const is_register_data_present = await assets.check_if_vars_in_body(body_content, ["email", "password", "firstname", "name"]);
    if (typeof is_register_data_present === 'string' || is_register_data_present === false) {
        short_or_detailed.error_body_message(res, title, error_message, '');
        return [""];
    }
    const check = await rauth.register_user(connection, body_content);
    if (check[0] === "Creation success") {
        is_logged_in = check[3];
        user_email = body_content.email;
        global_logged_in_token = check[2];
    }
    short_or_detailed.register_message(res, title, check[1], global_logged_in_token);
});

app.post('/login', async (req, res) => {
    const error_message = "You must provide an email and a password\n";
    var title = 'Welcome to login\n';
    const check = await assets.check_if_vars_in_body(req.body, ["email", "password"]);
    if (typeof check === 'string' || check === false) {
        return short_or_detailed.error_body_message(res, title, error_message, global_logged_in_token);
    }
    const response = await rauth.authenticate_user(connection, req.body);
    console.log(`response = ${JSON.stringify(response)}`);
    if (response.length > 1) {
        is_logged_in = response[0];
        user_email = response[1];
        global_logged_in_token = response[2];
        console.log(`is_logged_in = ${is_logged_in}\nuser_email = ${user_email}\nlogged_in_user_key = ${global_logged_in_token}\nmessage = ${response[3]}`);
    }
    if (is_logged_in === false || response.length === 1) {
        return short_or_detailed.login_error_messages(res, title, response[0], global_logged_in_token)
    }
    short_or_detailed.success_connection_message(res, title, response[3], global_logged_in_token);
});

app.get('/user', async (req, res) => {
    console.log(`header.params = '${JSON.stringify(req.params)}'`);
    console.log(`header.body= '${JSON.stringify(req.body)}'`);
    console.log(`header.headers = '${JSON.stringify(req.headers)}'`);
    console.log(`header.headers.authorisation = '${JSON.stringify(req.headers.authorization)}'`);
    console.log(`header.headers.user-agent = '${JSON.stringify(req.headers['user-agent'])}'`);
    console.log(`header.headers.accept = '${JSON.stringify(req.headers.accept)}'`);
    console.log(`header.headers.postman-token = '${JSON.stringify(req.headers['postman-token'])}'`);
    console.log(`header.headers.host = '${JSON.stringify(req.headers.host)}'`);
    console.log(`header.headers.accept-encoding = '${JSON.stringify(req.headers['accept-encoding'])}'`);
    console.log(`header.headers.connection = '${JSON.stringify(req.headers.connection)}'`);
    console.log(`header.ip = '${JSON.stringify(req.ip)}'`);
    console.log(`header.query = '${JSON.stringify(req.query)}'`);
    console.log(`header.url = '${JSON.stringify(req.url)}'`);
    var title = 'Welcome to user\n';
    if (is_logged_in === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global_logged_in_token);
    }
    const user_node = await db.sql_get_user_node(connection, user_email);
    if (user_node === injection.injection_message) {
        short_or_detailed.injection_message(res, title, '');
    } else {
        short_or_detailed.display_user_info(res, title, user_node, global_logged_in_token);
    }
});

app.get('/user/todos', async (req, res) => {
    var title = "Welcome to user/todos\n"; if (is_logged_in === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global_logged_in_token);
    }
    const response = await todo_query.show_all_user_todos(connection, user_email);
    if (response === injection.injection_message) {
        short_or_detailed.injection_message(res, title, global_logged_in_token);
    } else {
        short_or_detailed.display_user_todos(res, title, response, global_logged_in_token);
    }
});

app.get('/users/:id', async (req, res) => {
    var title = 'Welcome to users/:id\n';
    if (is_logged_in === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global_logged_in_token);
    }
    const is_id_in = await assets.check_if_var_in_url(req, "id");
    if (is_id_in === false) {
        return short_or_detailed.error_url_message(res, title, "You must provide an id or an email\n", global_logged_in_token);
    }
    const response = await user_query.get_other_usr_info(connection, req.params.id);
    short_or_detailed.users_id_messages(res, title, response, global_logged_in_token);

});

app.get('/users/:email', async (req, res) => {
    var title = 'Welcome to users/:email\n';
    if (is_logged_in === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global_logged_in_token);
    }
    const is_id_in = await assets.check_if_var_in_url(req, "id");
    if (is_id_in === false) {
        return short_or_detailed.error_url_message(res, title, "You must provide an id or an email\n", global_logged_in_token);
    }
    const response = await user_query.get_other_usr_info(connection, req.params.email);
    short_or_detailed.users_id_messages(res, title, response, global_logged_in_token);

});

app.put('/users/:id', async (req, res) => {
    var title = 'Welcome to users/:id\n';
    if (is_logged_in === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global_logged_in_token);
    }
    const is_id_in = assets.check_if_input_is_id(req.params.id);
    if (is_id_in === false) {
        short_or_detailed.error_url_message(res, title, "You must provide an id", global_logged_in_token);
        return [""];
    }
    const in_body = assets.check_if_vars_in_body(req.body, ["email", "firstname", "name", "password"]);
    if (in_body === false) {
        short_or_detailed.error_body_message(res, title, "You must provide: email, firstname, name, password", global_logged_in_token);
        return [""];
    }
    const update = await user.update_user(connection, req.body, req.params.id);
    short_or_detailed.put_user_id(res, title, update, global_logged_in_token);
});

app.delete('/users/:id', async (req, res) => {
    var title = 'Welcome to users/:id\n';
    if (is_logged_in === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global_logged_in_token);
    }
    const is_id_in = await assets.check_if_var_in_url(req, "id");
    if (is_id_in === false) {
        return short_or_detailed.error_url_message(res, title, "You must provide an id or an email\n", global_logged_in_token);
    }
    const response = await user.forget_user(connection, req.params.id);
    short_or_detailed.delete_users_id_messages(res, title, response, global_logged_in_token);

});

app.get('/todos', async (req, res) => {
    var title = "Welcome to todos\n";
    if (is_logged_in === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global_logged_in_token);
    }
    const response = await todo_query.show_all_todos(connection);
    if (response === injection.injection_message) {
        short_or_detailed.injection_message(res, title, global_logged_in_token);
    } else {
        short_or_detailed.display_all_todos(res, title, response, global_logged_in_token);
    }

});

app.get('/todos/:id', async (req, res) => {
    var title = 'Welcome to todos/:id\n';
    if (is_logged_in === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global_logged_in_token);
    }
    const is_id_in = await assets.check_if_var_in_url(req, "id");
    if (is_id_in === false) {
        return short_or_detailed.error_url_message(res, title, "You must provide an id or an email\n", global_logged_in_token);
    }
    const response = await todo_query.show_specific_todo(connection, req.params.id);
    short_or_detailed.display_todo_id(res, title, response, global_logged_in_token);

});

app.post('/todos', async (req, res) => {
    var title = 'Welcome to todos';
    if (is_logged_in === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global_logged_in_token);
    }
    const is_input_correct = await assets.check_if_vars_in_body(req.body, ["title", "description", "due_time", "status"]);
    if (typeof is_input_correct === 'string' || is_input_correct === false) {
        short_or_detailed.error_body_message(res, title, "You must provide a title, a description, a due_time, a status and (optional) the user_id", global_logged_in_token);
        return [""];
    }
    const response = await todo.add_todo(connection, req.body, user_email);
    if (response === "Creation success") {
        const todo = await todo_query.show_all_todos(connection);
        short_or_detailed.display_all_todos(res, title, todo, global_logged_in_token);
    } else {
        short_or_detailed.display_post_todo_errors(res, title, response, global_logged_in_token);
    }
});

app.put('/todos/:id', async (req, res) => {
    var title = 'Welcome to todos/:id\n';
    if (is_logged_in === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global_logged_in_token);
    }
    const is_id_in = await assets.check_if_var_in_url(req, "id");
    if (is_id_in === false) {
        return short_or_detailed.error_url_message(res, title, "You must provide an id\n", global_logged_in_token);
    }
    const is_input_correct = await assets.check_if_vars_in_body(req.body, ['title', 'description', 'due_time', 'user_id', 'status']);
    if (is_input_correct === false) {
        return short_or_detailed.error_body_message(res, title, "You must provide a title, a description, a due_time, a user_id and a status\n", global_logged_in_token);
    }
    const response = await todo.update_todo(connection, req.body, req.params.id);
    short_or_detailed.display_put_todos(res, title, response, global_logged_in_token);
});

app.delete('/todos/:id', async (req, res) => {
    var title = 'Welcome to todos/:id\n';
    if (is_logged_in === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global_logged_in_token);
    }
    const is_id_in = await assets.check_if_var_in_url(req, "id");
    if (is_id_in === false) {
        return short_or_detailed.error_url_message(res, title, "You must provide an id\n", global_logged_in_token);
    }
    const response = await todo.forget_todo(connection, req.params.id);
    short_or_detailed.delete_todos_id_messages(res, title, response, global_logged_in_token);
})

// bonus
app.get('/reflet-d-acide', async (req, res) => {
    var title = 'Welcome to reflet-d-acide\n';
    if (is_logged_in === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global_logged_in_token);
    }
    var response = await db.sql_exampleUsage(connection)
    res.setHeader('Content-Type', 'application/json');
    res.send({ 'title': title, 'msg': response })
});

app.get('/logout', (req, res) => {
    var title = 'Welcome to logout\n';
    if (is_logged_in === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global_logged_in_token);
    }
    is_logged_in = false;
    user_email = null;
    global_logged_in_token = null;
    res.send({ 'title': title, 'msg': `You are logged out\n` });
});

app.get('/stop', async (req, res) => {
    var title = 'Welcome to stop\n';
    if (is_logged_in === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global_logged_in_token);
    }
    short_or_detailed.success_connection_message(res, title, 'Stopping server...\n', global_logged_in_token);
    await db.disconnect_from_database(connection);
    process.exit(0);
});

app.get('/', (req, res) => {
    var title = 'Welcome to /\n';
    short_or_detailed.success_connection_message(res, title, 'Hello World\n', global_logged_in_token);
});

async function test_update(connection) {

}

app.listen(port, async () => {
    console.log(`Server running on port ${port} at http://localhost:${port}`);
    connection = await db.connect_to_database();
    db.display_connection_id(connection);
    test_update(connection);
});
