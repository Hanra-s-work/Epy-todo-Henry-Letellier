const db = require("./config/db");
const bcrypt = require("bcryptjs");
const injection = require("./config/check_if_sql_injection");
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config({ encoding: 'utf-8' });

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

async function get_body_content(req) {
    const body_content = req.body;
    return body_content;
}

async function check_if_vars_in_body(body, vars) {
    var i = 0;
    if (Array.isArray(vars) === false || body.length === 0) {
        console.error("body and vars have to be of type array.");
        // throw new Error("body and vars have to be of type array.");
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

async function secure_the_password(password) {
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);
    return hashed_password;
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

module.exports = {
    check_if_user_exists,
    get_body_content,
    secure_the_password,
    sign_user_in,
    check_if_vars_in_body
}
