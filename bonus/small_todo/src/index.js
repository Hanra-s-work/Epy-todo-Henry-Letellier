const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require("./config/db.js");
const auth = require("./routes/auth/auth.js");
const assets = require("./assets.js");
const todo_query = require("./routes/todos/todos.query.js");
const injection = require("./config/check_if_sql_injection.js");
const status_output = require("./config/speak_on_correct_status.js");
const short_or_detailed = require("./config/short_or_detailed_message.js");
require('dotenv').config({ encoding: 'utf-8' });

const port = process.env.PORT || 3015;
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
    const check = await auth.register_user(connection, body_content, res);
    if (check[0] === "Creation success") {
        is_logged_in = check[3];
        user_email = body_content.email;
        global_logged_in_token = check[2];
    }
    short_or_detailed.register_message(res, title, check[1], global_logged_in_token);
});

app.post('/login', async (req, res) => {
    const error_message = "You must provide email and password\n";
    var title = 'Welcome to login\n';
    const check = await assets.check_if_vars_in_body(req.body, ["email", "password"]);
    if (typeof check === 'string' || check === false) {
        return short_or_detailed.error_body_message(res, title, error_message, '');
    }
    const response = await auth.authenticate_user(connection, req.body);
    if (response.length > 1) {
        is_logged_in = response[0];
        user_email = response[1];
        global_logged_in_token = response[2];
        console.log(`is_logged_in = ${is_logged_in}\nuser_email = ${user_email}\nlogged_in_user_key = ${global_logged_in_token}\nmessage = ${response[3]}`);
    }
    if (is_logged_in === false) {
        return short_or_detailed.login_error_messages(res, title, response[3], global_logged_in_token)
    }
    short_or_detailed.success_connection_message(res, title, response[3], global_logged_in_token);
});

app.get('/user', async (req, res) => {
    var title = 'Welcome to user\n';
    if (is_logged_in === true) {
        const user_node = await db.sql_get_user_node(connection, user_email);
        if (user_node === injection.injection_message) {
            short_or_detailed.injection_message(res, title, '');
        } else {
            short_or_detailed.display_user_info(res, title, user_node, global_logged_in_token);
        }
    } else {
        short_or_detailed.user_not_logged_in(res, title);
    }
});

app.get('/user/todos', async (req, res) => {
    var title = "Welcome to user/todos\n";
    if (is_logged_in === true) {
        const response = await todo_query.show_all_user_todos(connection, user_email);
        res.send({ 'title': title, 'msg': response });
    } else {
        res.send({ 'title': title, 'msg': 'You are not logged in\n' });
    }
});

app.get('/users/:id', async (req, res) => {
    var title = 'Welcome to users/:id\n';
    if (is_logged_in === true) {
        res.send({ 'title': title, 'msg': 'Welcome to users/:id\n' });
    } else {
        res.send({ 'title': title, 'msg': 'You are not logged in\n' });
    }
});

app.get('/users/:email', async (req, res) => {
    var title = 'Welcome to users/:email\n';
    if (is_logged_in === true) {
        res.send({ 'title': title, 'msg': 'Welcome to users/:email\n' });
    } else {
        res.send({ 'title': title, 'msg': 'You are not logged in\n' });
    }
});

app.put('/users/:id', async (req, res) => {
    var title = 'Welcome to users/:id\n';
    if (is_logged_in === true) {
        res.send({ 'title': title, 'msg': 'Welcome to users/:id\n' });
    } else {
        res.send({ 'title': title, 'msg': 'You are not logged in\n' });
    }
});

app.delete('/users/:id', async (req, res) => {
    var title = 'Welcome to users/:id\n';
    if (is_logged_in === true) {
        res.send({ 'title': title, 'msg': 'Welcome to users/:id\n' });
    } else {
        res.send({ 'title': title, 'msg': 'You are not logged in\n' });
    }
});

app.get('/todos', async (req, res) => {
    var title = "Welcome to todos\n";
    if (is_logged_in === true) {
        const response = await todo_query.show_all_todos(connection);
        res.send({ 'title': title, 'msg': response });
    } else {
        res.send({ 'title': title, 'msg': 'You are not logged in\n' });
    }
});

app.get('/todos/:id', async (req, res) => {
    var title = 'Welcome to todos/:id\n';
    if (is_logged_in === true) {
        res.send({ 'title': title, 'msg': 'Welcome to todos/:id\n' });
    } else {
        res.send({ 'title': title, 'msg': 'You are not logged in\n' });
    }
});

app.post('/todos', async (req, res) => {
    var title = 'Welcome to todos\n';
    if (is_logged_in === true) {

        res.send({ 'title': title, 'msg': "Hello World\n" });
    } else {
        res.send({ 'title': title, 'msg': 'You are not logged in\n' });
    }
});

app.put('/todos/:id', async (req, res) => {
    var title = 'Welcome to todos/:id\n';
    if (is_logged_in === true) {
        res.send({ 'title': title, 'msg': 'Welcome to todos/:id\n' });
    } else {
        res.send({ 'title': title, 'msg': 'You are not logged in\n' });
    }
});

app.delete('/todos/:id', async (req, res) => {
    var title = 'Welcome to todos/:id\n';
    if (is_logged_in === true) {
        res.send({ 'title': title, 'msg': 'Welcome to todos/:id\n' });
    } else {
        res.send({ 'title': title, 'msg': 'You are not logged in\n' });
    }
})

// bonus
app.get('/reflet-d-acide', async (req, res) => {
    var title = 'Welcome to reflet-d-acide\n';
    if (is_logged_in === true) {
        var response = await db.sql_exampleUsage(connection)
        res.setHeader('Content-Type', 'application/json');
        res.send({ 'title': title, 'msg': response })
    } else {
        res.send({ 'title': title, 'msg': `You are not logged in\n` });
    }
});

app.get('/logout', (req, res) => {
    var title = 'Welcome to logout\n';
    if (is_logged_in === true) {
        is_logged_in = false;
        user_email = null;
        global_logged_in_token = null;
        res.send({ 'title': title, 'msg': `You are logged out\n` });
    } else {
        res.send({ 'title': title, 'msg': `You are not logged in\n` });
    }
});

app.get('/stop', async (req, res) => {
    var title = 'Welcome to stop\n';
    res.send({ 'title': title, 'msg': 'Stopping server...\n' });
    await db.disconnect_from_database(connection);
    process.exit(0);
});

app.get('/', (req, res) => {
    var title = 'Welcome to /\n';
    res.send({ 'title': title, 'msg': 'Hello World\n' });
});

app.listen(port, async () => {
    console.log(`Server running on port ${port} at http://localhost:${port}`);
    connection = await db.connect_to_database();
    db.display_connection_id(connection);
});
