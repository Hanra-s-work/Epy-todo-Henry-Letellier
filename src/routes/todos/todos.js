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
    var user_id = '0';
    const { title, description, due_time, status } = body_content;
    if ('user_id' in body_content === false) {
        const usr_node = await db.sql_get_user_node(connection, email);
        if (usr_node === injection.injection_message) {
            return usr_node;
        }
        if ("msg" in usr_node) {
            return usr_node.msg;
        }
        user_id = usr_node.id;
    } else {
        user_id = body_content.user_id;
        var response = await assets.check_if_user_id_exists(connection, user_id);
        if (response === false) {
            return "No user found";
        }
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

async function update_todo(connection, body_content, node_to_search = '-1') {
    const { title, description, due_time, user_id, status } = body_content;
    var data = { 'title': title, 'description': description, 'due_time': due_time, 'user_id': user_id, "status": status };
    const is_id = await assets.check_if_input_is_id(node_to_search);
    if (is_id === false) {
        return "Unknown input";
    }
    const todo_node = await db.sql_get_user(connection, 'todo', '', '', '', node_to_search);
    if (todo_node.length === 0) {
        return "No todo found";
    }
    raw_object = assets.fill_string_if_empty(raw_object, todo_node[0]);
    const result = await db.update_record(connection, 'todo', data, `id="${node_to_search}"`);
}

module.exports = {
    add_todo,
    delete_all_user_todos,
    forget_todo,
    update_todo
}
