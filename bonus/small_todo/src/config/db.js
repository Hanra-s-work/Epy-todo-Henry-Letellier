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

async function execute_query(connection, sql_query, params) {
    return new Promise(async (resolve, reject) => {
        try {
            const [rows, fields] = await connection.execute(sql_query, params);
            resolve(rows);
        } catch (err) {
            console.error('Error executing query:', err);
            reject(err);
        }
    });
}

async function insert_records(connection, table_name = "user", fields = ["name", "firstname", "email", "password"], values = [["example", "example", "example@example.com", "example"]]) {
    if (!Array.isArray(values)) {
        return 'Error: values is not an array.';
    }
    const value_tuples = values.map(value_array => `(${value_array.map(value => `"${value}"`).join(",")})`).join(",");
    const sql_query = `INSERT INTO ${table_name} (${fields.join(',')}) VALUES ${value_tuples}`;

    const has_injection = await injection.check_if_injections_in_strings([table_name, fields, values, value_tuples]);
    if (has_injection === true) {
        return injection.injection_message;
    }

    const flattened_values = values.flat(); // flatten the array of arrays
    return execute_query(connection, sql_query, flattened_values);
}

async function update_record(connection, table_name = "user", fields = ["name", "firstname", "email", "password"], values = [["example", "example", "example@example.com", "example"]], where_clause = "") {
    if (!Array.isArray(values)) {
        return 'Error: values is not an array.';
    }
    const value_tuples = values.map(value_array => `(${value_array.map(value => `"${value}"`).join(",")})`).join(",");
    const sql_query = `UPDATE ${table_name} (${fields.join(',')}) VALUES ${value_tuples}`;

    const has_injection = await injection.check_if_injections_in_strings([table_name, fields, values, value_tuples]);
    if (has_injection === true) {
        return injection.injection_message;
    }

    const flattened_values = values.flat(); // flatten the array of arrays
    return execute_query(connection, sql_query, flattened_values);
}

async function delete_record(connection, table_name, where_clause) {
    const is_where = await injection.check_if_symbol_and_command_injection(where_clause);
    const is_table_name = await injection.check_if_sql_injection(table_name);
    if (is_where === true || is_table_name === true) {
        return injection.injection_message;
    }
    const sql_query = `DELETE FROM ${table_name} WHERE ${where_clause}`;
    return execute_query(connection, sql_query, []);
}

async function sql_exampleUsage(connection) {
    const result = await execute_query(connection, 'SELECT * FROM user');
    return result;
}

async function sql_get_user(connection, table_name = "user", user_name = "", user_firstname = "", user_email = "", user_id = '0') {
    var sql_query_oder = "*";
    const is_injection = await injection.check_if_injections_in_strings([table_name, user_name, user_firstname, user_email, user_id]);
    if (is_injection === true) {
        return injection.injection_message;
    }
    if (user_name.length > 0 && user_firstname.length > 0) {
        sql_query = `SELECT ${sql_query_oder} FROM ${table_name} WHERE name="${user_name} AND firstname="${user_firstname}"`;
    } else if (user_name.length > 0) {
        sql_query = `SELECT ${sql_query_oder} FROM ${table_name} WHERE name="${user_name}"`;
    } else if (user_firstname.length > 0) {
        sql_query = `SELECT ${sql_query_oder} FROM ${table_name} WHERE firstname="${user_firstname}"`;
    } else if (user_email.length > 0) {
        sql_query = `SELECT ${sql_query_oder} FROM ${table_name} WHERE email="${user_email}"`;
    } else if (user_id > 0) {
        sql_query = `SELECT ${sql_query_oder} FROM ${table_name} WHERE id="${user_id}"`;
    } else {
        return { 'msg': "No search criteria" };
    }
    return await execute_query(connection, sql_query, [user_name, user_firstname, user_email, user_id]);
}

async function sql_get_user_node(connection, email) {
    const sql_query = `SELECT * FROM user WHERE email="${email}"`;
    const is_injection = await injection.check_if_sql_injection(email);
    if (is_injection === true) {
        return injection.injection_message;
    }
    const result = await execute_query(connection, sql_query, [email]);
    if (result.length > 0) {
        return result[0];
    } else {
        return { 'msg': "No user found" };
    }
}

async function sql_get_all_todos(connection) {
    const sql_query = `SELECT * FROM todo`;
    const result = await execute_query(connection, sql_query, []);
    return result;
}

async function sql_get_all_user_todos(connection, user_id) {
    const sql_query = `SELECT * FROM todo WHERE user_id="${user_id}"`;
    const is_injection = await injection.check_if_sql_injection(user_id);
    if (is_injection === true) {
        return injection.injection_message;
    }
    const result = await execute_query(connection, sql_query, [user_id]);
    return result;
}

async function connect_to_database() {
    const connection = await pool.getConnection();
    return connection;
}

function display_connection_id(connection) {
    console.log(`connected as id ${connection.threadId}`);
}

async function disconnect_from_database(connection) {
    connection.release();
    pool.end();
}

module.exports = {
    pool,
    execute_query,
    insert_records,
    update_record,
    delete_record,
    sql_exampleUsage,
    sql_get_user,
    sql_get_user_node,
    display_connection_id,
    connect_to_database,
    disconnect_from_database,
    sql_get_all_todos,
    sql_get_all_user_todos
};
