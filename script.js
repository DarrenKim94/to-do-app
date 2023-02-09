const noText = document.getElementById('p1');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskItemsArray = [];

function addTaskBtn() {
    addNewTask(taskInput.value);
    return false
}

function addNewTask(task) {
    if(task === '') {
        noText.innerHTML = 'Please type in a task.'
    }

    else {
        noText.innerHTML = '';
        const taskItem = {
            id : Math.floor(Math.random() * 1000),
            name : task,
            completed : false
        };

        taskItemsArray.push(taskItem);
        showlist();
        taskInput.value = '';
    }
}

function showlist() {
    const li = document.createElement('li');
    li.innerHTML += `<input type="checkbox" class="checkBox"> ${taskInput.value}
    <i class="deleteBtn fa-solid fa-trash-can"></i>`
    li.className = 'toDoItem';
    taskList.appendChild(li);
}