#!/bin/bash
##
## EPITECH PROJECT, 2022
## B-WEB-200-PAR-2-1-epytodo-henry.letellier
## File description:
## test_app.sh
##

# For these test to work, you need to have a /stop rule in your server that will stop it
# Here is an example of /stop:
# app.get('/stop', (req, res) => {
#    res.send('Stopping server...\n');
#    process.exit(0);
# });

# +===================================+
# |         Quick Howto               |
# +===================================+
# | Quick Shortcuts                   |
# |   - Default set-up (line 114)     |
# |   - User configs (line 119)       |
# |   - Expected_responses (line 137) |
# |   - get (line 381)                |
# |   - post (line 433)               |
# |   - put (line 476)                |
# |   - delete (line 519)             |
# |   - head (line 562)               |
# |   - options (line 605)            |
# |   - Test (line 713)               |
# |   - main (line End of the file)   |
# +===================================+===================================+===================================+
# | Default set-up                    | User configs                      | Expected_responses                |
# +===================================+===================================+===================================+
# | This section contains three       | This section contains three       | This section contains pre set     |
# | variables that you can change     | variables.                        | variables that corresppond to the |
# | to fit your needs.                |                                   | responses that tests que expect   |
# |                                   |  PORT and URL:                    | to receive.                       |
# | DEFAULT_PORT (the port of your    |   Are either set by input         |                                   |
# |               nodejs server)      |   arguments when launched or by   |  The names of the variables       |
# | DEFAULT_URL   (the access url     |   DEFAULT_PORT and DEFAULT_URL.   |  describe the type of test in     |
# |                of your nodejs     |                                   |  wich they could be called and    |
# |                server)            |  SUDO:                            |  thus the response they           |
# | LAUNCH_COMAND (the command to     |   Represents the root granter     |  could contain.                   |
# |               launch your         |   command (at least the path)     |                                   |
# |               nodejs server)      |   to the binary. Leave empty to   |  default responses: pre-written   |
# |                                   |   deactivate root privileges.     |  responses that can be used to    |
# |                                   |                                   |  set the other responses.         |
# +===================================+===================================+===================================+
# | get                               | post                              | put                               |
# +===================================+===================================+===================================+
# | This section contains the         | This section contains the         | This section contains the         |
# | functions to test the get         | functions to test the post        | functions to test the get         |
# | method with curl.                 | method with curl.                 | method with curl.                 |
# |                                   |                                   |                                   |
# | get_basic_curl_server_response    |                                   |                                   |
# |  a simple curl where everything   |                                   |                                   |
# |  stored in predefined files       |                                   |                                   |
# | get_server_response               | post_server_response              | put_server_response               |
# |  a curl with the GET HTTP         |  a curl with POST HTTP method     |  a curl with the PUT HTTP         |
# |  method where everything stored   |  where everything stored in       |  method where everything stored   |
# |  in predefined files              |  predefined files                 |  in predefined files              |
# | get_data_dict_to_server           | post_data_dict_to_server          | put_data_dict_to_server           |
# |  a curl with the GET HTTP         |  a curl with POST HTTP method     |  a curl with the PUT HTTP         |
# |  with a term=definition data      |  with a term=definition data      |  with a term=definition data      |
# |  transfer method where            |  transfer method where            |  transfer method where            |
# |  everything stored in             |  everything stored in             |  everything stored in             |
# |  predefined files.                |  predefined files.                |  predefined files.                |
# | get_data_json_to_server           | post_data_json_to_server          | put_data_json_to_server           |
# |  a curl with the GET HTTP         |  a curl with POST HTTP method     |  a curl with the PUT HTTP         |
# |  with a json data transfer        |  with a json data transfer        |  with a json data transfer        |
# |  method where everything stored   |  method where everything stored   |  method where everything stored   |
# |  in predefined files.             |  in predefined files.             |  in predefined files.             |
# +===================================+===================================+===================================|
# | delete                            | head                              | options                           |
# +===================================+===================================+===================================+
# | This section contains the         | This section contains the         | This section contains the         |
# | functions to test the post        | functions to test the get         | functions to test the post        |
# | method with curl.                 | method with curl.                 | method with curl.                 |
# |                                   |                                   |                                   |
# | delete_server_response            | head_server_response              | options_server_response           |
# |  a curl with DELETE HTTP method   |  a curl with the HEAD HTTP        |  a curl with OPTIONS HTTP method  |
# |  where everything stored in       |  method where everything stored   |  where everything stored in       |
# |  predefined files                 |  in predefined files              |  predefined files                 |
# | delete_data_dict_to_server        | head_data_dict_to_server          | options_data_dict_to_server       |
# |  a curl with DELETE HTTP method   |  a curl with the HEAD HTTP        |  a curl with OPTIONS HTTP method  |
# |  with a term=definition data      |  with a term=definition data      |  with a term=definition data      |
# |  transfer method where            |  transfer method where            |  transfer method where            |
# |  everything stored in             |  everything stored in             |  everything stored in             |
# |  predefined files.                |  predefined files.                |  predefined files.                |
# | delete_data_json_to_server        | head_data_json_to_server          | options_data_json_to_server       |
# |  a curl with DELETE HTTP method   |  a curl with the HEAD HTTP        |  a curl with OPTIONS HTTP method  |
# |  with a json data transfer        |  with a json data transfer        |  with a json data transfer        |
# |  method where everything stored   |  method where everything stored   |  method where everything stored   |
# |  in predefined files.             |  in predefined files.             |  in predefined files.             |
# +===================================+===================================+===================================+
# | Test                              | main                              |
# +===================================+===================================+
# | The section containing all the    | The section containing the        |
# | test functions to check if your   | steps the program need to do in   |
# | program meets the Epitech         | order to be able to run the       |
# | project requirements              | tests for the project.            |
# |                                   |                                   |
# +===================================+===================================+

