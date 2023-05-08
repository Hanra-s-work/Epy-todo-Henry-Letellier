const express = require('express');
const app = express();
const { all } = require('express/lib/application');
const { json } = require('express/lib/response');
const jsonwebtoken = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const bodyParser = require('body-parser');
const db = require("./config/db.js");
const assets = require("./assets.js");
const injection = require("./config/check_if_sql_injection.js");
const { escape } = require('mysql2');
require('dotenv').config({ encoding: 'utf-8' });

const port = process.env.PORT || 3015;
var is_logged_in = false;
var user_email = null;
var logged_in_user_key = null;

app.use(bodyParser.json());

app.get('/override', (req, res) => {
    var title = 'Welcome to override\n';
    is_logged_in = true;
    if (is_logged_in === true) {
        res.send(`${title}You are logged in\n`);
    } else {
        res.send(`${title}You are not logged in\n`);
    }
})

console.log("Hello World\n");

app.post('/register', async (req, res) => {
    var title = 'Welcome to registrations\n';
    const body_content = req.body;
    const is_register_data_present = await assets.check_if_register_data_present(body_content);
    if (is_register_data_present === false) {
        res.send(`${title}You must provide email, password, firstname and name\n`);
    } else {
        const { email, password, firstname, name } = body_content;
        const user_exists = await assets.check_if_user_exists(email);
        if (user_exists === true) {
            res.send(`${title}User already exists\n`);
        } else {
            const secured_password = await assets.secure_the_password(password);
            const response = await db.insert_records('user', ['email', 'password', 'firstname', 'name'], [[email, secured_password, firstname, name]]);
            if (response === injection.injection_message) {
                res.send(response);
            } else {
                logged_in_user_key = await assets.sign_user_in(email, secured_password);
                if (logged_in_user_key === "wrong_password") {
                    res.send(`${title}Wrong password\n`);
                } else if (logged_in_user_key === "unknown_user") {
                    res.send(`${title}Unknown user\n`);
                } else {
                    res.send(`${title}User created\n${logged_in_user_key}\n`);
                    is_logged_in = true;
                    user_email = email;
                }
            }
        }
    }
});

app.post('/login', async (req, res) => {
    var title = 'Welcome to login\n';
    const body_content = req.body;
    const response = await assets.check_if_login_data_present(body_content);
    if (response === false) {
        res.send(`${title}You must provide email and password\n`);
    } else {
        const { email, password } = body_content;
        const user_node = await db.sql_get_user_node(email);
        if (user_node === injection.injection_message) {
            res.send(injection.injection_message);
        } else if (user_node === { 'msg': "No user found" }) {
            res.send(`${title}User not found\n`);
        } else {
            const logged_in_user_key = await assets.sign_user_in(email, password);
            if (logged_in_user_key === "wrong_password") {
                res.send(`${title}Wrong password\n`);
            } else if (logged_in_user_key === "unknown_user") {
                res.send(`${title}Unknown user\n`);
            } else {
                res.send(`Welcome ${user_node.firstname}\n`);
                is_logged_in = true;
                user_email = user_node.email;
            }
        }
    }
});

app.get('/user', async (req, res) => {
    if (is_logged_in === true) {
        res.send('Welcome to user\n');
    } else {
        res.send('You are not logged in\n');
    }
});

app.get('/user/todos', (req, res) => {
    if (is_logged_in === true) {
        res.send('Welcome to user/todos\n');
    } else {
        res.send('You are not logged in\n');
    }
});

app.get('/users/:id', (req, res) => {
    if (is_logged_in === true) {
        res.send('Welcome to users/:id\n');
    } else {
        res.send('You are not logged in\n');
    }
});

app.get('/users/:email', (req, res) => {
    if (is_logged_in === true) {
        res.send('Welcome to users/:email\n');
    } else {
        res.send('You are not logged in\n');
    }
});

app.put('/users/:id', (req, res) => {
    if (is_logged_in === true) {
        res.send('Welcome to users/:id\n');
    } else {
        res.send('You are not logged in\n');
    }
});

app.delete('/users/:id', (req, res) => {
    if (is_logged_in === true) {
        res.send('Welcome to users/:id\n');
    } else {
        res.send('You are not logged in\n');
    }
});

app.get('/todos', (req, res) => {
    if (is_logged_in === true) {
        res.send('Welcome to todos\n');
    } else {
        res.send('You are not logged in\n');
    }
});

app.get('/todos/:id', (req, res) => {
    if (is_logged_in === true) {
        res.send('Welcome to todos/:id\n');
    } else {
        res.send('You are not logged in\n');
    }
});

app.post('/todos', (req, res) => {
    if (is_logged_in === true) {
        res.send("Welcome to todos\nHello World\n");
    } else {
        res.send('Welcome to todos\nYou are not logged in\n');
    }
});

app.put('/todos/:id', (req, res) => {
    if (is_logged_in === true) {
        res.send('Welcome to todos/:id\n');
    } else {
        res.send('You are not logged in\n');
    }
});

app.delete('/todos/:id', (req, res) => {
    if (is_logged_in === true) {
        res.send('Welcome to todos/:id\n');
    } else {
        res.send('You are not logged in\n');
    }
})

// bonus
app.get('/reflet-d-acide', async (req, res) => {
    var title = 'Welcome to reflet-d-acide\n';
    if (is_logged_in === true) {
        var response = await db.sql_exampleUsage()
        var json_strings = JSON.stringify(response);
        res.setHeader('Content-Type', 'application/json');
        res.send(`${json_strings}`)
    } else {
        res.send(`${title}You are not logged in\n`);
    }
});

app.get('/logout', (req, res) => {
    var title = 'Welcome to logout\n';
    if (is_logged_in === true) {
        is_logged_in = false;
        user_email = null;
        logged_in_user_key = null;
        res.send(`${title}You are logged out\n`);
    } else {
        res.send(`${title}You are not logged in\n`);
    }
});

app.get('/', (req, res) => {
    res.send('Hello World\n');
});

app.get('/stop', (req, res) => {
    res.send('Stopping server...\n');
    process.exit(0);
});

app.use((err, req, res, next) => {
    if (err instanceof Error && err.code === 'ERR_HTTP_HEADERS_SENT') {
        console.error(err.stack);
        res.status(500).send('Headers already sent');
    } else {
        next(err);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}\n`);
});
