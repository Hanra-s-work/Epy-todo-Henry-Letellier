/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** speak_on_correct_status.js
*/

// General send
function send_message_on_status(res, status = 200, json = { 'title': '<empty>', 'msg': 'message', 'token': '' }) {
    res.status(status).json(json);
}

// 1xx informational response
function send_continue(res, json) {
    send_message_on_status(res, 100, json);
}

function switching_protocols(res, json) {
    send_message_on_status(res, 101, json);
}

function processing(res, json) {
    send_message_on_status(res, 102, json);
}

function early_hints(res, json) {
    send_message_on_status(res, 103, json);
}

function response_is_stale(res, json) {
    send_message_on_status(res, 110, json);
}

// 2xx successful
function success(res, json) {
    send_message_on_status(res, 200, json);
}

function created(res, json) {
    send_message_on_status(res, 201, json);
}

function accepted(res, json) {
    send_message_on_status(res, 202, json);
}

function non_authoritative_information(res, json) {
    send_message_on_status(res, 203, json);
}

function no_content(res, json) {
    send_message_on_status(res, 204, json);
}

function reset_content(res, json) {
    send_message_on_status(res, 205, json);
}

function partial_content(res, json) {
    send_message_on_status(res, 206, json);
}

function multi_status(res, json) {
    send_message_on_status(res, 207, json);
}

function already_reported(res, json) {
    send_message_on_status(res, 208, json);
}

function im_used(res, json) {
    send_message_on_status(res, 226, json);
}

// 3xx redirection
function multiple_choices(res, json) {
    send_message_on_status(res, 300, json);
}

function moved_permanently(res, json) {
    send_message_on_status(res, 301, json);
}

function found(res, json) {
    send_message_on_status(res, 302, json);
}

function see_other(res, json) {
    send_message_on_status(res, 303, json);
}

function not_modified(res, json) {
    send_message_on_status(res, 304, json);
}

function use_proxy(res, json) {
    send_message_on_status(res, 305, json);
}

function switch_proxy(res, json) {
    send_message_on_status(res, 306, json);
}

function temporary_redirect(res, json) {
    send_message_on_status(res, 307, json);
}

function permanent_redirect(res, json) {
    send_message_on_status(res, 308, json);
}

// 4xx client error
function bad_request(res, json) {
    send_message_on_status(res, 400, json);
}

function unauthorized(res, json) {
    send_message_on_status(res, 401, json);
}

function payment_required(res, json) {
    send_message_on_status(res, 402, json);
}

function forbidden(res, json) {
    send_message_on_status(res, 403, json);
}

function not_found(res, json) {
    send_message_on_status(res, 404, json);
}

function method_not_allowed(res, json) {
    send_message_on_status(res, 405, json);
}

function conflict(res, json) {
    send_message_on_status(res, 409, json);
}

function gone(res, json) {
    send_message_on_status(res, 410, json);
}

function length_required(res, json) {
    send_message_on_status(res, 411, json);
}

function precondition_failed(res, json) {
    send_message_on_status(res, 412, json);
}

function payload_too_large(res, json) {
    send_message_on_status(res, 413, json);
}

function uri_too_long(res, json) {
    send_message_on_status(res, 414, json);
}

function unsupported_media_type(res, json) {
    send_message_on_status(res, 415, json);
}

function range_not_satisfiable(res, json) {
    send_message_on_status(res, 416, json);
}

function expectation_failed(res, json) {
    send_message_on_status(res, 417, json);
}

function im_a_teapot(res, json) {
    send_message_on_status(res, 418, json);
}

function misdirected_request(res, json) {
    send_message_on_status(res, 421, json);
}

function unprocessable_entity(res, json) {
    send_message_on_status(res, 422, json);
}

function locked(res, json) {
    send_message_on_status(res, 423, json);
}

function failed_dependency(res, json) {
    send_message_on_status(res, 424, json);
}

function too_early(res, json) {
    send_message_on_status(res, 425, json);
}

function upgrade_required(res, json) {
    send_message_on_status(res, 426, json);
}

function precondition_required(res, json) {
    send_message_on_status(res, 428, json);
}

function too_many_requests(res, json) {
    send_message_on_status(res, 429, json);
}

function request_header_fields_too_large(res, json) {
    send_message_on_status(res, 431, json);
}

function unavailable_for_legal_reasons(res, json) {
    send_message_on_status(res, 451, json);
}

// 5xx server error 
function internal_server_error(res, json) {
    send_message_on_status(res, 500, json);
}

function not_implemented(res, json) {
    send_message_on_status(res, 501, json);
}

function bad_gateway(res, json) {
    send_message_on_status(res, 502, json);
}

function service_unavailable(res, json) {
    send_message_on_status(res, 503, json);
}

function gateway_timeout(res, json) {
    send_message_on_status(res, 504, json);
}

function http_version_not_supported(res, json) {
    send_message_on_status(res, 505, json);
}

function variant_also_negotiates(res, json) {
    send_message_on_status(res, 506, json);
}

function insufficient_storage(res, json) {
    send_message_on_status(res, 507, json);
}

function loop_detected(res, json) {
    send_message_on_status(res, 508, json);
}

function not_extended(res, json) {
    send_message_on_status(res, 510, json);
}

function network_authentication_required(res, json) {
    send_message_on_status(res, 511, json);
}


module.exports = {
    send_message_on_status,
    send_continue,
    switching_protocols,
    processing,
    early_hints,
    response_is_stale,
    success,
    created,
    accepted,
    non_authoritative_information,
    no_content,
    reset_content,
    partial_content,
    multi_status,
    already_reported,
    im_used,
    multiple_choices,
    moved_permanently,
    found,
    see_other,
    not_modified,
    use_proxy,
    switch_proxy,
    temporary_redirect,
    permanent_redirect,
    bad_request,
    unauthorized,
    payment_required,
    forbidden,
    not_found,
    method_not_allowed,
    conflict,
    gone,
    length_required,
    precondition_failed,
    payload_too_large,
    uri_too_long,
    unsupported_media_type,
    range_not_satisfiable,
    expectation_failed,
    im_a_teapot,
    misdirected_request,
    unprocessable_entity,
    locked,
    failed_dependency,
    too_early,
    upgrade_required,
    precondition_required,
    too_many_requests,
    request_header_fields_too_large,
    unavailable_for_legal_reasons,
    internal_server_error,
    not_implemented,
    bad_gateway,
    service_unavailable,
    gateway_timeout,
    http_version_not_supported,
    variant_also_negotiates,
    insufficient_storage,
    loop_detected,
    not_extended,
    network_authentication_required
}
