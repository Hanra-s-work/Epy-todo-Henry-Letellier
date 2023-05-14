const db = require("./config/db");
const bcrypt = require("bcryptjs");
const injection = require("./config/check_if_sql_injection");
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config({ encoding: 'utf-8' });

async function get_body_content(req) {
    const body_content = req.body;
    return body_content;
}

async function check_if_vars_in_body(body, vars) {
    var i = 0;
    if (Array.isArray(vars) === false || body.length === 0) {
        console.error("body and vars have to be of type array.");
        return "body and vars have to be of type array.";
    };
    for (; i < vars.length; i++) {
        if ((vars[i] in body) === false) {
            return false;
        }
        if (body[vars[i]] === undefined) {
            return false;
        }
    }
    return true;
}

async function sign_user_in(connection, email, password) {
    const response = await db.sql_get_user(connection, 'user', user_name = '', user_firstname = '', user_email = email, user_id = 0);
    if (response.length > 0) {
        if (await bcrypt.compare(password, response[0].password) === true) {
            const token = await jsonwebtoken.sign({ id: response[0].id, email: response[0].email }, process.env.SECRET);
            return token;
        } else {
            return "wrong_password";
        }
    }
    return "unknown_user";
}

async function check_if_user_id_exists(connection, user_id = "1") {
    const response = await db.sql_get_user(connection, 'user', user_name = '', user_firstname = '', user_email = '', user_id = user_id);
    if (response.length > 0) {
        return true;
    }
    return false;
}

async function check_if_user_exists(connection, user_email) {
    const is_user_email = injection.check_if_sql_injection(user_email);
    if (is_user_email === true) {
        return injection.injection_message;
    }
    const response = await db.sql_get_user(connection, 'user', user_name = '', user_firstname = '', user_email = user_email, user_id = 0);
    if (response.length > 0) {
        return true;
    }
    return false;
}

async function check_if_var_in_url(req, searched_var) {
    if ((searched_var in req.params) === false) {
        return false;
    }
    if (req.params[searched_var] === undefined) {
        return false;
    }
    return true;
}
async function secure_the_password(password) {
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);
    return hashed_password;
}

function check_if_input_is_email(string = "example@example.com") {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(string);
}

function check_if_input_is_id(string = 0) {
    var idRegex = /^\d+$/;
    return idRegex.test(string);
}

function isJSON(str) {
    if (typeof str !== "string") {
        str = JSON.stringify(str);
    }
    try {
        JSON.parse(str);
        return true;
    } catch (err) {
        return false;
    }
}


module.exports = {
    sign_user_in,
    get_body_content,
    secure_the_password,
    check_if_var_in_url,
    check_if_user_exists,
    check_if_input_is_id,
    check_if_vars_in_body,
    check_if_input_is_email,
    check_if_user_id_exists,
    isJSON
}
