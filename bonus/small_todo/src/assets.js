const db = require("./config/db");
const bcrypt = require("bcryptjs");
const injection = require("./config/check_if_sql_injection");
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config({ encoding: 'utf-8' });

async function check_if_user_exists(user_email) {
    const is_user_email = injection.check_if_sql_injection(user_email);
    if (is_user_email === true) {
        return injection.injection_message;
    }
    const response = await db.sql_get_user('user', user_name = '', user_firstname = '', user_email = user_email, user_id = 0);
    if (response.length > 0) {
        return true;
    }
    return false;
}

async function get_body_content(req) {
    const body_content = req.body;
    return body_content;
}

async function check_if_register_data_present(body) {
    if (body.email === undefined || body.password === undefined || body.firstname === undefined || body.name === undefined) {
        return false;
    } else {
        return true;
    }
}

async function check_if_login_data_present(body) {
    if (body.email === undefined || body.password === undefined) {
        return false;
    } else {
        return true;
    }
}

async function secure_the_password(password) {
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);
    console.log(`password = '${password}', hashed_password = '${hashed_password}`)
    return hashed_password;
}

async function sign_user_in(email, password) {
    const response = await db.sql_get_user('user', user_name = '', user_firstname = '', user_email = email, user_id = 0);
    if (response.length > 0) {
        console.log(`password = '${response[0].password} == secured_password = '${password}'`);
        if (await bcrypt.compare(password, response[0].password) === true) {
            const token = await jsonwebtoken.sign({ id: response[0].id }, process.env.SECRET);
            return token;
        } else {
            return "wrong_password";
        }
    }
    return "unknown_user";
}

module.exports = {
    check_if_user_exists,
    check_if_register_data_present,
    check_if_login_data_present,
    get_body_content,
    secure_the_password,
    sign_user_in
}
