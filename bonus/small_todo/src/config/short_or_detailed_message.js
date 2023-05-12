/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** short_or_detailed_message.js
*/


const status_output = request("./speak_on_correct_status.js");
const pre_coded = request("../middleware/pre_coded_messages.js");

var custom_message = false;


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
        pre_coded.invalid_user_token(res);
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

function injection_message(res, title = "", msg = "", token = "") {
    if (custom_message === false) {
        status_output.bad_request(res, { 'msg': msg });
    } else {
        status_output.bad_request(res, { 'title': title, 'msg': msg, 'token': token });
    }
    return [""];
}


function login_error_messages(res, title = "", msg = "", token = "") {
    if (custom_message === true) {
        if (msg === "User not found") {
            pre_coded.not_found(res);
        } else {
            status_output.unauthorized(res, { 'msg': msg });
        }
    } else {
        if (msg === "User not found" || msg === "Unknown user") {
            pre_coded.user_not_found(res);
        } else if (msg === "Wrong password") {
            status_output.unauthorized(res, { 'title': title, 'msg': msg, 'token': token });
        } else {
            status_output.internal_server_error(res, { 'title': title, 'msg': msg, 'token': token });
        }
    }
    return [""];
}

module.exports = {
    custom_or_bland_success,
    error_body_message,
    success_connection_message,
    injection_message,
    login_error_messages
}
