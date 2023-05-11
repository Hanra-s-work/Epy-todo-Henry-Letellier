const sql = require("mysql2/promise");
require('dotenv').config();

const pool = sql.createPool({
    host : process.env.MYSQL_HOST,
    port : 3306,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_ROOT_PASSWORD,
    database : process.env.MYSQL_DATABASE
});

async function connect_database() {
    try {
        const connection = await connect.getConnection();
    } catch (error) {
        console.error(`error : ${error}`);
        reject(error);
    }
}

async function disconnect_database(connection) {
    connection.release();
}

module.exports = {
    pool,
    connect_database,
    disconnect_database
};