#  Program required data
ERR=84
TRUE=1
FALSE=0
SUCCESS=0
PROG_NAME=$0
VERSION=1.0.0
AUTHOR="(c) Henry Letellier"

#  Default set-up
DEFAULT_PORT=3000
DEFAULT_URL="localhost"
LAUNCH_COMAND="npm start"

# User configs
PORT=
URL=
SUDO=/bin/sudo

# system_tracking_variables
DEFAULT_DIR=/tmp
LOG_DIR="$DEFAULT_DIR/${$}_epytodo.d"
SERVER_LOG_DIR="${LOG_DIR}/${$}_server_status"
SERVER_LOG_FILE="${SERVER_LOG_DIR}/${$}_epytodo.log"
SERVER_ERROR_LOG_FILE="${SERVER_LOG_DIR}/${$}_epytodo_error.log"
TEST_NAME_FOLDER="${LOG_DIR}/${$}_test_"
TEST_NAME_FILE="test_"
TEST_NAME_FILE_ERROR="test_error_"
TEST_CURL_OUTPUT_FILE="test_curl_"
TEST_DIFF_OUTPUT_FILE="test_diff_"
TEST_DIFF_OUTPUT_ERROR_FILE="test_diff_error_"

# Expected_responses
## default responses
USER_NOT_LOGGED_IN='{\n"msg":"No token, authorization denied"\n}'
INVALID_TOKEN='{\n"msg":"Token is not valid"\n}'
INVALID_CREDENTIALS='{\n"msg":"Invalid credentials"\n}'
USER_ALREADY_EXISTS='{\n"msg":"User already exists"\n}'
USER_DOES_NOT_EXIST='{\n"msg":"Not found"\n}'
USER_NOT_FOUND=$USER_DOES_NOT_EXIST
USER_ALREADY_LOGGED_IN='{\n"msg":"User is already logged in"\n}'
USER_NOT_LOGGED_IN='{\n"msg":"User is not logged in"\n}'
BAD_PARAMETERS='{\n"msg":"Bad parameter"\n}'
UNKNOWN_ERROR='{\n"msg":"Internal server error"\n}'
RESOURCE_NOT_FOUND='{\n"msg":"Resource not found"\n}'
ACCESS_DENIED='{\n"msg":"Access denied"\n}'
REQUEST_TIMEOUT='{\n"msg":"Request timed out"\n}'

## /register
SUCCESS_RESPONSE_REGISTER_METHOD_POST_LOGGED_IN_NO=""
SUCCESS_RESPONSE_REGISTER_METHOD_POST_LOGGED_IN_YES=""
ERROR_RESPONSE_REGISTER_METHOD_POST_LOGGED_IN_NO=""
ERROR_RESPONSE_REGISTER_METHOD_POST_LOGGED_IN_YES=""

## /login
SUCCESS_RESPONSE_LOGIN_METHOD_POST_LOGGED_IN_NO=""
SUCCESS_RESPONSE_LOGIN_METHOD_POST_LOGGED_IN_YES=""
ERROR_RESPONSE_LOGIN_METHOD_POST_LOGGED_IN_NO=""
ERROR_RESPONSE_LOGIN_METHOD_POST_LOGGED_IN_YES=""

