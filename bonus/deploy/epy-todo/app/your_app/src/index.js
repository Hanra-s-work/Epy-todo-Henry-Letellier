const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require("./config/db.js");
const bonus = require("./routes/bonus");
const user = require("./routes/user/user");
const todo = require("./routes/todos/todos");
const rauth = require("./routes/auth/auth.js");
const assets = require("./assets.js");
const short_or_detailed = require("./config/short_or_detailed_message.js");
require('dotenv').config({ encoding: 'utf-8' });

const port = process.env.PORT || 3000;
global.connection = null;
global.sessions = {}
// global.user_email = null;
// global.is_logged_in = false;
// global.global_logged_in_token = null;

app.use(cors());
app.use(express.raw());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

bonus.container(app);
todo.container(app);
user.container(app);


app.post('/register', async (req, res) => {
    var title = 'Welcome to register',
    logged_in_token = null,
    is_logged_in = false,
    user_email = null;
    const error_message = "You must provide email, password, firstname and name";
    const body_content = req.body;
    const is_register_data_present = assets.check_if_vars_in_body(body_content, ["email", "password", "firstname", "name"]);
    if (typeof is_register_data_present === 'string' || is_register_data_present === false) {
        short_or_detailed.error_body_message(res, title, error_message, '');
        return [""];
    }
    const check = await rauth.register_user(connection, body_content);
    if (check[0] === "Creation success") {
        logged_in_token = check[2];
        is_logged_in = check[3];
        user_email = body_content.email;
        assets.createSession(user_email, is_logged_in, logged_in_token)
        // global.is_logged_in = is_logged_in;
        // global.user_email = user_email;
        // global.global_logged_in_token = logged_in_token;
    }
    short_or_detailed.register_message(res, title, check[1], logged_in_token);
});

app.post('/login', async (req, res) => {
    const error_message = "You must provide an email and a password";
    var title = 'Welcome to login',
        logged_in_token = null,
        is_logged_in = false,
        user_email = null;
    const check = assets.check_if_vars_in_body(req.body, ["email", "password"]);
    if (typeof check === 'string' || check === false) {
        return short_or_detailed.error_body_message(res, title, error_message, logged_in_token);
    }
    const response = await rauth.authenticate_user(global.connection, req.body);
    if (response.length > 1) {
        logged_in_token = response[2];
        is_logged_in = response[0];
        user_email = response[1];
        assets.createSession(user_email, is_logged_in, logged_in_token)
        // global.is_logged_in = is_logged_in;
        // global.user_email = user_email;
        // global.global_logged_in_token = logged_in_token;
    }
    if (is_logged_in === false || response.length === 1) {
        return short_or_detailed.login_error_messages(res, title, response[0], logged_in_token)
    }
    short_or_detailed.success_connection_message(res, title, response[3], logged_in_token);
});

app.listen(port, async () => {
    console.log(`Server running on port ${port} at http://localhost:${port}`);
    global.connection = await db.connect_to_database();
    db.display_connection_id(global.connection);
});
