const express = require('express');
const app = express();
const { all } = require('express/lib/application');
const { json } = require('express/lib/response');
const bodyParser = require('body-parser');
const db = require("./config/db.js");
const assets = require("./assets.js");
const injection = require("./config/check_if_sql_injection.js");
const auth = require("./routes/auth/auth.js");
require('dotenv').config({ encoding: 'utf-8' });

const port = process.env.PORT || 3015;
var is_logged_in = false;
var user_email = null;
var logged_in_user_key = null;

app.use(bodyParser.json());

app.get('/override', (req, res) => {
    var title = 'Welcome to override\n';
    is_logged_in = true;
    email = "lumine@example.com";
    if (is_logged_in === true) {
        res.send(`${title}You are logged in as '${email}'\n`);
    }
})

console.log("Hello World\n");

app.post('/register', async (req, res) => {
    var usr_msgs = Array();
    const body_content = req.body;
    const is_register_data_present = await assets.check_if_register_data_present(body_content);
    if (is_register_data_present === false) {
        res.send(`You must provide email, password, firstname and name\n`);
        return [""];
    }
    const check = await auth.register_user(body_content, res);
    if (check.length == 2 && (check[0] === "Creation success" || check[0] === "User exists")) {
        usr_msgs.push(check[1])
        const response = await auth.authenticate_user(body_content, res);
        if (response.length > 1) {
            is_logged_in = response[0];
            user_email = response[1];
            logged_in_user_key = response[2];
            usr_msgs.push(response[3]);
        }
    } else {
        usr_msgs.push(check[0]);
    }
    res.send(usr_msgs.join('\n'));
});

app.post('/login', async (req, res) => {
    const body_content = req.body;
    const check = await assets.check_if_login_data_present(body_content);
    if (check === false) {
        res.send(`${title}You must provide email and password\n`);
        return [""];
    }
    const response = await auth.authenticate_user(body_content, res);
    if (response.length > 1) {
        is_logged_in = response[0];
        user_email = response[1];
        logged_in_user_key = response[2];
        res.send(response[3]);
        return [""];
    }
    res.send(response.join('\n'));
});

app.get('/user', async (req, res) => {
    if (is_logged_in === true) {
        const user_node = await db.sql_get_user_node(user_email);
        if (user_node === injection.injection_message) {
            res.send(injection.injection_message);
        } else if (user_node === { 'msg': "No user found" }) {
            res.send(`${title}User not found\n`);
        } else {
            res.send(user_node);
        }
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

app.get('/stop', (req, res) => {
    res.send('Stopping server...\n');
    process.exit(0);
});

app.get('/', (req, res) => {
    res.send('Hello World\n');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}\n`);
});
