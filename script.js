const inputField = document.getElementById('inputField');
const taskList = document.getElementById('taskList');

function addTask() {
    let newTask = document.createElement('p');
    newTask.innerHTML = inputField.value;
    taskList.appendChild(newTask); 
    return false
}