/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** todos.query.js
*/

const db = require("../../config/db");
const injection = require("../../config/check_if_sql_injection");

async function show_all_todos() {
    const response = await db.sql_get_all_todos();
    if (response === injection.injection_message) {
        return [response];
    }
    return [response];
}

async function show_all_user_todos(user_email) {
    if (user_email === null) {
        return ["internal server error"];
    }
    const user_node = await db.sql_get_user_node(user_email);
    if (user_node === injection.injection_message) {
        return [response];
    }
    const response = await db.sql_get_all_user_todos(`${user_node.id}`);
    if (response === injection.injection_message) {
        return [response];
    }
    return [response];
}

module.exports = {
    show_all_todos,
    show_all_user_todos
}
