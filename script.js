
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${taskText}
            <button class="edit-button" onclick="editTask(this)">Edit</button>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(listItem);

        taskInput.value = "";
    }
}

function deleteTask(button) {
    const listItem = button.parentElement;
    const taskList = document.getElementById("task-list");
    taskList.removeChild(listItem);
}

function editTask(button) {
    const listItem = button.parentElement;
    const taskText = listItem.firstChild.textContent.trim();
    const updatedText = prompt("Edit task:", taskText);

    if (updatedText !== null) {
        listItem.firstChild.textContent = updatedText;
    }
}
