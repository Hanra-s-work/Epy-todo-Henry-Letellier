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
    console.log(`(r) req.body = '${JSON.stringify(req.body)}`);
    const body_content = req.body;
    console.log("(r) checking data");
    const is_register_data_present = await assets.check_if_register_data_present(body_content);
    if (is_register_data_present === false) {
        res.send(`${title}You must provide email, password, firstname and name\n`);
    } else {
        console.log("(r) Data is valid");
        const { email, password, firstname, name } = body_content;
        const user_exists = await assets.check_if_user_exists(email);
        if (user_exists === true) {
            res.send(`${title}User already exists\n`);
        } else {
            console.log("(r) The user does not exist");
            const secured_password = await assets.secure_the_password(password);
            const response = db.insert_records('user', ['email', 'password', 'firstname', 'name'], [email, secured_password, firstname, name]);
            console.log("(r) Appended user to the table");
            if (response === injection.injection_message) {
                res.send(response);
            } else {
                console.log("(r) No injection attempted");
                logged_in_user_key = await assets.sign_user_in(email);
                if (logged_in_user_key.length > 0) {
                    console.log("(r) User is logged in");
                    res.send(`${title}User created\n${process.env.SECRET}\n`);
                    is_logged_in = true;
                } else {
                    console.log("(r) User is not logged in");
                    res.send(`${title}User not created\n`);
                }
            }
        }
    }
});

// async function test_sign_user_in() {
//     const response = await assets.sign_user_in("lumine@example.com");
//     console.log(`response = '${response}'`);
//     const response2 = await assets.sign_user_in("non-existent@example.com");
//     console.log(`response = '${response2}'`);
// }

// test_sign_user_in()

app.post('/login', (req, res) => {
    res.send('Welcome to login\n');
    is_logged_in = true;
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
        console.log(response);
        var json_strings = JSON.stringify(response);
        res.send(`${title}\n${json_strings}`)
    } else {
        res.send(`${title}You are not logged in\n`);
    }
});

app.get('/logout', (req, res) => {
    var title = 'Welcome to logout\n';
    if (is_logged_in === true) {
        is_logged_in = false;
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