## /user
SUCCESS_RESPONSE_USER_METHOD_GET_LOGGED_IN_NO=""
SUCCESS_RESPONSE_USER_METHOD_GET_LOGGED_IN_YES=""
ERROR_RESPONSE_USER_METHOD_GET_LOGGED_IN_NO=""
ERROR_RESPONSE_USER_METHOD_GET_LOGGED_IN_YES=""

## /user/todos
SUCCESS_RESPONSE_USER_TODOS_METHOD_GET_LOGGED_IN_NO=""
SUCCESS_RESPONSE_USER_TODOS_METHOD_GET_LOGGED_IN_YES=""
ERROR_RESPONSE_USER_TODOS_METHOD_GET_LOGGED_IN_NO=""
ERROR_RESPONSE_USER_TODOS_METHOD_GET_LOGGED_IN_YES=""

## /users/:email
SUCCESS_RESPONSE_USER_email_METHOD_GET_LOGGED_IN_NO=""
SUCCESS_RESPONSE_USER_email_METHOD_GET_LOGGED_IN_YES=""
ERROR_RESPONSE_USER_email_METHOD_GET_LOGGED_IN_NO=""
ERROR_RESPONSE_USER_email_METHOD_GET_LOGGED_IN_YES=""

## /users/:id
SUCCESS_RESPONSE_USER_id_METHOD_GET_LOGGED_IN_NO=""
SUCCESS_RESPONSE_USER_id_METHOD_GET_LOGGED_IN_YES=""
ERROR_RESPONSE_USER_id_METHOD_GET_LOGGED_IN_NO=""
ERROR_RESPONSE_USER_id_METHOD_GET_LOGGED_IN_YES=""

SUCCESS_RESPONSE_USER_id_METHOD_PUT_LOGGED_IN_NO=""
SUCCESS_RESPONSE_USER_id_METHOD_PUT_LOGGED_IN_YES=""
ERROR_RESPONSE_USER_id_METHOD_PUT_LOGGED_IN_NO=""
ERROR_RESPONSE_USER_id_METHOD_PUT_LOGGED_IN_YES=""

SUCCESS_RESPONSE_USER_id_METHOD_DELETE_LOGGED_IN_NO=""
SUCCESS_RESPONSE_USER_id_METHOD_DELETE_LOGGED_IN_YES=""
ERROR_RESPONSE_USER_id_METHOD_DELETE_LOGGED_IN_NO=""
ERROR_RESPONSE_USER_id_METHOD_DELETE_LOGGED_IN_YES=""

## /todos
SUCCESS_RESPONSE_TODOS_METHOD_POST_LOGGED_IN_NO=""
SUCCESS_RESPONSE_TODOS_METHOD_POST_LOGGED_IN_YES=""
ERROR_RESPONSE_TODOS_METHOD_POST_LOGGED_IN_NO=""
ERROR_RESPONSE_TODOS_METHOD_POST_LOGGED_IN_YES=""

## /todos/:id
SUCCESS_RESPONSE_TODOS_id_METHOD_PUT_LOGGED_IN_NO=""
SUCCESS_RESPONSE_TODOS_id_METHOD_PUT_LOGGED_IN_YES=""
ERROR_RESPONSE_TODOS_id_METHOD_PUT_LOGGED_IN_NO=""
ERROR_RESPONSE_TODOS_id_METHOD_PUT_LOGGED_IN_YES=""

SUCCESS_RESPONSE_TODOS_id_METHOD_DELETE_LOGGED_IN_NO=""
SUCCESS_RESPONSE_TODOS_id_METHOD_DELETE_LOGGED_IN_YES=""
ERROR_RESPONSE_TODOS_id_METHOD_DELETE_LOGGED_IN_NO=""
ERROR_RESPONSE_TODOS_id_METHOD_DELETE_LOGGED_IN_YES=""

## /stop
STATUS_RESPONSE_FOR_SERVER_STOP_RESPONSE="Stopping server..."

## /
STATUS_RESPONSE_FOR_SERVER_HOME_RESPONSE="Hello World"

# functions
## display

function display_in_box {
    echo "+-------------------------------------+"
    echo "| $1 |"
    echo "+-------------------------------------+"
    echo ""
}

function display_test_stage {
    echo -ne "$1..........................."
}

