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

module.exports = {
    add_todo,
    delete_all_user_todos
}
