/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** bonus.js
*/

const db = require("../config/db");
const rauth = require("./auth/auth");
const assets = require("../assets");
const mauth = require("../middleware/auth");
const injection = require("../config/check_if_sql_injection");
const user_query = require("./user/user.query");
const todo_query = require("./todos/todos.query");
const short_or_detailed = require("../config/short_or_detailed_message");
require("dotenv").config({ encoding: 'utf-8' });

function override(req, res) {
    var title = 'Welcome to override';
    global.is_logged_in = true;
    global.user_email = "lumine@example.com";
    global.global_logged_in_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE5LCJlbWFpbCI6Imx1bWluZTlAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODQwMDQyMDZ9.1lXgYd4o9xim5zVlxXjnMd_qEvSfv6QuZtf8_9wapFE";
    if (global.is_logged_in === true) {
        short_or_detailed.hello_world(res, title, `You are logged in as '${user_email}'`, global.global_logged_in_token);
    }
};

async function reflet_d_acide(req, res) {
    var title = 'Welcome to reflet-d-acide';
    if (global.is_logged_in === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global.global_logged_in_token);
    }
    var response = await db.sql_exampleUsage(global.connection)
    res.setHeader('Content-Type', 'application/json');
    res.send({ 'title': title, 'msg': response })
};

function logout_account(req, res) {
    var title = 'Welcome to logout';
    if (global.is_logged_in === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global.global_logged_in_token);
    }
    global.is_logged_in = false;
    global.user_email = null;
    global.global_logged_in_token = null;
    short_or_detailed.logout_success(res, title, 'You are logged out', global.global_logged_in_token);
}

async function stop_server(req, res) {
    var title = 'Welcome to stop';
    if (global.is_logged_in === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global.global_logged_in_token);
    }
    short_or_detailed.hello_world(res, title, 'Stopping server...', global.global_logged_in_token);
    await db.disconnect_from_database(global.connection);
    process.exit(0);
};

function welcome(req, res) {
    var title = 'Welcome to /';
    short_or_detailed.hello_world(res, title, 'Hello World', global.global_logged_in_token);
};


function container(app) {
    app.get('/', (req, res) => { welcome(req, res) });
    app.get('/stop', (req, res) => { stop_server(req, res) });
    app.get('/logout', (req, res) => { logout_account(req, res) });
    app.get('/override', (req, res) => { override(req, res) });
    app.get('/reflet-d-acide', (req, res) => { reflet_d_acide(req, res) });
}

module.exports = {
    container: container
}
