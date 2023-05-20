/*
** EPITECH PROJECT, 2022
** B-WEB-200-PAR-2-1-epytodo-henry.letellier
** File description:
** speak_on_correct_status.js
*/

// General send
// General basic success message that speaks on channel 200 by default
function send_message_on_status(res, status = 200, json = { 'title': '<empty>', 'msg': 'message', 'token': '' }) {
    res.status(status).json(json);
}

// 1xx informational response

// send_continue: 100
function send_continue(res, json) {
    return send_message_on_status(res, 100, json);
}

// switching_protocols: 101
function switching_protocols(res, json) {
    return send_message_on_status(res, 101, json);
}

// processing: 102
function processing(res, json) {
    return send_message_on_status(res, 102, json);
}

// early_hints: 103
function early_hints(res, json) {
    return send_message_on_status(res, 103, json);
}

// response_is_stale: 110
function response_is_stale(res, json) {
    return send_message_on_status(res, 110, json);
}

// 2xx successful
// success: 200
function success(res, json) {
    return send_message_on_status(res, 200, json);
}

// created: 201
function created(res, json) {
    return send_message_on_status(res, 201, json);
}

// accepted: 202
function accepted(res, json) {
    return send_message_on_status(res, 202, json);
}

// non_authoritative_information: 203
function non_authoritative_information(res, json) {
    return send_message_on_status(res, 203, json);
}

// no_content: 204
function no_content(res, json) {
    return send_message_on_status(res, 204, json);
}

// reset_content: 205
function reset_content(res, json) {
    return send_message_on_status(res, 205, json);
}

// partial_content: 206
function partial_content(res, json) {
    return send_message_on_status(res, 206, json);
}

// multi_status: 207
function multi_status(res, json) {
    return send_message_on_status(res, 207, json);
}

// already_reported: 208
function already_reported(res, json) {
    return send_message_on_status(res, 208, json);
}

// im_used: 226
function im_used(res, json) {
    return send_message_on_status(res, 226, json);
}

// 3xx redirection

// multiple_choices: 300
function multiple_choices(res, json) {
    return send_message_on_status(res, 300, json);
}

// moved_permanently: 301
function moved_permanently(res, json) {
    return send_message_on_status(res, 301, json);
}

// found: 302
function found(res, json) {
    return send_message_on_status(res, 302, json);
}

// see_other: 303
function see_other(res, json) {
    return send_message_on_status(res, 303, json);
}

// not_modified: 304
function not_modified(res, json) {
    return send_message_on_status(res, 304, json);
}

// use_proxy: 305
function use_proxy(res, json) {
    return send_message_on_status(res, 305, json);
}

// switch_proxy: 306
function switch_proxy(res, json) {
    return send_message_on_status(res, 306, json);
}

// temporary_redirect: 307
function temporary_redirect(res, json) {
    return send_message_on_status(res, 307, json);
}

// permanent_redirect: 308
function permanent_redirect(res, json) {
    return send_message_on_status(res, 308, json);
}

// 4xx client error

// bad_request: 400
function bad_request(res, json) {
    return send_message_on_status(res, 400, json);
}

// unauthorized: 401
function unauthorized(res, json) {
    return send_message_on_status(res, 401, json);
}

// payment_required: 402
function payment_required(res, json) {
    return send_message_on_status(res, 402, json);
}

// forbidden: 403
function forbidden(res, json) {
    return send_message_on_status(res, 403, json);
}

// not_found: 404
function not_found(res, json) {
    return send_message_on_status(res, 404, json);
}

// method_not_allowed: 405
function method_not_allowed(res, json) {
    return send_message_on_status(res, 405, json);
}

// not_acceptable: 406
function not_acceptable(res, json) {
    return send_message_on_status(res, 406, json);
}

// proxy_authentication_required: 407
function proxy_authentication_required(res, json) {
    return send_message_on_status(res, 407, json);
}

