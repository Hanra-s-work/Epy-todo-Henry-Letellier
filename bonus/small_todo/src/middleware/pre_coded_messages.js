/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** pre-coded-messages.js
*/

const status_output = request("../config/speak_on_correct_status.js");

function user_not_logged_in(res) {
    status_output.unauthorized(res, { 'msg': "User not logged in" });
}

function invalid_user_token(res) {
    status_output.unauthorized(res, { 'msg': 'Token is not valid' });
}

function user_not_found(res) {
    status_output.not_found(res, { 'msg': "User not found" });
}

function bad_parameters(res) {
    status_output.bad_request(res, { 'msg': "Bad parameters" });
}

function internal_server_error(res) {
    status_output.internal_server_error(res, { 'msg': "Internal server error" });
}

function not_enough_args(res) {
    status_output.bad_request(res, { 'msg': "Not enough arguments" });
    // status_output.partial_content(res, { 'msg': "Not enough arguments" });
}

function not_found(res) {
    status_output.not_found(res, { 'msg': "Not found" });
}

module.exports = {
    user_not_logged_in,
    invalid_user_token,
    user_not_found,
    bad_parameters,
    internal_server_error,
    not_enough_args,
    not_found
}
