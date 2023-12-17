/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** user.js
*/

const db = require("../../config/db");
const rauth = require("../auth/auth");
const mauth = require("../../middleware/auth");
const assets = require("../../assets");
const injection = require("../../config/check_if_sql_injection");
const user_query = require("../user/user.query");
const todo_query = require("../todos/todos.query");
const short_or_detailed = require("../../config/short_or_detailed_message");
require("dotenv").config({ encoding: 'utf-8' });

async function app_get_user(req, res) {
    var title = 'Welcome to user',
    json_token = assets.get_json_token(req);
    if (assets.check_if_logged_in(json_token) === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global.sessions[json_token]);
    }
    const user_node = await db.sql_get_user_node(global.connection, global.sessions[json_token].userEmail);
    if (user_node === injection.injection_message) {
        short_or_detailed.injection_message(res, title, global.sessions[json_token]);
    } else {
        short_or_detailed.display_user_info(res, title, user_node, global.sessions[json_token]);
    }
};

async function app_get_user_todos(req, res) {
    var title = "Welcome to user/todos",
    json_token = assets.get_json_token(req);
    if (assets.check_if_logged_in(json_token) === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global.sessions[json_token]);
    }
    const response = await todo_query.show_all_user_todos(global.connection, global.sessions[json_token].userEmail);
    if (response === injection.injection_message) {
        short_or_detailed.injection_message(res, title, global.sessions[json_token]);
    } else {
        short_or_detailed.display_user_todos(res, title, response, global.sessions[json_token]);
    }
};

async function app_get_user_by_id(req, res) {
    var title = 'Welcome to users/:id',
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
    const response = await user_query.get_other_usr_info(global.connection, req.params.id);
    short_or_detailed.users_id_messages(res, title, response, global.sessions[json_token]);

};

async function app_get_user_by_email(req, res) {
    var title = 'Welcome to users/:email',
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
    const response = await user_query.get_other_usr_info(global.connection, req.params.email);
    short_or_detailed.users_id_messages(res, title, response, global.sessions[json_token]);

};


async function app_put_users_id(req, res) {
    var title = 'Welcome to users/:id',
    json_token = assets.get_json_token(req);
    if (assets.check_if_logged_in(json_token) === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global.sessions[json_token]);
    }
    const is_id_in = assets.check_if_input_is_id(req.params.id);
    if (is_id_in === false) {
        return short_or_detailed.error_url_message(res, title, "You must provide an id", global.sessions[json_token]);
    }
    const update = await user_query.update_user(global.connection, req.body, req.params.id);
    short_or_detailed.put_user_id(res, title, update, global.sessions[json_token]);
};

async function app_delete_user_by_id(req, res) {
    var title = 'Welcome to users/:id',
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
    const response = await user_query.forget_user(global.connection, req.params.id);
    short_or_detailed.delete_users_id_messages(res, title, response, global.sessions[json_token]);

};

async function container(app) {
    app.get('/user', async (req, res) => { await app_get_user(req, res) });
    app.get('/user/todos', async (req, res) => { await app_get_user_todos(req, res) });
    app.get('/users/:id', async (req, res) => { await app_get_user_by_id(req, res) });
    app.get('/users/:email', async (req, res) => { await app_get_user_by_email(req, res) });
    app.put('/users/:id', (req, res) => { app_put_users_id(req, res) });
    app.delete('/users/:id', (req, res) => { app_delete_user_by_id(req, res) });
}
module.exports = {
    container: container
}
