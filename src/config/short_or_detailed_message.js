/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** short_or_detailed_message.js
*/

const assets = require("../assets");
const injection = require("./check_if_sql_injection.js");
const pre_coded = require("../middleware/pre_coded_messages.js");
const speak_on_correct_status = require("../config/speak_on_correct_status");
const status_output = require("./speak_on_correct_status.js");

var custom_message = true;

function custom_or_bland_success(res, title = "", msg = "", token = "", custom = false) {
    if (custom === false) {
        status_output.success(res, { 'msg': msg });
    } else {
        status_output.success(res, { 'title': title, 'msg': msg, 'token': token });
    }
    return [""];
}

function error_body_message(res, title = "", msg = "", token = "") {
    if (custom_message === false) {
        pre_coded.bad_parameters(res);
    } else {
        status_output.unauthorized(res, { 'title': title, 'msg': msg, 'token': token });
    }
    return [""];
}

function success_connection_message(res, title = "", msg = "", token = "") {
    if (custom_message === false) {
        status_output.success(res, { "token": token });
    } else {
        status_output.success(res, { 'title': title, 'msg': msg, 'token': token });
    }
    return [""];
}

function injection_message(res, title = "", token = "") {
    if (custom_message === false) {
        status_output.bad_request(res, { 'msg': injection.injection_message });
    } else {
        status_output.bad_request(res, { 'title': title, 'msg': injection.injection_message, 'token': token });
    }
    return [""];
}

function user_not_logged_in(res, title = "") {
    if (custom_message === false) {
        pre_coded.user_not_logged_in(res);
    } else {
        status_output.unauthorized(res, { 'title': title, 'msg': "User not logged in", "token": "" });
    }
    return [""];
}

function login_error_messages(res, title = "", msg = "", token = "") {
    if (injection.injection_message === msg) {
        injection_message(res, title, token);
    }
    if (custom_message === false) {
        if (msg === "User not found" || msg === "Unknown user") {
            pre_coded.user_not_found(res);
        } else if (msg === "Wrong password") {
            status_output.unauthorized(res, { 'msg': 'Invalid Credentials' });
        } else {
            pre_coded.internal_server_error(res);
        }
    } else {
        if (msg === "User not found" || msg === "Unknown user") {
            pre_coded.not_found(res);
        } else if (msg === "Wrong password") {
            status_output.unauthorized(res, { 'title': title, 'msg': msg, 'token': token });
        } else {
            status_output.internal_server_error(res, { 'title': title, 'msg': msg, 'token': token });
        }
    }
    return [""];
}

function register_message(res, title = "", msg = "", token = "") {
    if (msg === "User created") {
        if (custom_message === false) {
            status_output.success(res, { 'token': token });
        } else {
            status_output.created(res, { 'title': title, 'msg': msg, 'token': token });
        }
    } else if (msg === "User already exists") {
        if (custom_message === false) {
            pre_coded.user_exists(res);
        } else {
            status_output.unauthorized(res, { 'title': title, 'msg': msg, 'token': token });
        }
    } else if (injection.injection_message === msg) {
        injection_message(res, title, token);
    } else {
        if (custom_message === false) {
            pre_coded.internal_server_error(res);
        } else {
            status_output.internal_server_error(res, { 'title': title, 'msg': msg, 'token': token });
        }
    }
    return [""];
}

function display_user_info(res, title = "", user_data = {}, token = "") {
    if (Array.isArray(user_data) === true && user_data.length == 1) {
        user_data = user_data[0];
    }
    if (custom_message === false) {
        status_output.success(res, user_data);
    } else {
        status_output.success(res, { 'title': title, 'msg': user_data, 'token': token });
    }
    return [""];
}

function display_user_todos(res, title = "", user_data = {}, token = "") {
    if (custom_message === false) {
        status_output.success(res, user_data);
    } else {
        status_output.success(res, { 'title': title, 'msg': user_data, 'token': token });
    }
    return [""];
}

function display_all_todos(res, title = "", user_data = {}, token = "") {
    if (custom_message === false) {
        status_output.success(res, user_data);
    } else {
        status_output.success(res, { 'title': title, 'msg': user_data, 'token': token });
    }
    return [""];
}

function display_post_todo_errors(res, title = "", msg = "", token = "") {
    if (msg === injection.injection_message) {
        injection_message(res, title, token);
    } else if (msg === "No user found") {
        pre_coded.not_found(res);
    } else {
        if (custom_message === false) {
            pre_coded.internal_server_error(res);
        } else {
            status_output.internal_server_error(res, { 'title': title, 'msg': msg, 'token': token });
        }
    }
    return [""];
}

function error_url_message(res, title = "", msg = "", token = "") {
    if (custom_message === false) {
        pre_coded.not_found(res);
    } else {
        status_output.not_found(res, { 'title': title, 'msg': msg, 'token': token });
    }
    return [""];
}

