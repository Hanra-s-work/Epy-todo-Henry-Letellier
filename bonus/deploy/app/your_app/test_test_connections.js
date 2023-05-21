/*
** EPITECH PROJECT, 2022
** epytodo_set_up
** File description:
** test_test_connections.js
*/

console.log("Hello World");

const mysql = require('mysql2/promise');

async function queryDatabase() {
    const connection = await mysql.createConnection({
        host: 'maria-db',
        port: '3306',
        user: 'lumine',
        password: 'lumine',
        database: 'mariadb_location'
    });

    console.log('Connection object:', connection);

    try {
        const [rows, fields] = await connection.execute('SELECT * FROM where_am_i');
        console.log('Results:', rows);
    } catch (err) {
        console.error('Error executing query:', err);
    } finally {
        await connection.end();
    }
}

await queryDatabase();
console.log("Goodbye World");
