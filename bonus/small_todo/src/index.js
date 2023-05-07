const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const jsonwebtoken = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const bodyParser = require('body-parser');
const db = require("./config/db.js");
require('dotenv').config();

const port = process.env.PORT || 3015;
var is_logged_in = false;

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


app.post('/register', (req, res) => {
    res.send('Welcome to registrations\n');
});

app.post('/login', (req, res) => {
    res.send('Welcome to login\n');
    is_logged_in = true;
});

app.get('/user', (req, res) => {
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
    res.send('Welcome to logout\n');
    is_logged_in = false;
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
