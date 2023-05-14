const sql = require("mysql2/promise");
require('dotenv').config();

const port = 3306;

const pool = sql.createPool({
    host : process.env.MYSQL_HOST,
    port : port,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_ROOT_PASSWORD,
    database : process.env.MYSQL_DATABASE
});

async function connect_database() {
    try {
        const connection = await pool.getConnection();
        return connection;
    } catch (error) {
        console.error(`error : ${error}`);
        return `error : ${error}`;
    }
}

async function disconnect_database(connection) {
    connection.release();
}

async function query(connection, command, params) {
    try {
        const [rows, fields] = await connection.execute(command, params);
        return rows;
    } catch (error) {
        console.error(`Error executing query: ${error}`);
        return {'msg':`Error executing query: ${error}`};
    }
}

async function is_in(connection, email) {
    if (email.length === 0) {
        return {'msg': "no email provided"};
    }
    var data = await query(connection, `SELECT * FROM user WHERE email = "${email}"`, []);
    console.log(data);
    if (data.length != 0) {
        return true;
    }
    return false;
}

module.exports = {
    pool,
    connect_database,
    disconnect_database,
    query,
    is_in
};
