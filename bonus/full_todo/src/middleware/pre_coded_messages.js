/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** pre-coded-messages.js
*/

const status_output = require("../config/speak_on_correct_status.js");
const injection = require("../config/check_if_sql_injection.js");

function user_not_logged_in(res) {
    return status_output.unauthorized(res, { 'msg': "User not logged in" });
}

function invalid_user_token(res) {
    return status_output.invalid_token(res, { 'msg': 'Token is not valid' });
}

function no_token_provided(res) {
    return status_output.invalid_token(res, { 'msg': 'No token , authorization denied' });
}

function user_not_found(res) {
    return status_output.not_found(res, { 'msg': "User not found" });
}

function bad_parameters(res) {
    return status_output.bad_request(res, { 'msg': "Bad parameters" });
}

function internal_server_error(res) {
    return status_output.internal_server_error(res, { 'msg': "Internal server error" });
}

function not_enough_args(res) {
    return status_output.bad_request(res, { 'msg': "Not enough arguments" });
}

function not_found(res) {
    return status_output.not_found(res, { 'msg': "Not found" });
}

function user_exists(res) {
    return status_output.conflict(res, { 'msg': "User already exists" });
}

function injection_message(res, custom_message = false, title = "", token = "") {
    if (custom_message === false) {
        return status_output.bad_request(res, { 'msg': injection.injection_message });
    } else {
        return status_output.bad_request(res, { 'title': title, 'msg': injection.injection_message, 'token': token });
    }
}

module.exports = {
    user_not_logged_in,
    invalid_user_token,
    no_token_provided,
    user_not_found,
    bad_parameters,
    internal_server_error,
    not_enough_args,
    not_found,
    user_exists,
    injection_message
}
