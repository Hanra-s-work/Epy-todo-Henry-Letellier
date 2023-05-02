const mysql = require('mysql2/promise');

async function queryDatabase() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: '3307',
        user: 'root',
        password: 'root',
        database: 'my_epy_todo'
    });

    console.log('Connection object:', connection);

    try {
        const [rows, fields] = await connection.execute('SELECT * FROM users');
        console.log('Results:', rows);
    } catch (err) {
        console.error('Error executing query:', err);
    } finally {
        await connection.end();
    }
}

queryDatabase();
