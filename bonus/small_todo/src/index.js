const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require("./config/db.js");
const auth = require("./routes/auth/auth.js");
const assets = require("./assets.js");
const todo_query = require("./routes/todos/todos.query.js");
const injection = require("./config/check_if_sql_injection.js");
const status_output = require("./config/speak_on_correct_status.js");
require('dotenv').config({ encoding: 'utf-8' });

const port = process.env.PORT || 3015;
var connection = null;
var user_email = null;
var is_logged_in = false;
var logged_in_user_key = null;

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
    var usr_msgs = Array();
    var title = 'Welcome to register\n';
    const error_message = "You must provide email, password, firstname and name\n";
    var token = "";
    const body_content = req.body;
    const is_register_data_present = await assets.check_if_vars_in_body(body_content, ["email", "password", "firstname", "name"]);
    if (typeof is_register_data_present === 'string') {
        res.send({ 'title': title, 'msg': error_message, 'token': '' });
        return [""];
    }
    if (is_register_data_present === false) {
        res.send({ 'title': title, 'msg': error_message, 'token': '' });
        return [""];
    }
    const check = await auth.register_user(body_content, res);
    if (check.length == 2 && (check[0] === "Creation success" || check[0] === "User exists")) {
        usr_msgs.push(check[1])
        const response = await auth.authenticate_user(connection, body_content, res);
        if (response.length > 1) {
            is_logged_in = response[0];
            user_email = response[1];
            logged_in_user_key = response[2];
            token = response[3];
        }
    } else {
        usr_msgs.push(check[0]);
    }
    res.send({ 'title': title, 'msg': `${usr_msgs.join('\n')}`, 'token': token });
});

app.post('/login', async (req, res) => {
    var token = '';
    const error_message = "You must provide email and password\n";
    var title = 'Welcome to login\n';
    const body_content = req.body;
    const check = await assets.check_if_vars_in_body(body_content, ["email", "password"]);
    if (typeof check === 'string') {
        res.send({ 'title': title, 'msg': error_message, 'token': '' });
        return [""];
    }
    if (check === false) {
        res.send({ 'title': title, 'msg': error_message, 'token': '' });
        return [""];
    }
    const response = await auth.authenticate_user(connection, body_content, res);
    if (response.length > 1) {
        is_logged_in = response[0];
        user_email = response[1];
        logged_in_user_key = response[2];
        token = response[3];
    }
    res.send({ 'title': title, 'msg': `${response.join('\n')}`, 'token': token });
});

app.get('/user', async (req, res) => {
    var title = 'Welcome to user\n';
    if (is_logged_in === true) {
        const user_node = await db.sql_get_user_node(connection, user_email);
        if (user_node === injection.injection_message) {
            res.send(injection.injection_message);
        } else if (user_node === { 'msg': "No user found" }) {
            res.send({ 'title': title, 'msg': `User not found\n` });
        } else {
            res.send({ 'title': title, 'msg': user_node });
        }
    } else {
        res.send({ 'title': title, 'msg': 'You are not logged in\n' });
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
        logged_in_user_key = null;
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
