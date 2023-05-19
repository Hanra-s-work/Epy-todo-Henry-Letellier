/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** assets_transform.js
*/


function array_to_string(array = [""], linker = ", ", encapsulation = ['"', '"']) {
    var result = "";
    var i = 0;

    for (; i < array.length; i++) {
        result += encapsulation[0];
        result += array[i];
        result += encapsulation[1];
        if (i + 1 < array.length) {
            result += linker;
        }
    }
    return result;
}

function double_array_to_string(double_array = [[""], [""]], linker_inner = ", ", linker_outer = ", ", encapsulation = ["(", ")"]) {
    var result = "";
    var i = 0;

    for (; i < double_array.length; i++) {
        result += encapsulation[0];
        result += array_to_string(double_array[i], linker_inner);
        result += encapsulation[1];
        if (i + 1 < double_array.length) {
            result += linker_outer;
        }
    }
    return result
}

module.exports = {
    array_to_string,
    double_array_to_string
}
