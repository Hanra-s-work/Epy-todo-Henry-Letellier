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

async function refresh_all_users(DEST_ID, CONFIRMATION_ID = "") {
    document.getElementById(DEST_ID).innerHTML = `<span id="${DEST_ID}"></span>`;
    const response = await query.getRefletDAcide(DEST_ID);
    put_confirmation(CONFIRMATION_ID, "The user list has been refreshed !");
}

async function get_user_via_id(TODO_ID, DEST_ID, CONFIRMATION_ID) {
    document.getElementById(DEST_ID).innerHTML = `<span id="${DEST_ID}"></span>`;
    var id = document.getElementById(TODO_ID).value;
    const response = await query.getUsersByID(DEST_ID, id);
    put_confirmation(CONFIRMATION_ID, `User ${id} searched !`);
}

async function get_user_via_email(TODO_ID, DEST_ID, CONFIRMATION_ID) {
    document.getElementById(DEST_ID).innerHTML = `<span id="${DEST_ID}"></span>`;
    var email = document.getElementById(TODO_ID).value;
    console.log(`email = ${email}`);
    const response = await query.getUsersByEmail(DEST_ID, email);
    put_confirmation(CONFIRMATION_ID, `User ${email} searched !`);
}

async function update_delete_message_id(ID_SPINBOX, ID_SPAN, ID_SPAN_DESC) {
    var id = document.getElementById(ID_SPINBOX).value;
    var span = document.getElementById(ID_SPAN);
    var user_info = document.getElementById(ID_SPAN_DESC);
    var user_node = await query.getUsersByID("", id);
    span.innerHTML = `<span id="${ID_SPAN}">${id}</span>`;
    if (isJSON(user_node) === true && ('msg' in user_node) === false) {
        user_info.innerHTML = `<span id="${ID_SPAN_DESC}"><u>${user_node.firstname} ${user_node.name}</u><br>${user_node.email}</span>`;
    } else if ('msg' in user_node === true) {
        user_info.innerHTML = `<span id="${ID_SPAN_DESC}">${user_node.msg}</span>`;
    } else {
        user_info.innerHTML = `<span id="${ID_SPAN_DESC}">${JSON.stringify(user_node)}</span>`;
    }
}

