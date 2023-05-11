const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const db = require("./config/db");

const port = 3000;
var connected = false;

app.use(express.raw());
app.use(express.json());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', async (req, res) => {
    const content = req.body;
    if (("email" in content) === true && ("password" in content) === true) {
        res.send("ok");
    } else {
        res.send("error");
    }
});

// bonus

app.get('/stop', (req, res) => {
    var title = 'Welcome to stop\n';
    res.send({ 'title': title, 'msg': 'Stopping server...\n' });
    process.exit(0);
});

app.get('/', (req, res) => {
    var title = 'Welcome to /\n';
    res.send({ 'title': title, 'msg': 'Hello World\n' });
});

app.listen(port, async () => {
    console.log(`Server running on port ${port} at http://localhost:${port}`);
});
