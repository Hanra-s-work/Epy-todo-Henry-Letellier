function put_confirmation(CONFIRMATION_ID = "", data = {}) {
    console.log(`CONFIRMATION_ID = ${CONFIRMATION_ID}, data = ${data}`);
    if (CONFIRMATION_ID === "") {
        console.log("data is missing in confirmation ID");
        return "";
    }
    if (isJSON(data) === true && ("msg" in data) === true) {
        document.getElementById(CONFIRMATION_ID).innerHTML = `<p id="${CONFIRMATION_ID}">${data.msg}</p>`;
    } else if (typeof data === "string") {
        document.getElementById(CONFIRMATION_ID).innerHTML = `<p id="${CONFIRMATION_ID}">${data}</p>`;
    } else if (data === undefined || data === null) {
        document.getElementById(CONFIRMATION_ID).innerHTML = `<p id="${CONFIRMATION_ID}"></p>`;
    } else {
        document.getElementById(CONFIRMATION_ID).innerHTML = `<p id="${CONFIRMATION_ID}">${JSON.stringify(data)}</p>`;
    }
}

async function refresh_all_todos(DEST_ID, CONFIRMATION_ID = "") {
    document.getElementById(DEST_ID).innerHTML = `<span id="${DEST_ID}"></span>`;
    const response = await query.getTodos(DEST_ID);
    put_confirmation(CONFIRMATION_ID, response);
}

async function get_todo(TODO_ID, DEST_ID, CONFIRMATION_ID) {
    document.getElementById(DEST_ID).innerHTML = `<span id="${DEST_ID}"></span>`;
    var id = document.getElementById(TODO_ID).value;
    const response = await query.getTodosViaID(DEST_ID, id);
    put_confirmation(CONFIRMATION_ID, `Todo ${id} searched !`);
}

async function update_delete_message(ID_SPINBOX, ID_SPAN, ID_SPAN_DESC) {
    var id = document.getElementById(ID_SPINBOX).value;
    var span = document.getElementById(ID_SPAN);
    var user_info = document.getElementById(ID_SPAN_DESC);
    var user_node = await query.getTodosViaID("", id);
    span.innerHTML = `<span id="${ID_SPAN}">${id}</span>`;
    if (isJSON(user_node) === true && ('msg' in user_node) === false) {
        user_info.innerHTML = `<span id="${ID_SPAN_DESC}"><u>${user_node.title}</u><br>${user_node.description}</span>`;
    } else if ('msg' in user_node === true) {
        user_info.innerHTML = `<span id="${ID_SPAN_DESC}">${user_node.msg}</span>`;
    } else {
        user_info.innerHTML = `<span id="${ID_SPAN_DESC}">${JSON.stringify(user_node)}</span>`;
    }
}

function display_create_a_todo(FORM_ID) {
    var form = document.getElementById(FORM_ID);
    form.style.display = "block";
}

function isJSON(str) {
    if (typeof str !== "string") {
        str = JSON.stringify(str);
    }
    try {
        JSON.parse(str);
        return true;
    } catch (err) {
        return false;
    }
}

function fix_date_for_destination(current_datetime) {
    var res = current_datetime.replace(".000Z", "");
    return res;
}

function get_list_index(todo_status = "", item = "") {
    const dropdown = document.getElementById(todo_status);
    const selectedValue = item;

    const selectedIndex = Array.from(dropdown.options).findIndex(option => option.value === selectedValue);
    return selectedIndex;
}

function update_display_on_todo_node(QUERY_DATA = {}, todo_title = "", todo_description = "", todo_due_time = "", todo_status = "") {
    var title = document.getElementById(todo_title);
    var description = document.getElementById(todo_description);
    var dueTime = document.getElementById(todo_due_time);
    var status = document.getElementById(todo_status);
    var data = QUERY_DATA;
    var current_status = "";
    if (isJSON(data) === true && ("msg" in data === false)) {
        title.value = data.title;
        description.value = data.description;
        var date_destination = fix_date_for_destination(data.due_time);
        dueTime.value = date_destination;
        current_status = data.status;
        current_status = current_status.toLowerCase();
        current_status = current_status.split(' ');
        current_status = current_status.join('-');
        status.selectedIndex = get_list_index(todo_status, current_status);
    }
}

async function display_update_a_todo(FORM_ID, INPUT_ID = "", TODO_INFO_DEST_ID = "", todo_title = "", todo_description = "", todo_due_time = "", todo_status = "") {
    document.getElementById(TODO_INFO_DEST_ID).innerHTML = `<span id="${TODO_INFO_DEST_ID}"></span>`;
    var input_info = document.getElementById(INPUT_ID).value;
    var data = await query.getTodosViaID("", input_info);
    document.getElementById(TODO_INFO_DEST_ID).innerHTML += `<u>${data.title}</u><br>${data.description}`;
    update_display_on_todo_node(QUERY_DATA = data, todo_title = todo_title, todo_description = todo_description, todo_due_time = todo_due_time, todo_status = todo_status);
    var form = document.getElementById(FORM_ID);
    form.style.display = "block";
}

function display_delete_a_todo(FORM_ID) {
    var form = document.getElementById(FORM_ID);
    form.style.display = "block";
}


function hideTodoForm(FORM_ID) {
    var form = document.getElementById(FORM_ID);
    form.style.display = "none";
}

