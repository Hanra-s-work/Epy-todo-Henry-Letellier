/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** user.query.js
*/

const db = require("../../config/db");
const todos_query = require("../todos/todos.query");
const assets = require("../../assets");
const injection = require("../../config/check_if_sql_injection");

async function get_other_usr_info(connection, node_to_search = "-1") {
    const is_email = assets.check_if_input_is_email(node_to_search);
    const is_id = assets.check_if_input_is_id(node_to_search);
    if (is_email === true) {
        const user_info = await db.sql_get_user_node(connection, node_to_search);
        if ("msg" in user_info) {
            return user_info.msg;
        }
        return user_info;
    }
    if (is_id === true) {
        const user_info = await db.sql_get_user(connection, 'user', '', '', '', node_to_search);
        if (user_info.length === 0) {
            return "No user found";
        }
        return user_info;
    }
    return "Unknown input";
}

async function forget_user(connection, node_to_search = "-1") {
    const is_id = assets.check_if_input_is_id(node_to_search);
    if (is_id === false) {
        return "Unknown input";
    }
    const is_injection = injection.check_if_sql_injection(node_to_search);
    if (is_injection === true) {
        return injection.injection_message;
    }
    const user_node = await db.sql_get_user(connection, 'user', '', '', '', node_to_search);
    if (user_node.length === 0) {
        return "No user found";
    }
    const user_todos = await todos_query.delete_all_user_todos(connection, user_node[0].id);
    if ("fieldCount" in user_todos === false) {
        return "Error deleting todos";
    }
    const deleted_user = await db.delete_record(connection, 'user', `id="${node_to_search}"`)
    if ("fieldCount" in deleted_user) {
        return { "id": node_to_search, "msg": "success" };
    }
    if (deleted_user === injection.injection_message) {
        return injection.injection_message;
    }
    return deleted_user;
}

async function update_user(connection, body_content, node_to_search = '-1') {
    var secured_password = "";
    const check_id = assets.check_if_input_is_id(node_to_search);
    if (check_id === false) {
        return "Unknown input";
    }
    const user_node = await db.sql_get_user(connection, 'user', "", "", "", node_to_search);
    if (user_node === injection.injection_message) {
        return injection.injection_message;
    }
    if (user_node.length === 0 || user_node.length === undefined) {
        return "No user found";
    }
    const { name, firstname, email, password } = body_content;
    if (email != user_node[0]["email"]) {
        const email_exits = await assets.check_if_email_already_exist(connection, email);
        if (email_exits === true) {
            return "Email already exits";
        }
    }
    if ("password" in body_content && password.length > 0 && assets.check_if_password_is_hashed(password) === false) {
        secured_password = await assets.secure_the_password(password);
    } else {
        secured_password = password;
    }
    var data = [name, firstname, email, secured_password];
    const data_names = ["name", "firstname", "email", "password"];
    data = assets.fill_array_if_empty(user_node, data, data_names);
    const update = await db.update_record(connection, 'user', data_names, data, `id="${node_to_search}"`);
    if (update === injection.injection_message) {
        return injection.injection_message;
    }
    if ("fieldCount" in update === false) {
        return "Update failed";
    }
    const table_content = await db.sql_get_user(connection, 'user', '', '', '', node_to_search);
    if (table_content === injection.injection_message) {
        return injection.injection_message;
    }
    return table_content[0];
}


module.exports = {
    get_other_usr_info,
    forget_user,
    update_user
}
