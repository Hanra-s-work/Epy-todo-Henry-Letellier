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
    console.log(`user_todos = ${JSON.stringify(user_todos)}`);
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

module.exports = {
    forget_user,
}
