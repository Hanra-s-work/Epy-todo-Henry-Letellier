/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** auth.js
*/

const assets = require('../assets');

function check_json_token(req, secret_token) {
    if (assets.check_if_token_in_header(req) === false) {
        return "No token found";
    }
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    const response = assets.check_if_token_is_valid(token, secret_token);
    if (response === false) {
        return "Invalid token";
    }
    if (token in global.sessions && global.sessions[token].loggedIn) {
        return "Connection success";
    }
    return "Invalid token";
};

module.exports = {
    check_json_token
}
