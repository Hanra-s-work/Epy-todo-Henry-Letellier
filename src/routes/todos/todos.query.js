/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** todos.query.js
*/

const db = require("../../config/db");
const assets = require("../../assets");
const injection = require("../../config/check_if_sql_injection");

async function show_all_todos(connection) {
    const response = await db.sql_get_all_todos(connection);
    if (response === injection.injection_message) {
        return response;
    }
    return response;
}

async function show_all_user_todos(connection, user_email) {
    if (user_email === null) {
        return "internal server error";
    }
    const user_node = await db.sql_get_user_node(connection, user_email);
    if (user_node === injection.injection_message) {
        return response;
    }
    const response = await db.sql_get_all_user_todos(connection, `${user_node.id}`);
    if (response === injection.injection_message) {
        return response;
    }
    return response;
}

async function show_specific_todo(connection, node_to_search = '-1') {
    const check_id = assets.check_if_input_is_id(node_to_search);
    if (check_id === false) {
        return "Unknown input";
    }
    const get_todo_node = await db.sql_get_user(connection, "todo", "", "", "", node_to_search);
    if (get_todo_node.length === 0) {
        return "No todo found";
    }
    return get_todo_node[0];
}

module.exports = {
    show_all_todos,
    show_all_user_todos,
    show_specific_todo
}