function users_id_messages(res, title = "", msg = "", token = "") {
    if (assets.isJSON(msg) === true) {
        display_user_info(res, title, msg, token);
    } else if (msg === "No user found") {
        pre_coded.not_found(res);
    } else if (msg === "Unknown input") {
        pre_coded.bad_parameters(res);
    } else {
        if (custom_message === false) {
            pre_coded.internal_server_error(res);
        } else {
            status_output.internal_server_error(res, { 'title': title, 'msg': msg, 'token': token });
        }
    }
}

function delete_users_id_messages(res, title = "", msg = "", token = "") {
    if (assets.isJSON(msg) === true) {
        custom_or_bland_success(res, title, `Successfully deleted record number: ${msg.id}`, token, custom_message);
    } else if (msg === "No user found") {
        pre_coded.not_found(res);
    } else if (msg === "Unknown input") {
        pre_coded.bad_parameters(res);
    } else if (msg === injection.injection_message) {
        injection_message(res, title, token);
    } else {
        if (custom_message === false) {
            pre_coded.internal_server_error(res);
        } else {
            status_output.internal_server_error(res, { 'title': title, 'msg': msg, 'token': token });
        }
    }
}

function delete_todos_id_messages(res, title = "", msg = "", token = "") {
    if (assets.isJSON(msg) === true) {
        custom_or_bland_success(res, title, `Successfully deleted record number: ${msg.id}`, token, custom_message);
    } else if (msg === "No todo found") {
        pre_coded.not_found(res);
    } else if (msg === "Unknown input") {
        pre_coded.bad_parameters(res);
    } else if (msg === injection.injection_message) {
        injection_message(res, title, token);
    } else {
        if (custom_message === false) {
            pre_coded.internal_server_error(res);
        } else {
            status_output.internal_server_error(res, { 'title': title, 'msg': msg, 'token': token });
        }
    }
}

function display_put_todos(res, title = "", msg = "", token = "") {
    if (assets.isJSON(msg) === true) {
        custom_or_bland_success(res, title, msg, token, custom_message);
    } else if (msg === "No todo found") {
        pre_coded.not_found(res);
    } else if (msg === "Unknown input") {
        pre_coded.bad_parameters(res);
    } else if (msg === injection.injection_message) {
        injection_message(res, title, token);
    } else {
        if (custom_message === false) {
            pre_coded.internal_server_error(res);
        } else {
            status_output.internal_server_error(res, { 'title': title, 'msg': msg, 'token': token });
        }
    }
}

function display_todo_id(res, title = "", msg = "", token = "") {
    if (assets.isJSON(msg) === true) {
        if (custom_message === false) {
            speak_on_correct_status.success(res, msg);
        } else {
            pre_coded.success(res, { "title": title, "msg": msg, "token": token });
        }
    } else if (msg === "No todo found") {
        pre_coded.not_found(res);
    } else if (msg === "Unknown input") {
        pre_coded.bad_parameters(res);
    } else if (msg === injection.injection_message) {
        injection_message(res, title, token);
    } else {
        if (custom_message === false) {
            pre_coded.internal_server_error(res);
        } else {
            status_output.internal_server_error(res, { 'title': title, 'msg': msg, 'token': token });
        }
    }
}

function put_user_id(res, title = "", msg = "", token = "") {
    if (assets.isJSON(msg) === true) {
        if (custom_message === false) {
            speak_on_correct_status.success(res, msg);
        } else {
            speak_on_correct_status.success(res, { "title": title, "msg": msg, "token": token });
        }
    } else if (msg === "No user found") {
        pre_coded.not_found(res);
    } else if (msg === "Unknown input" || msg === "Email already exits") {
        pre_coded.bad_parameters(res);
    } else if (msg === injection.injection_message) {
        injection_message(res, title, token);
    } else {
        if (custom_message === false) {
            pre_coded.internal_server_error(res);
        } else {
            status_output.internal_server_error(res, { 'title': title, 'msg': msg, 'token': token });
        }
    }
}

function login_token_error_messages(res, title = "", msg = "", token = "") {
    if (custom_message === false) {
        if (msg === "No token found") {
            return pre_coded.no_token_provided(res);
        }
        if (msg === "Invalid token") {
            return pre_coded.invalid_user_token(res);
        }
    } else {
        if (msg === "No token found") {
            return status_output.invalid_token(res, { 'title': title, 'msg': 'No token , authorization denied', 'token': token });
        }
        if (msg === "Invalid token") {
            return status_output.invalid_token(res, { 'title': title, 'msg': 'Token is not valid', 'token': token });
        }
    }
}

module.exports = {
    custom_message,
    custom_or_bland_success,
    error_body_message,
    user_not_logged_in,
    success_connection_message,
    injection_message,
    login_error_messages,
    register_message,
    display_user_info,
    display_user_todos,
    display_all_todos,
    display_post_todo_errors,
    error_url_message,
    users_id_messages,
    delete_users_id_messages,
    delete_todos_id_messages,
    display_put_todos,
    display_todo_id,
    put_user_id,
    login_token_error_messages
}
