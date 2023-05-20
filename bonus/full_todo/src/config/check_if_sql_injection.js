/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** check_for_injection.js
*/

const injection_message = { 'msg': "Injection attempt detected" };

async function check_if_symbol_sql_injection(string) {
    const sqlKeywords = [';', '--', '/*', '*/'];

    for (let i = 0; i < sqlKeywords.length; i++) {
        if (string.includes(sqlKeywords[i]) === true) {
            return true;
        }
    }
    return false;
}

async function check_if_command_sql_injection(string) {
    const sqlKeywords = ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'DROP', 'CREATE', 'ALTER', 'TABLE', 'UNION', 'JOIN', 'WHERE'];

    for (let i = 0; i < sqlKeywords.length; i++) {
        if (string.includes(sqlKeywords[i]) === true) {
            return true;
        }
    }
    return false;
}

async function check_if_logic_gate_sql_injection(string) {
    const sqlKeywords = ['OR', 'AND', 'NOT'];

    for (let i = 0; i < sqlKeywords.length; i++) {
        if (string.includes(sqlKeywords[i]) === true) {
            return true;
        }
    }
    return false;
}

async function check_if_symbol_and_command_injection(string) {
    var is_symbol = check_if_symbol_sql_injection(string);
    var is_command = check_if_command_sql_injection(string);
    if (is_symbol === true || is_command === true) {
        return true;
    }
    return false;
}

async function check_if_symbol_and_logic_gate_injection(string) {
    var is_symbol = check_if_symbol_sql_injection(string);
    var is_logic_gate = check_if_logic_gate_sql_injection(string);
    if (is_symbol === true || is_logic_gate === true) {
        return true;
    }
    return false;
}

async function check_if_command_and_logic_gate_injection(string) {
    var is_command = check_if_command_sql_injection(string);
    var is_logic_gate = check_if_logic_gate_sql_injection(string);
    if (is_command === true || is_logic_gate === true) {
        return true;
    }
    return false;
}

async function check_if_sql_injection(string = "") {
    const sqlKeywords = [
        'SELECT', 'INSERT', 'UPDATE', 'DELETE', 'DROP', 'CREATE', 'ALTER',
        'TABLE', 'WHERE', 'OR', 'AND', 'UNION', 'JOIN', ';', '--', '/*', '*/'
    ];

    for (let i = 0; i < sqlKeywords.length; i++) {
        if (string.includes(sqlKeywords[i])) {
            return true;
        }
    }
    return false;
}

async function check_if_injections_in_strings(array_of_strings) {
    if (Array.isArray(array_of_strings) === true) {
        for (let i = 0; i < array_of_strings.length; i++) {
            if (typeof array_of_strings[i] != "string") {
                console.error(`check_if_injections_in_strings: Expected a string but got an ${typeof array_of_strings[i]}`);
                throw {
                    error: `check_if_injections_in_strings: Expected a string but got an ${typeof array_of_strings[i]}`
                };
            }
            if (await check_if_sql_injection(array_of_strings[i]) === true) {
                return true;
            }
        }
        return false;
    } else {
        throw {
            error: "check_if_injections_in_strings: array_of_strings is not an array"
        }
    }
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
