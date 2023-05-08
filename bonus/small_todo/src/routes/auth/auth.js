/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** auth.js
*/

const db = require('../../config/db');
const assets = require('../../assets');
const injection = require('../../config/check_if_sql_injection');

async function authenticate_user(body_content, res) {
    var title = 'Welcome to login\n';
    const { email, password } = body_content;
    const user_node = await db.sql_get_user_node(email);
    if (user_node === injection.injection_message) {
        return [JSON.stringify(injection.injection_message)];
    }
    if (user_node === { 'msg': "No user found" }) {
        return [`${title}User not found`];
    }
    const logged_in_user_key = await assets.sign_user_in(email, password);
    if (logged_in_user_key === "wrong_password") {
        return [`${title}Wrong password`];
    }
    if (logged_in_user_key === "unknown_user") {
        return [`${title}Unknown user`];
    }
    is_logged_in = true;
    user_email = user_node.email;
    return [is_logged_in, user_email, logged_in_user_key, `Welcome ${user_node.firstname}\n`];
}


async function register_user(body_content, res) {
    var title = 'Welcome to registrations\n';
    const { email, password, firstname, name } = body_content;
    const user_exists = await assets.check_if_user_exists(email);
    if (user_exists === true) {
        return ["User exists", `User already exists`];
    }
    const secured_password = await assets.secure_the_password(password);
    const response = await db.insert_records('user', ['email', 'password', 'firstname', 'name'], [[email, secured_password, firstname, name]]);
    if (response === injection.injection_message) {
        return [response];
    }
    return ["Creation success", `${title}User created\n${logged_in_user_key}`];
}



module.exports = {
    authenticate_user,
    register_user
}
