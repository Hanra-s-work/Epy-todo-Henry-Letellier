/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** user.query.js
*/

const db = require("../../config/db");
const assets = require("../../assets");

async function get_other_usr_info(connection, node_to_search = "-1") {
    const is_email = assets.check_if_input_is_email(node_to_search);
    const is_id = assets.check_if_input_is_id(node_to_search);
    if (is_email === true) {
        const user_info = await db.sql_get_user_node(connection, node_to_search);
        if ("msg" in user_info) {
            return user_info.msg;
        }
        return user_info;
    }
    if (is_id === true) {
        const user_info = await db.sql_get_user(connection, 'user', '', '', '', node_to_search);
        if (user_info.length === 0) {
            return "No user found";
        }
        return user_info;
    }
    return "Unknown input";
}

module.exports = {
    get_other_usr_info,
}
