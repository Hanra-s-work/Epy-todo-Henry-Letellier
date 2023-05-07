const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const jsonwebtoken = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const bodyParser = require('body-parser');
const db = require("./sql.js");
require('dotenv').config();

const port = process.env.PORT || 3015;
var is_logged_in = false;

console.log("Hello World\n");

async function exampleUsage() {
    const result = await db.execute_query('SELECT * FROM user');
    console.log(result);
    res.send(result);
}

app.post('/register', (req, res) => {
    res.send('Welcome to registrations\n');
});

app.post('/login', (req, res) => {
    res.send('Welcome to login\n');
    is_logged_in = true;
});

app.get('/user', (req, res) => {
    res.send('Welcome to user\n');
    if (is_logged_in === true) {
        res.send("Hello World\n");
    } else {
        res.send('You are not logged in\n');
    }
});

app.get('/user/todos', (req, res) => {
    res.send('Welcome to user/todos\n');
    if (is_logged_in === true) {
        res.send("Hello World\n");
    } else {
        res.send('You are not logged in\n');
    }
});

app.get('/users/:id', (req, res) => {
    res.send('Welcome to users/:id\n');
    if (is_logged_in === true) {
        res.send("Hello World\n");
    } else {
        res.send('You are not logged in\n');
    }
});

app.get('/users/:email', (req, res) => {
    res.send('Welcome to users/:email\n');
    if (is_logged_in === true) {
        res.send("Hello World\n");
    } else {
        res.send('You are not logged in\n');
    }
});

app.put('/users/:id', (req, res) => {
    res.send('Welcome to users/:id\n');
    if (is_logged_in === true) {
        res.send("Hello World\n");
    } else {
        res.send('You are not logged in\n');
    }
});

app.delete('/users/:id', (req, res) => {
    res.send('Welcome to users/:id\n');
    if (is_logged_in === true) {
        res.send("Hello World\n");
    } else {
        res.send('You are not logged in\n');
    }
});

app.get('/todos', (req, res) => {
    res.send('Welcome to todos\n');
    if (is_logged_in === true) {
        res.send("Hello World\n");
    } else {
        res.send('You are not logged in\n');
    }
});

app.get('/todos/:id', (req, res) => {
    res.send('Welcome to todos/:id\n');
    if (is_logged_in === true) {
        res.send("Hello World\n");
    } else {
        res.send('You are not logged in\n');
    }
});

app.post('/todos', (req, res) => {
    res.send('Welcome to todos\n');
    if (is_logged_in === true) {
        res.send("Hello World\n");
    } else {
        res.send('You are not logged in\n');
    }
});

app.put('/todos/:id', (req, res) => {
    res.send('Welcome to todos/:id\n');
    if (is_logged_in === true) {
        res.send("Hello World\n");
    } else {
        res.send('You are not logged in\n');
    }
});

app.delete('/todos/:id', (req, res) => {
    res.send('Welcome to todos/:id\n');
    if (is_logged_in === true) {
        res.send("Hello World\n");
    } else {
        res.send('You are not logged in\n');
    }
})

// bonus
app.get('/reflet-d-acide', async (req, res) => {
    res.send('Welcome to reflet-d-acide\n');
    if (is_logged_in === true) {
        exampleUsage()
    } else {
        res.send('You are not logged in\n');
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


app.listen(port, () => {
    console.log(`Server running on port ${port}\n`);
});