function display_status {
    if [ $1 -eq $SUCCESS ]; then
        echo "[OK]"
        return $SUCCESS
    else
        echo "[KO]"
    fi
    return $ERR
}

function display_test_name {
    display_in_box "Test: $1"
}

function display_help {
    echo "Usage: $PROG_NAME [port=<port>] [url=<url>]"
    echo "Options:"
    echo "  -h, --help, /?  Display this help message and exit"
    echo "  -v, --version, /v  Display the version of the program and exit"
    echo "  -a, --author, /a   Display the author of the program and exit"
    echo "  port=<port>     Specify the port to use"
    echo "  url=<url>       Specify the url to use"
    exit $SUCCESS
}

function display_version {
    display_in_box "      Program version: $VERSION       "
    exit $SUCCESS
}

function display_author {
    display_in_box "Program author: $AUTHOR"
    exit $SUCCESS
}

function display_locations {
    echo "PORT = '${PORT}'"
    echo "URL = '${URL}'"
    echo "DEFAULT_DIR = '${DEFAULT_DIR}'"
    echo "LOG_DIR = '${LOG_DIR}'"
    echo "SERVER_LOG_FILE = '${SERVER_LOG_FILE}'"
    echo "SERVER_ERROR_LOG_FILE = '${SERVER_ERROR_LOG_FILE}'"
}

function display_raw_file_if_not_empty {
    if [ -s $1 ]; then
        cat $1
    else
        echo "<empty>"
    fi
}

function display_beauty_file_if_not_empty {
    display_in_box "Content of '$1'"
    display_raw_file_if_not_empty $1
}

function display_log_if_not_empty_with_custom_message {
    display_in_box "$1"
    display_raw_file_if_not_empty $2
}

## is (check)
function is_a_number {
    string=$1
    if [[ $string =~ ^[0-9]+$ ]]; then
        return $TRUE
    else
        return $FALSE
    fi
}

function is_file_empty {
    if [ -s $1 ]; then
        return $FALSE
    else
        return $TRUE
    fi
}

function is_error {
    if [ $1 -ne $SUCCESS ]; then
        return $TRUE
    else
        return $FALSE
    fi
}

## to (conversions)
function to_int {
    is_a_number $1
    if [ $? -eq $FALSE ]; then
        echo "Error: '$1' is not a number"
    else
        num=$(expr "$1" + 0)
        return $num #only read $? if your number is between 0 and 255 otherwise read $num
    fi
}

