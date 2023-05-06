const mysql = require('mysql2/promise');
require('dotenv').config()


const DB_PORT = 3306;

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: DB_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
});


async function execute_query(sql_query, params) {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await pool.getConnection();
            try {
                const [rows, fields] = await connection.execute(sql_query, params);
                console.log('Results:', rows);
                resolve(rows);
            } catch (err) {
                console.error('Error executing query:', err);
                reject(err);
            } finally {
                connection.release();
                pool.end();
            }
        } catch (err) {
            console.error('Error getting connection from pool:', err);
            reject(err);
        }
    });
}


async function insert_record(table_name, record) {
    const fields = Object.keys(record).join(',');
    const values = Object.values(record);
    const placeholders = Array(values.length).fill('?').join(',');
    const sql_query = `INSERT INTO ${table_name} (${fields}) VALUES (${placeholders})`;
    return execute_query(sql_query, values);
}


async function update_record(table_name, record, where_clause) {
    const fields = Object.keys(record).map((key) => `${key}=?`).join(',');
    const values = Object.values(record);
    const sql_query = `UPDATE ${table_name} SET ${fields} WHERE ${where_clause}`;
    return execute_query(sql_query, values);
}


async function delete_record(table_name, where_clause) {
    const sql_query = `DELETE FROM ${table_name} WHERE ${where_clause}`;
    return execute_query(sql_query, []);
}

module.exports = {
    execute_query,
    insert_record,
    update_record,
    delete_record
};