async function update_delete_message_email(ID_EMAIL, ID_SPAN, ID_SPAN_DESC) {
    var email = document.getElementById(ID_EMAIL).value;
    var span = document.getElementById(ID_SPAN);
    var user_info = document.getElementById(ID_SPAN_DESC);
    var user_node = await query.getUsersByEmail("", email);
    span.innerHTML = `<span id="${ID_SPAN}">${email}</span>`;
    if (isJSON(user_node) === true && ('msg' in user_node) === false) {
        user_info.innerHTML = `<span id="${ID_SPAN_DESC}"><u>${user_node.firstname} ${user_node.name}</u><br>${user_node.email}</span>`;
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

function update_display_on_todo_node(QUERY_DATA = {}, todo_email = "", todo_password = "", todo_password_confirm = "", todo_name = "", todo_firstname = "") {
    var email = document.getElementById(todo_email);
    var password = document.getElementById(todo_password);
    var password_confirm = document.getElementById(todo_password_confirm);
    var firstname = document.getElementById(todo_firstname);
    var name = document.getElementById(todo_name);
    var data = QUERY_DATA;
    if (isJSON(data) === true && ("msg" in data === false)) {
        email.value = data.email;
        password.value = "";
        password_confirm.value = "";
        firstname.value = data.firstname;
        name.value = data.name;
    }
}

async function display_update_a_user(FORM_ID, INPUT_ID = "", TODO_INFO_DEST_ID = "", todo_email = "", todo_password = "", todo_password_confirm = "", todo_name = "", todo_firstname = "") {
    document.getElementById(TODO_INFO_DEST_ID).innerHTML = `<span id="${TODO_INFO_DEST_ID}"></span>`;
    var input_info = document.getElementById(INPUT_ID).value;
    var data = await query.getUsersByID("", input_info);
    document.getElementById(TODO_INFO_DEST_ID).innerHTML += `<u>${data.firstname} ${data.name}</u><br>${data.email}`;
    update_display_on_todo_node(QUERY_DATA = data, todo_email = todo_email, todo_password = todo_password, todo_password_confirm = todo_password_confirm, todo_name = todo_name, todo_firstname = todo_firstname);
    var form = document.getElementById(FORM_ID);
    form.style.display = "block";
}

function display_delete_a_user(FORM_ID) {
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

function reset_data_forms(todo_email = "", todo_password = "", todo_password_confirm = "", todo_name = "", todo_firstname = "") {
    var email = document.getElementById(todo_email);
    var password = document.getElementById(todo_password);
    var password_confirm = document.getElementById(todo_password_confirm);
    var firstname = document.getElementById(todo_firstname);
    var name = document.getElementById(todo_name);
    email.value = "";
    password.value = "";
    password_confirm.value = "";
    firstname.value = "";
    name.value = "";
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

async function updateUser(DEST_ID, FORM_ID, CONFIRMATION_ID = "", TODO_ID = "", ERROR_CHANNEL_ID = "", todo_email = "", todo_password = "", todo_password_confirm = "", todo_name = "", todo_firstname = "") {
    var email = document.getElementById(todo_email).value;
    var password = document.getElementById(todo_password).value;
    var password_confirm = document.getElementById(todo_password_confirm).value;
    var name = document.getElementById(todo_name).value;
    var firstname = document.getElementById(todo_firstname).value;
    var user_id = document.getElementById(TODO_ID).value;

    // Perform any necessary actions with the form data
    // For example, you can send the data to the server using AJAX or perform client-side validation

    if (password_confirm != "" && password_confirm != undefined && password != "" && password != undefined && password_confirm != password) {
        perror(ERROR_CHANNEL_ID, "Your passwords do not match !");
        return "";
    }
    if (email != "" && email != undefined &&
        password != "" && password != undefined &&
        password_confirm != "" && password_confirm != undefined &&
        name != "" && name != undefined &&
        firstname != "" && firstname != undefined) {
        var data = await query.putUsersViaID(DEST_ID, user_id, email, password, name, firstname);
        var data2 = await refresh_all_users(DEST_ID, CONFIRMATION_ID);

        // Reset the form fields
        reset_data_forms(todo_email, todo_password, todo_password_confirm, todo_name, todo_firstname);

        // Hide the create todo form
        hideTodoForm(FORM_ID);
        put_confirmation(CONFIRMATION_ID, data);
    } else {
        if (email === "" || email === undefined) {
            perror(ERROR_CHANNEL_ID, "Please enter a title for the user.");
        } else if (password === "" || password === undefined) {
            perror(ERROR_CHANNEL_ID, "Please enter a password for the user.");
        } else if (password_confirm === "" || password_confirm === undefined) {
            perror(ERROR_CHANNEL_ID, "Please confirm the password for the user.");
        } else if (name === "" || name === undefined) {
            perror(ERROR_CHANNEL_ID, "Please enter a name for the user.");
        } else if (firstname === "" || firstname === undefined) {
            perror(ERROR_CHANNEL_ID, "Please enter a firstname for the user.");
        } else {
            perror(ERROR_CHANNEL_ID, "Unknown error, please check the fields you filled.");
        }
    }
}

async function deleteUser(FORM_ID = "", TODO_ID = "", CONFIRMATION_ID = "", DEST_ID = "") {
    console.log(`FORM_ID = ${FORM_ID}, TODO_ID = ${TODO_ID}, CONFIRMATION_ID = ${CONFIRMATION_ID}, DEST_ID = ${DEST_ID}`);
    var todo_id = document.getElementById(TODO_ID).value;
    var data = await query.deleteUsersViaID(DEST_ID, todo_id);
    var data2 = await refresh_all_users(DEST_ID, CONFIRMATION_ID);
    put_confirmation(CONFIRMATION_ID, data);
    hideTodoForm(FORM_ID);
}