function get_current_datetime() {
    var currentDatetime = new Date();
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    var localDatetime = currentDatetime.toLocaleString(undefined, options);
    var datetimeParts = localDatetime.split(/[.,\/ :]+/);
    var year = datetimeParts[2];
    var month = datetimeParts[1];
    var day = datetimeParts[0];
    var hour = datetimeParts[3];
    var minute = datetimeParts[4];
    var seconds = datetimeParts[5];
    var comp = `${year}-${month}-${day}T${hour}:${minute}:${seconds}`;
    return comp;
}

function reset_data_forms(todo_title = "", todo_description = "", todo_due_time = "", todo_status = "") {

    document.getElementById(todo_title).value = "";
    document.getElementById(todo_description).value = "";
    document.getElementById(todo_due_time).value = get_current_datetime();
    document.getElementById(todo_status).selectedIndex = 0;
}

function perror(ERROR_CHANNEL_ID, msg) {
    document.getElementById(ERROR_CHANNEL_ID).innerHTML = `<p id="${ERROR_CHANNEL_ID}" class="error-channel">${msg}</p>`;
}

function format_date_for_sql(dateTime = "2023-05-29 12:00:00") {
    // 2023-05-26T00:24
    var date = dateTime.split('T')[0];
    var time = dateTime.split('T')[1];
    var timeInfo = time.split(':');
    if (timeInfo.length === 2) {
        timeInfo.push('00');
    }
    time = timeInfo.join(':');
    var formatted = `${date} ${time}`;
    return formatted;
}



async function createTodo(DEST_ID, FORM_ID, CONFIRMATION_ID = "", ERROR_CHANNEL_ID = "", todo_title = "", todo_description = "", todo_due_time = "", todo_status = "") {
    var title = document.getElementById(todo_title).value;
    var description = document.getElementById(todo_description).value;
    var dueTime = document.getElementById(todo_due_time).value;
    var status = document.getElementById(todo_status).value;

    // Perform any necessary actions with the form data
    // For example, you can send the data to the server using AJAX or perform client-side validation
    if (status != "Not fetchable" && title != "" && title != undefined && description != "" && description != undefined) {
        status = status.split('-');
        status = status.join(' ');
        status = status.toLowerCase();
        var data = await query.postTodos(DEST_ID, title, description, dueTime, status);
        var data2 = await refresh_all_todos(DEST_ID, CONFIRMATION_ID);
        // Reset the form fields
        reset_data_forms(todo_title, todo_description, todo_due_time, todo_status);
        // document.getElementById(FORM_ID).reset();

        // Hide the create todo form
        hideTodoForm(FORM_ID);
        put_confirmation(CONFIRMATION_ID, data);
    } else {
        if (title === "" || title === undefined) {
            perror(ERROR_CHANNEL_ID, "Please enter a title for the task.");
        } else if (description === "" || description === undefined) {
            perror(ERROR_CHANNEL_ID, "Please enter a description for the task.");
        } else if (status === "Not fetchable") {
            perror(ERROR_CHANNEL_ID, "Please select the status of the task.");
        } else {
            perror(ERROR_CHANNEL_ID, "Unknown error, please check the fields you filled.");
        }
    }
}

async function updateTodo(DEST_ID, FORM_ID, CONFIRMATION_ID = "", TODO_ID = "", ERROR_CHANNEL_ID = "", todo_title = "", todo_description = "", todo_due_time = "", todo_status = "") {
    var title = document.getElementById(todo_title).value;
    var description = document.getElementById(todo_description).value;
    var dueTime = document.getElementById(todo_due_time).value;
    var status = document.getElementById(todo_status).value;
    var todo_id = document.getElementById(TODO_ID).value;
    var user_id = cookie.readCookie(query.user_id_cookie_name);

    // Perform any necessary actions with the form data
    // For example, you can send the data to the server using AJAX or perform client-side validation

    if (status != "Not fetchable" && title != "" && title != undefined && description != "" && description != undefined) {
        status = status.split('-');
        status = status.join(' ');
        status = status.toLowerCase();
        var formated_dueTime = format_date_for_sql(dueTime);
        var data = await query.putTodosViaID(DEST_ID, todo_id, title, description, formated_dueTime, status, user_id);
        var data2 = await refresh_all_todos(DEST_ID, CONFIRMATION_ID);

        // Reset the form fields
        reset_data_forms(todo_title, todo_description, todo_due_time, todo_status);
        // document.getElementById(FORM_ID).reset();

        // Hide the create todo form
        hideTodoForm(FORM_ID);
        put_confirmation(CONFIRMATION_ID, data);
    } else {
        if (title === "" || title === undefined) {
            perror(ERROR_CHANNEL_ID, "Please enter a title for the task.");
        } else if (description === "" || description === undefined) {
            perror(ERROR_CHANNEL_ID, "Please enter a description for the task.");
        } else if (status === "Not fetchable") {
            perror(ERROR_CHANNEL_ID, "Please select the status of the task.");
        } else {
            perror(ERROR_CHANNEL_ID, "Unknown error, please check the fields you filled.");
        }
    }
}

async function deleteTodo(FORM_ID = "", TODO_ID = "", CONFIRMATION_ID = "", DEST_ID = "") {
    console.log(`FORM_ID = ${FORM_ID}, TODO_ID = ${TODO_ID}, CONFIRMATION_ID = ${CONFIRMATION_ID}, DEST_ID = ${DEST_ID}`);
    var todo_id = document.getElementById(TODO_ID).value;
    var data = await query.deleteTodosViaID(DEST_ID, todo_id);
    var data2 = await refresh_all_todos(DEST_ID, CONFIRMATION_ID);
    put_confirmation(CONFIRMATION_ID, data);
    hideTodoForm(FORM_ID);
}
