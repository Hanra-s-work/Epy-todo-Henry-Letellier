/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** check_for_injection.js
*/

const injection_message = { 'msg': "Injection attempt detected" };

async function check_if_symbol_sql_injection(string) {
    return false;
}

async function check_if_command_sql_injection(string) {
    return false;
}

async function check_if_logic_gate_sql_injection(string) {
    return false;
}

async function check_if_symbol_and_command_injection(string) {
    return false;
}

async function check_if_symbol_and_logic_gate_injection(string) {
    return false;
}

async function check_if_command_and_logic_gate_injection(string) {
    return false;
}

async function check_if_sql_injection(string = "") {
    return false;
}

async function check_if_injections_in_strings(array_of_strings) {
    return false;
}

module.exports = {
    check_if_sql_injection,
    check_if_symbol_sql_injection,
    check_if_command_sql_injection,
    check_if_logic_gate_sql_injection,
    check_if_symbol_and_command_injection,
    check_if_symbol_and_logic_gate_injection,
    check_if_command_and_logic_gate_injection,
    check_if_injections_in_strings,
    injection_message
}
