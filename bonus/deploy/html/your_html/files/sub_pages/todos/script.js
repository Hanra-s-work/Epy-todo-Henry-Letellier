async function refresh_all_todos(DEST_ID) {
    document.getElementById(DEST_ID).innerHTML = `<span id="${DEST_ID}"></span>`;
    const response = await query.getTodos(DEST_ID);
}

async function get_todo(TODO_ID, DEST_ID) {
    document.getElementById(DEST_ID).innerHTML = `<span id="${DEST_ID}"></span>`;
    var id = document.getElementById(TODO_ID).value;
    console.log(`id = ${id}`);
    const response = await query.getTodosViaID(DEST_ID, id);
}

function display_create_a_todo(FORM_ID) {
    var form = document.getElementById(FORM_ID);
    form.style.display = "block";
}

function display_update_a_todo(FORM_ID) {
    var form = document.getElementById(FORM_ID);
    form.style.display = "block";
}

function display_delete_a_todo(FORM_ID) {
    var form = document.getElementById(FORM_ID);
    form.style.display = "block";
}


// <script>
//     // Show the create todo form
//     function showCreateTodoForm() {
//       var overlay = document.getElementById('createTodoOverlay');
//       overlay.style.display = 'flex';
//     }

//     // Hide the create todo form
//     function hideCreateTodoForm() {
//       var overlay = document.getElementById('createTodoOverlay');
//       overlay.style.display = 'none';
//     }

//     // Handle form submission
//     function createTodo() {
//       var title = document.getElementById('title').value;
//       var description = document.getElementById('description').value;
//       var dueTime = document.getElementById('due_time').value;
//       var status = document.getElementById('status').value;

//       // Perform any necessary actions with the form data
//       // For example, you can send the data to the server using AJAX or perform client-side validation

//       console.log('Todo created:', { title, description, dueTime, status });

//       // Reset the form fields
//       document.getElementById('createTodoForm').reset();

//       // Hide the create todo form
//       hideCreateTodoForm();
//     }
//   </script>
