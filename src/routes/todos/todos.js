/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** todos.js
*/

const db = require("../../config/db");
const assets = require("../../assets");
const injection = require("../../config/check_if_sql_injection");

async function add_todo(connection, body_content, email) {
    const { title, description, due_time, status } = body_content;
    const user_id = await assets.get_user_id(connection, body_content, email);
    if (typeof user_id != "number" && assets.check_if_input_is_id(user_id) === false) {
        return user_id;
    }
    const result = await db.insert_records(connection, 'todo', ["title", "description", "due_time", "user_id", "status"], [[title, description, due_time, user_id, status]]);
    if (result === injection.injection_message) {
        return injection.injection_message;
    }
    return "Creation success";
}

async function delete_all_user_todos(connection, node_to_search = "-1") {
    try {
        const response = await db.delete_record(connection, 'todo', `user_id="${node_to_search}"`);
        if (response === injection.injection_message) {
            return injection.injection_message;
        }
        return response;
    } catch (err) {
        return { "err": err };
    }
}

async function forget_todo(connect, node_to_search = "-1") {
    const is_id = assets.check_if_input_is_id(node_to_search);
    if (is_id === false) {
        return "Unknown input";
    }
    const is_injection = injection.check_if_sql_injection(node_to_search);
    if (is_injection === true) {
        return injection.injection_message;
    }
    const todo_node = await db.sql_get_user(connect, 'todo', '', '', '', node_to_search);
    if (todo_node.length === 0) {
        return "No todo found";
    }
    const deleted_todo = await db.delete_record(connect, 'todo', `id="${node_to_search}"`)
    if ("fieldCount" in deleted_todo) {
        return { "id": node_to_search, "msg": "success" };
    }
    if (deleted_todo === injection.injection_message) {
        return injection.injection_message;
    }
    return deleted_todo;
}

async function update_todo(connection, body_content, node_to_search = '-1', email = "") {
    const check_id = assets.check_if_input_is_id(node_to_search);
    if (check_id === false) {
        return "Unknown input";
    }
    const user_id = await assets.get_user_id(connection, body_content, email);
    if (typeof user_id != "number" && assets.check_if_input_is_id(user_id) === false) {
        return user_id;
    }
    const todo_node = await db.sql_get_user(connection, 'todo', "", "", "", node_to_search);
    if (todo_node === injection.injection_message) {
        return injection.injection_message;
    }
    if (todo_node.length === 0) {
        return "No todo found";
    }
    const { title, description, due_time, status } = body_content;
    var data = [title, description, due_time, user_id, status];
    const data_description = ['title', 'description', 'due_time', 'user_id', 'status'];
    data = assets.fill_array_if_empty(todo_node, data, data_description);
    const update = await db.update_record(connection, 'todo', data_description, data, `id="${node_to_search}"`);
    if (update === injection.injection_message) {
        return injection.injection_message;
    }
    if ("fieldCount" in update === false) {
        return "Update failed";
    }
    const table_content = await db.sql_get_user(connection, 'todo', '', '', '', node_to_search);
    if (table_content === injection.injection_message) {
        return injection.injection_message;
    }
    return table_content[0];
}

module.exports = {
    add_todo,
    delete_all_user_todos,
    forget_todo,
    update_todo
}
