const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
require('dotenv').config({ encoding: 'utf-8' });

// DB_HOST=maria-db
// DB_PORT = 3306
// DB_USER = root
// DB_PASSWORD = root
// DB_DATABASE = 'my_epy_todo'

// process.env.MYSQL_HOST = 'maria-db';
// process.env.MYSQL_USER = 'root';
// process.env.MYSQL_ROOT_PASSWORD = 'root';
// process.env.MYSQL_DATABASE = 'my_epy_todo';

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: '3306',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

app.get('/reflet-d-acide', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows, fields] = await connection.execute('SELECT * FROM user', []);
        console.log('Results:', rows);
        res.send(rows);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Error executing query');
    }
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

console.log(`host: ${process.env.MYSQL_HOST}, port: '3306', user: ${process.env.MYSQL_USER}, password: ${process.env.MYSQL_ROOT_PASSWORD},database: ${process.env.MYSQL_DATABASE}`);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
