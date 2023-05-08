const mysql = require('mysql2/promise');
const injection = require('./check_if_sql_injection.js');
require('dotenv').config({ encoding: 'utf-8' })

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
                resolve(rows);
            } catch (err) {
                console.error('Error executing query:', err);
                reject(err);
            } finally {
                connection.release();
                // pool.end();
            }
        } catch (err) {
            console.error('Error getting connection from pool:', err);
            reject(err);
        }
    });
}

async function insert_records(table_name, fields, values) {
    if (!Array.isArray(values)) {
        return 'Error: values is not an array.';
    }
    const value_tuples = values.map(value_array => `(${value_array.map(value => `"${value}"`).join(",")})`).join(",");
    const sql_query = `INSERT INTO ${table_name} (${fields.join(',')}) VALUES ${value_tuples}`;

    console.log(`(ir) sql_query = '${sql_query}'`);

    const has_injection = await injection.check_if_injections_in_strings([table_name, fields, values, value_tuples]);
    if (has_injection === true) {
        return injection.injection_message;
    }

    const flattened_values = values.flat(); // flatten the array of arrays
    return execute_query(sql_query, flattened_values);
}



async function update_record(table_name, record, where_clause) {
    const fields = Object.keys(record).map((key) => `${key}=?`).join(',');
    const values = Object.values(record);
    const sql_query = `UPDATE ${table_name} SET ${fields} WHERE ${where_clause}`;
    const is_table = await injection.check_if_sql_injection(table_name);
    const is_values = await injection.check_if_sql_injection(values);
    const is_fields = await injection.check_if_sql_injection(fields);
    const is_where = await injection.check_if_symbol_and_command_injection(where_clause);
    if (is_table === true || is_values === true || is_fields === true || is_where === true) {
        return injection.injection_message;
    }
    return execute_query(sql_query, values);
}

async function delete_record(table_name, where_clause) {
    const is_where = await injection.check_if_symbol_and_command_injection(where_clause);
    const is_table_name = await injection.check_if_sql_injection(table_name);
    if (is_where === true || is_table_name === true) {
        return injection.injection_message;
    }
    const sql_query = `DELETE FROM ${table_name} WHERE ${where_clause}`;
    return execute_query(sql_query, []);
}

async function sql_exampleUsage() {
    const result = await execute_query('SELECT * FROM user');
    return result;
}

async function sql_get_user(table_name, user_name = "", user_firstname = "", user_email = "", user_id = 0) {
    var sql_query = "";
    const is_injection = await injection.check_if_injections_in_strings([table_name, user_name, user_firstname, user_email]);
    if (is_injection === true) {
        return injection.injection_message;
    }
    if (user_name.length > 0 && user_firstname.length > 0) {
        sql_query = `SELECT * FROM ${table_name} WHERE name="${user_name} AND firstname="${user_firstname}"`;
    } else if (user_name.length > 0) {
        sql_query = `SELECT * FROM ${table_name} WHERE name="${user_name}"`;
    } else if (user_firstname.length > 0) {
        sql_query = `SELECT * FROM ${table_name} WHERE firstname="${user_firstname}"`;
    } else if (user_email.length > 0) {
        sql_query = `SELECT * FROM ${table_name} WHERE email="${user_email}"`;
    } else if (user_id > 0) {
        sql_query = `SELECT * FROM ${table_name} WHERE id="${user_id}"`;
    } else {
        return { 'msg': "No search criteria" };
    }
    return await execute_query(sql_query, [user_name, user_firstname, user_email, user_id]);
}

module.exports = {
    execute_query,
    insert_records,
    update_record,
    delete_record,
    sql_exampleUsage,
    sql_get_user
};
