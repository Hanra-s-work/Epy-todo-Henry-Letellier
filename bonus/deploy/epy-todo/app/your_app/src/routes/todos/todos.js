/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** todos.js
*/

const db = require("../../config/db");
const rauth = require("../auth/auth");
const assets = require("../../assets");
const mauth = require("../../middleware/auth");
const injection = require("../../config/check_if_sql_injection");
const user_query = require("../user/user.query");
const todo_query = require("../todos/todos.query");
const short_or_detailed = require("../../config/short_or_detailed_message");
require("dotenv").config({ encoding: 'utf-8' });

async function app_get_todos(req, res) {
    var title = "Welcome to todos",
    json_token = assets.get_json_token(req);
    if (assets.check_if_logged_in(json_token) === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global.sessions[json_token]);
    }
    const response = await todo_query.show_all_todos(global.connection);
    if (response === injection.injection_message) {
        short_or_detailed.injection_message(res, title, global.sessions[json_token]);
    } else {
        short_or_detailed.display_all_todos(res, title, response, global.sessions[json_token]);
    }
};

async function get_todos_by_id(req, res) {
    var title = 'Welcome to todos/:id',
    json_token = assets.get_json_token(req);
    if (assets.check_if_logged_in(json_token) === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global.sessions[json_token]);
    }
    const is_id_in = await assets.check_if_var_in_url(req, "id");
    if (is_id_in === false) {
        return short_or_detailed.error_url_message(res, title, "You must provide an id or an email", global.sessions[json_token]);
    }
    const response = await todo_query.show_specific_todo(global.connection, req.params.id);
    short_or_detailed.display_todo_id(res, title, response, global.sessions[json_token]);
};

async function app_post_todos(req, res) {
    var title = 'Welcome to todos',
    json_token = assets.get_json_token(req);
    if (assets.check_if_logged_in(json_token) === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global.sessions[json_token]);
    }
    const is_input_correct = assets.check_if_vars_in_body(req.body, ["title", "description", "due_time", "status"]);
    if (typeof is_input_correct === 'string' || is_input_correct === false) {
        short_or_detailed.error_body_message(res, title, "You must provide a title, a description, a due_time, a status and (optional) the user_id", global.sessions[json_token]);
        return [""];
    }
    const response = await todo_query.add_todo(global.connection, req.body, global.sessions[json_token].userEmail);
    if (response === "Creation success") {
        const todo = await todo_query.show_all_todos(global.connection);
        short_or_detailed.display_all_todos(res, title, todo, global.sessions[json_token]);
    } else {
        short_or_detailed.display_post_todo_errors(res, title, response, global.sessions[json_token]);
    }
};

async function app_put_todos_by_id(req, res) {
    var title = 'Welcome to todos/:id',
    json_token = assets.get_json_token(req);
    if (assets.check_if_logged_in(json_token) === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global.sessions[json_token]);
    }
    const is_id_in = await assets.check_if_var_in_url(req, "id");
    if (is_id_in === false) {
        return short_or_detailed.error_url_message(res, title, "You must provide an id", global.sessions[json_token]);
    }
    const response = await todo_query.update_todo(global.connection, req.body, req.params.id, global.sessions[json_token].userEmail);
    short_or_detailed.display_put_todos(res, title, response, global.sessions[json_token]);
};

async function app_delete_todos_by_id(req, res) {
    var title = 'Welcome to todos/:id',
    json_token = assets.get_json_token(req);
    if (assets.check_if_logged_in(json_token) === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global.sessions[json_token]);
    }
    const is_id_in = await assets.check_if_var_in_url(req, "id");
    if (is_id_in === false) {
        return short_or_detailed.error_url_message(res, title, "You must provide an id", global.sessions[json_token]);
    }
    const response = await todo_query.forget_todo(global.connection, req.params.id);
    short_or_detailed.delete_todos_id_messages(res, title, response, global.sessions[json_token]);
};

async function container(app) {
    app.get('/todos', async (req, res) => { await app_get_todos(req, res) });
    app.get('/todos/:id', async (req, res) => { await get_todos_by_id(req, res) });
    app.post('/todos', async (req, res) => { await app_post_todos(req, res) });
    app.put('/todos/:id', async (req, res) => { await app_put_todos_by_id(req, res) });
    app.delete('/todos/:id', async (req, res) => { await app_delete_todos_by_id(req, res) });
}

module.exports = {
    container: container
}