// request_timeout: 408
function request_timeout(res, json) {
    return send_message_on_status(res, 408, json);
}

// conflict: 409
function conflict(res, json) {
    return send_message_on_status(res, 409, json);
}

// gone: 410
function gone(res, json) {
    return send_message_on_status(res, 410, json);
}

// length_required: 411
function length_required(res, json) {
    return send_message_on_status(res, 411, json);
}

// precondition_failed: 412
function precondition_failed(res, json) {
    return send_message_on_status(res, 412, json);
}

// payload_too_large: 413
function payload_too_large(res, json) {
    return send_message_on_status(res, 413, json);
}

// uri_too_long: 414
function uri_too_long(res, json) {
    return send_message_on_status(res, 414, json);
}

// unsupported_media_type: 415
function unsupported_media_type(res, json) {
    return send_message_on_status(res, 415, json);
}


// range_not_satisfiable: 416
function range_not_satisfiable(res, json) {
    return send_message_on_status(res, 416, json);
}

// expectation_failed: 417
function expectation_failed(res, json) {
    return send_message_on_status(res, 417, json);
}

// im_a_teapot: 418
function im_a_teapot(res, json) {
    return send_message_on_status(res, 418, json);
}

// misdirected_request: 421
function misdirected_request(res, json) {
    return send_message_on_status(res, 421, json);
}

// unprocessable_entity: 422
function unprocessable_entity(res, json) {
    return send_message_on_status(res, 422, json);
}

// locked: 423
function locked(res, json) {
    return send_message_on_status(res, 423, json);
}

// failed_dependency: 424
function failed_dependency(res, json) {
    return send_message_on_status(res, 424, json);
}

// too_early: 425
function too_early(res, json) {
    return send_message_on_status(res, 425, json);
}

// upgrade_required: 426
function upgrade_required(res, json) {
    return send_message_on_status(res, 426, json);
}

// precondition_required: 428
function precondition_required(res, json) {
    return send_message_on_status(res, 428, json);
}

// too_many_requests: 429
function too_many_requests(res, json) {
    return send_message_on_status(res, 429, json);
}

// request_header_fields_too_large: 431
function request_header_fields_too_large(res, json) {
    return send_message_on_status(res, 431, json);
}

// unavailable_for_legal_reasons: 451
function unavailable_for_legal_reasons(res, json) {
    return send_message_on_status(res, 451, json);
}

// invalid_token: 498
function invalid_token(res, json) {
    return send_message_on_status(res, 498, json);
}

// 5xx server error 

// internal_server_error: 500
function internal_server_error(res, json) {
    return send_message_on_status(res, 500, json);
}

// not_implemented: 501
function not_implemented(res, json) {
    return send_message_on_status(res, 501, json);
}

// bad_gateway: 502
function bad_gateway(res, json) {
    return send_message_on_status(res, 502, json);
}

// service_unavailable: 503
function service_unavailable(res, json) {
    return send_message_on_status(res, 503, json);
}

// gateway_timeout: 504
function gateway_timeout(res, json) {
    return send_message_on_status(res, 504, json);
}

// http_version_not_supported: 505
function http_version_not_supported(res, json) {
    return send_message_on_status(res, 505, json);
}

// variant_also_negotiates: 506
function variant_also_negotiates(res, json) {
    return send_message_on_status(res, 506, json);
}

// insufficient_storage: 507
function insufficient_storage(res, json) {
    return send_message_on_status(res, 507, json);
}

// loop_detected: 508
function loop_detected(res, json) {
    return send_message_on_status(res, 508, json);
}

// not_extended: 510
function not_extended(res, json) {
    return send_message_on_status(res, 510, json);
}

// network_authentication_required: 511
function network_authentication_required(res, json) {
    return send_message_on_status(res, 511, json);
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
    not_acceptable,
    proxy_authentication_required,
    request_timeout,
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
    invalid_token,
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
