const db = require("./config/db.js");
const bcrypt = require("bcryptjs");
const injection = require("./config/check_if_sql_injection");
const jsonwebtoken = require('jsonwebtoken');
const { array_to_string, double_array_to_string } = require("./config/assets_transform.js");
require('dotenv').config({ encoding: 'utf-8' });

async function check_if_email_already_exist(connection, email) {
    const user_node = await db.sql_get_user(connection, 'user', '', '', email, '');
    if (user_node.length > 0) {
        return true;
    }
    return false;
}

function date_to_string(date = new Date()) {
    const normalizedDate = date.toISOString();
    const make_acceptable = normalizedDate.split('.')[0];
    return make_acceptable;
}

function isDate(input) {
    return input instanceof Date;
}

function fill_array_if_empty(sql_node, array_to_check = [""], variable_names_in_array = [""]) {
    if (array_to_check.length != variable_names_in_array.length) {
        return array_to_check;
    }
    var i = 0;
    for (; i < array_to_check.length; i++) {
        if (array_to_check[i] === "" || array_to_check[i] === undefined) {
            if (isDate(sql_node[0][variable_names_in_array[i]]) === true) {
                array_to_check[i] = date_to_string(sql_node[0][variable_names_in_array[i]]);
            } else {
                array_to_check[i] = sql_node[0][variable_names_in_array[i]];
            }
        }
    }
    return array_to_check;
}

function check_if_token_in_header(req) {
    if ('headers' in req === true) {
        if ('authorization' in req.headers === true) {
            return true;
        }
    }
    return false;
}

function check_if_token_is_valid(usr_token, secret_token) {
    if (usr_token in global.sessions === false) {
        return false
    }
    try {
        const decoded = jsonwebtoken.verify(usr_token, secret_token);
        return true;
    } catch (error) {
        return false;
    }
}

async function sign_user_in(connection, email, password) {
    const response = await db.sql_get_user(connection, 'user', user_name = '', user_firstname = '', user_email = email, user_id = 0);
    if (response.length > 0) {
        if (await bcrypt.compare(password, response[0].password) === true) {
            const token = jsonwebtoken.sign({ id: response[0].id, email: response[0].email }, process.env.SECRET);
            return token;
        } else {
            return "wrong_password";
        }
    }
    return "unknown_user";
}

function createSession(provided_user_email, is_logged_in, global_logged_in_token) {
    global.sessions[global_logged_in_token] = {userEmail:provided_user_email, loggedIn:is_logged_in}
}

function check_if_vars_in_body(body, vars) {
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

async function check_if_user_id_exists(connection, user_id = "1") {
    const response = await db.sql_get_user(connection, 'user', user_name = '', user_firstname = '', user_email = '', user_id = user_id);
    if (response.length > 0) {
        return true;
    }
    return false;
}

async function check_if_user_exists(connection, user_email = "") {
    const is_user_email = injection.check_if_sql_injection(user_email);
    if (is_user_email === true) {
        return injection.injection_message;
    }
    const response = await db.sql_get_user(connection, 'user', '', '', user_email, 0);
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

function check_if_logged_in(usr_token) {
    if (usr_token in global.sessions === true) {
        return global.sessions[usr_token].loggedIn
    }
    return false
}

function check_if_input_is_email(string = "example@example.com") {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(string);
}

function check_if_input_is_id(string = 0) {
    var idRegex = /^\d+$/;
    return idRegex.test(string);
}

function check_if_password_is_hashed(password = "123456") {
    try {
        // Check if the provided password hash is bcrypt
        const isBcryptHash = bcrypt.getRounds(password) > 0;

        if (isBcryptHash === true) {
            return true;
        }
        return false;
    } catch (error) {
        console.error(error);
        return false;
    }
}

function secure_password_if_not_secured(password) {
    const is_hashed = check_if_password_is_hashed(password);
    if (is_hashed === true) {
        return password;
    }
    return secure_the_password(password);
}

function fill_string_if_empty(raw_object, sql_node) {
    if (typeof raw_object != "object" || typeof sql_node != "object") {
        console.error("raw_object and sql_node have to be of type object.");
        return "raw_object and sql_node have to be of type object.";
    }
    for (let key in raw_object) {
        if (key in sql_node && raw_object[key].length === 0) {
            raw_object[key] = sql_node[key];
        }
    }
    return raw_object;
}

async function get_user_id(connection, body_content, email = "") {
    if ('user_id' in body_content === false) {
        const usr_node = await db.sql_get_user_node(connection, email);
        if (usr_node === injection.injection_message) {
            return usr_node;
        }
        if ("msg" in usr_node) {
            return usr_node.msg;
        }
        return usr_node.id;
    } else {
        user_id = body_content.user_id;
        var response = await check_if_user_id_exists(connection, user_id);
        if (response === false) {
            return "No user found";
        }
        return user_id;
    }
}

function get_json_token(req) {
    const authHeader = req.headers.authorization;
    if (authHeader === undefined || authHeader.length === 0) {
        return ''
    }
    const splitHeader = authHeader.split(' ')
    if (splitHeader.length < 2 ) {
        return ''
    }
    return splitHeader[1];
}

async function get_body_content(req) {
    const body_content = req.body;
    return body_content;
}

module.exports = {
    isJSON,
    isDate,
    sign_user_in,
    createSession,
    date_to_string,
    array_to_string,
    secure_the_password,
    fill_array_if_empty,
    fill_string_if_empty,
    double_array_to_string,
    secure_password_if_not_secured,
    get_user_id,
    get_json_token,
    get_body_content,
    check_if_logged_in,
    check_if_var_in_url,
    check_if_user_exists,
    check_if_input_is_id,
    check_if_vars_in_body,
    check_if_token_is_valid,
    check_if_input_is_email,
    check_if_user_id_exists,
    check_if_token_in_header,
    check_if_password_is_hashed,
    check_if_email_already_exist,
}
