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
    var is_logged_in = true,
        user_email = "lumine@example.com",
        global_logged_in_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE5LCJlbWFpbCI6Imx1bWluZTlAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODQwMDQyMDZ9.1lXgYd4o9xim5zVlxXjnMd_qEvSfv6QuZtf8_9wapFE";
    if (assets.check_if_logged_in(global_logged_in_token) === false) {
        assets.createSession(user_email, is_logged_in, global_logged_in_token)
    }
    // global.user_email = user_email;
    // global.is_logged_in = is_logged_in;
    // global.global_logged_in_token = global_logged_in_token;
    if (is_logged_in === true) {
        short_or_detailed.backdoor(res, title, `You are logged in as '${user_email}'`, global_logged_in_token);
    }
};

async function reflet_d_acide(req, res) {
    var title = 'Welcome to reflet-d-acide',
        json_token = assets.get_json_token(req);
    if (assets.check_if_logged_in(json_token) === false) {
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
    var title = 'Welcome to logout',
        json_token = assets.get_json_token(req);
    if (assets.check_if_logged_in(json_token) === false) {
        return short_or_detailed.user_not_logged_in(res, title);
    }
    const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    if (usr_logged_in != "Connection success") {
        return short_or_detailed.login_token_error_messages(res, title, usr_logged_in, global.global_logged_in_token);
    }
    global.sessions[json_token].loggedIn = false
    // global.is_logged_in = false;
    // global.user_email = null;
    // global.global_logged_in_token = null;
    short_or_detailed.logout_success(res, title, 'You are logged out', global.global_logged_in_token);
}

async function stop_server(req, res) {
    var title = 'Welcome to stop',
    json_token = assets.get_json_token(req);
    if (assets.check_if_logged_in(json_token) === false) {
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
    var data = JSON.stringify(global.sessions)
    short_or_detailed.hello_world(res, title, `Hello World ${data}`, '');
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
