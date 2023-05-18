/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** user.js
*/

const db = require("../../config/db");
const todos = require("../todos/todos");
const assets = require("../../assets");
const injection = require("../../config/check_if_sql_injection");

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
    const user_todos = await todos.delete_all_user_todos(connection, user_node[0].id);
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
    const check_id = assets.check_if_input_is_id(node_to_search);
    if (check_id === false) {
        return "Unknown input";
    }
    const user_node = await db.sql_get_user(connection, 'user', "", "", "", node_to_search);
    console.log(`user_node.length = ${user_node.length}`);
    if (user_node === injection.injection_message) {
        return injection.injection_message;
    }
    if (user_node.length === 0 || user_node.length === undefined) {
        return "No user found";
    }
    console.log("in update_user");
    console.log(`node_to_search = ${node_to_search}`);
    console.log(`user_node = ${JSON.stringify(user_node)}`);
    const { name, firstname, email, password } = body_content;
    if (email != user_node[0]["email"]) {
        const email_exits = await assets.check_if_email_already_exist(connection, email);
        if (email_exits === true) {
            return "Email already exits";
        }
    }
    var data = [name, firstname, email, password];
    const data_names = ["name", "firstname", "email", "password"];
    console.log(`data = ${data}`);
    data = assets.fill_array_if_empty(user_node, data, data_names);
    console.log(`data = ${data}`);
    data[data.length - 1] = await assets.secure_the_password(data[data.length - 1]);
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
    forget_user,
    update_user
}
