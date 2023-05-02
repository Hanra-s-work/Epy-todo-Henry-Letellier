const http = require('http');
const mysql = require('mysql2/promise');
require('dotenv').config();

const server = http.createServer(async (req, res) => {
    try {
        // Connect to the database
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        });

        // Execute a SQL query
        const [rows, fields] = await connection.execute('SELECT * FROM users', []);


        // Send the data as a JSON response
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(rows));
    } catch (err) {
        console.error('Error executing query:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
});

const port = 3001;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