## replace (manipulate strings)
function replace_char_in_string {
    local STRING=$1
    local CHAR=$2
    local REPLACE=$3
    RESPONSE=${STRING//$CHAR/$REPLACE}
}

## get (gather_info)
function get_usr_inputs {
    if [ $# -ge 1 ]; then
        while [ $# -ge 1 ]; do
            COMMAND_FOUND=$FALSE
            TMP_VAR=${1%=*}
            if [ ${1,,} == "-h" ] || [ ${1,,} == "--help" ] || [ ${1,,} == "/?" ]; then
                display_help
            fi
            if [ ${1,,} == "-v" ] || [ ${1,,} == "--version" ] || [ ${1,,} == "/v" ]; then
                display_version
            fi
            if [ ${1,,} == "-a" ] || [ ${1,,} == "--author" ] || [ ${1,,} == "/a" ]; then
                display_author
            fi
            if [ ${#TMP_VAR} -gt 0 ] && [ ${TMP_VAR,,} == "port" ]; then
                PORT=${1#*=}
                if [ ${#PORT} -eq 0 ]; then
                    PORT=$DEFAULT_PORT
                fi
                is_a_number $PORT
                if [ $? -eq $TRUE ]; then
                    to_int $PORT
                    PORT=$num
                else
                    echo "Error: '$PORT' is not a number"
                    echo "Resulting to using the default port: $DEFAULT_PORT"
                    PORT=$DEFAULT_PORT
                fi
                COMMAND_FOUND=$TRUE
            fi
            if [ ${#TMP_VAR} -gt 0 ] && [ ${TMP_VAR,,} == "url" ]; then
                URL=${1#*=}
                if [ ${#URL} -eq 0 ]; then
                    URL=$DEFAULT_URL
                fi
                COMMAND_FOUND=$TRUE
            fi
            if [ $COMMAND_FOUND -eq $FALSE ]; then
                echo "Command not found: '$1'"
            fi
            shift
        done
    else
        PORT=$DEFAULT_PORT
        URL=$DEFAULT_URL
    fi
}

function get_basic_curl_server_response {
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

function get_server_response {
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X GET $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

function get_data_dict_to_server {
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    shift 2
    local COMMAND="$@"
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X GET -d $COMMAND $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

function get_data_json_to_server {
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    shift 2
    local COMMAND="$@"
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X GET -H "Content-Type: application/json" -d $COMMAND $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

## post

function post_server_response {
    # This is usefull for passing data via the url without having to worry about the content of the body (i.e: post_data_dict_to_server or post_data_json_to_server)
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X POST $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

function post_data_dict_to_server {
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    shift 2
    local COMMAND="$@"
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X POST -d $COMMAND $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

function post_data_json_to_server {
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    shift 2
    local COMMAND="$@"
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X POST -H "Content-Type: application/json" -d $COMMAND $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

## put

function put_server_response {
    # This is usefull for passing data via the url without having to worry about the content of the body (i.e: put_data_dict_to_server or put_data_json_to_server)
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X PUT $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

function put_data_dict_to_server {
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    shift 2
    local COMMAND="$@"
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X PUT -d $COMMAND $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

function put_data_json_to_server {
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    shift 2
    local COMMAND="$@"
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X PUT -H "Content-Type: application/json" -d $COMMAND $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

## delete

function delete_server_response {
    # This is usefull for passing data via the url without having to worry about the content of the body (i.e: delete_data_dict_to_server or delete_data_json_to_server)
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X DELETE $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

function delete_data_dict_to_server {
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    shift 2
    local COMMAND="$@"
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X DELETE -d $COMMAND $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

function delete_data_json_to_server {
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    shift 2
    local COMMAND="$@"
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X DELETE -H "Content-Type: application/json" -d $COMMAND $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

## head

function head_server_response {
    # This is usefull for passing data via the url without having to worry about the content of the body (i.e: head_data_dict_to_server or head_data_json_to_server)
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X HEAD $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

function head_data_dict_to_server {
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    shift 2
    local COMMAND="$@"
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X HEAD -d $COMMAND $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

function head_data_json_to_server {
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    shift 2
    local COMMAND="$@"
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X HEAD -H "Content-Type: application/json" -d $COMMAND $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

## options

function options_server_response {
    # This is usefull for passing data via the url without having to worry about the content of the body (i.e: options_data_dict_to_server or options_data_json_to_server)
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X OPTIONS $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

function options_data_dict_to_server {
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    shift 2
    local COMMAND="$@"
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X OPTIONS -d $COMMAND $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

function options_data_json_to_server {
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    local TEST_COMMAND_LINE=$2
    shift 2
    local COMMAND="$@"
    SAVE_TEST_NAME_FOLDER="${TEST_NAME_FOLDER}${TEST_NAME}"
    SAVE_TEST_NAME_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE}${$}${TEST_NAME}.txt"
    SAVE_TEST_NAME_FILE_ERROR="${SAVE_TEST_NAME_FOLDER}/${TEST_NAME_FILE_ERROR}${$}${TEST_NAME}.txt"
    SAVE_TEST_CURL_OUTPUT_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_CURL_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    create_folder $SAVE_TEST_NAME_FOLDER
    curl -X OPTIONS -H "Content-Type: application/json" -d $COMMAND $TEST_COMMAND_LINE -o $SAVE_TEST_CURL_OUTPUT_FILE 1>${SAVE_TEST_NAME_FILE} 2>${SAVE_TEST_NAME_FILE_ERROR}
    return $?
}

## check (verify)
function check_required_variables {
    if [ ${#PORT} -eq 0 ]; then
        PORT=$DEFAULT_PORT
    fi
    if [ ${#URL} -eq 0 ]; then
        URL=$DEFAULT_URL
    fi
}

function check_if_same_output {
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    SAVE_DIFF_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_DIFF_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    SAVE_DIFF_ERROR_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_DIFF_OUTPUT_ERROR_FILE}${$}${TEST_NAME}.txt"
    local STRING1=$2
    local STRING2=$3
    display_test_name "Checking status for '$1'"
    diff -u <(echo "$STRING1") <(echo "$STRING2") 1>$SAVE_DIFF_FILE 2>$SAVE_DIFF_ERROR_FILE
    display_status $?
    return $?
}

function check_if_same_file_output {
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    SAVE_DIFF_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_DIFF_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    SAVE_DIFF_ERROR_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_DIFF_OUTPUT_ERROR_FILE}${$}${TEST_NAME}.txt"
    local FILE1=$2
    local FILE2=$3
    display_test_name "Checking status for '$1'"
    diff -u <(cat "$FILE1") <(cat "$FILE2") 1>$SAVE_DIFF_FILE 2>$SAVE_DIFF_ERROR_FILE
    display_status $?
    return $?
}

function check_if_file_output_is_same_as_string {
    replace_char_in_string $1 '/' '_'
    local TEST_NAME=$RESPONSE
    SAVE_DIFF_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_DIFF_OUTPUT_FILE}${$}${TEST_NAME}.txt"
    SAVE_DIFF_ERROR_FILE="${SAVE_TEST_NAME_FOLDER}/${TEST_DIFF_OUTPUT_ERROR_FILE}${$}${TEST_NAME}.txt"
    local FILE1=$2
    local STRING1=$3
    display_test_stage "Checking status for '$1'"
    diff -u <(cat "$FILE1") <(echo "$STRING1") 1>$SAVE_DIFF_FILE 2>$SAVE_DIFF_ERROR_FILE
    display_status $?
    return $?
}

## create (create new elements on the users computer)
function create_folder {
    if [ ! -d $1 ]; then
        $2 mkdir -p $1
    fi
}

## launch (launch commands)
function launch_app {
    create_folder $SERVER_LOG_DIR
    $LAUNCH_COMAND 1>$SERVER_LOG_FILE 2>$SERVER_ERROR_LOG_FILE &
    sleep 4
    display_log_if_not_empty_with_custom_message $SERVER_LOG_FILE "Server status"
    display_log_if_not_empty_with_custom_message $SERVER_ERROR_LOG_FILE "Server errors"
}

## Test (The functions in charge of testing your code)

### Test if up
function test_homepage {
    local TEST_NAME="/"
    display_test_name $TEST_NAME
    local TEST_COMMAND_LINE="${URL}:${PORT}${TEST_NAME}"
    get_basic_curl_server_response $TEST_NAME $TEST_COMMAND_LINE
    is_error $?
    if [ $? -eq $FALSE ]; then
        display_log_if_not_empty_with_custom_message "Curl output" $SAVE_TEST_CURL_OUTPUT_FILE
    else
        display_log_if_not_empty_with_custom_message "Command status" $SAVE_TEST_NAME_FILE
        display_log_if_not_empty_with_custom_message "Command errors" $SAVE_TEST_NAME_FILE_ERROR
    fi
    check_if_file_output_is_same_as_string "Server up" $SAVE_TEST_CURL_OUTPUT_FILE "$STATUS_RESPONSE_FOR_SERVER_HOME_RESPONSE"
    if [ $? -eq $SUCCESS ]; then
        display_log_if_not_empty_with_custom_message "Diff output" $SAVE_DIFF_FILE
    else
        display_log_if_not_empty_with_custom_message "Diff errors" $SAVE_DIFF_ERROR_FILE
    fi
}

### Test ability to stop
function test_stop {
    local TEST_NAME="/stop"
    display_test_name $TEST_NAME
    local TEST_COMMAND_LINE="${URL}:${PORT}${TEST_NAME}"
    get_basic_curl_server_response $TEST_NAME $TEST_COMMAND_LINE
    is_file_empty $SAVE_TEST_NAME_FILE_ERROR
    if [ $? -eq $FALSE ]; then
        display_log_if_not_empty_with_custom_message "Curl output" $SAVE_TEST_CURL_OUTPUT_FILE
    else
        display_log_if_not_empty_with_custom_message "Command status" $SAVE_TEST_NAME_FILE
        display_log_if_not_empty_with_custom_message "Command errors" $SAVE_TEST_NAME_FILE_ERROR
    fi
    check_if_file_output_is_same_as_string "Server stopped" $SAVE_TEST_CURL_OUTPUT_FILE "$STATUS_RESPONSE_FOR_SERVER_STOP_RESPONSE"
    if [ $? -eq $SUCCESS ]; then
        display_log_if_not_empty_with_custom_message "Diff output" $SAVE_DIFF_FILE
    else
        display_log_if_not_empty_with_custom_message "Diff errors" $SAVE_DIFF_ERROR_FILE
    fi
}

### The test function that calls all the other test functions
function test_main {
    display_in_box "Testing Server"
    test_homepage
    test_stop
}

## main (the default function by wich the program starts)
function main {
    get_usr_inputs $@
    check_required_variables
    display_locations
    create_folder $LOG_DIR
    launch_app
    test_main
}

main $@
