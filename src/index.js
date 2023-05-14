const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const db = require("./config/db");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config({encoding:'utf-8'});


const port = 3000;
var connected = false;
var connection = null;

app.use(express.raw());
app.use(express.json());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));

app.get('/connection', async (req, res) => {
    const tmp = await db.query(connection, "SHOW DATABASES", []);
    console.log(`${JSON.stringify(tmp)}`);
    res.send(tmp);
})

app.post('/login', async (req, res) => {
    const content = req.body;
    console.log(JSON.stringify(content));
    if (("email" in content) === true && ("password" in content) === true) {
        var response = await db.query(connection, `SELECT * FROM user WHERE email = "${content.email}"`, []);
        console.log(response.msg[0].email);
        res.send(response.msg[0]);
    } else {
        res.send("error");
    }
});

app.post('/register', async (req, res) => {
    const content = req.body;
    if ("email" in content === false || "password" in content === false || "name" in content === false || "firstname" in content === false) {
        res.send({"msg":"please send your email, password, name and firstname"});
        return "";
    }
    var user_exists = await db.is_in(connection, content.email);
    if (user_exists === true) {
        res.send({"msg":"user exists"});
        return "";
    } else {
        var add = await db.query(connection, `INSERT INTO user (name, firstname, email, password) VALUES ("${content.name}", "${content.firstname}","${content.email}", "${content.password}")`, []);
        console.log(add);
        res.send({"msg":"user created"});
    }
})

// bonus

app.get('/data', async (req, res) => {
    var result = await db.query(connection, "select * from user ", []);
    res.send(result);
});

app.get('/stop', (req, res) => {
    var title = 'Welcome to stop\n';
    res.send({ 'title': title, 'msg': 'Stopping server...\n' });
    process.exit(0);
});

app.get('/', (req, res) => {
    var title = 'Welcome to /\n';
    res.send({ 'title': title, 'msg': 'Hello World\n' });
});

app.get('/test', async (req, res) => {
    var rec = await db.is_in(connection, "sonic@example.com");
    res.send(rec);
});

app.listen(port, async () => {
    console.log(`Server running on port ${port} at http://localhost:${port}`);
    connection = await db.connect_database();
});
