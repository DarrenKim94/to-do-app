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
        };

        taskItemsArray.push(taskItem);
        saveToLocalStorage();
        taskInput.value = '';
    }
}

function showlist() {
    const li = document.createElement('li');
    li.innerHTML += `${taskInput.value}
    <i class="deleteBtn fa-solid fa-trash-can"></i>`
    li.className = 'toDoItem';
    taskList.appendChild(li);
}

function saveToLocalStorage() {
    localStorage.setItem('toDoList', JSON.stringify(taskItemsArray));
    showlist(taskItemsArray)
}

function getFromLocalStorage() {
    const getTask = localStorage.getItem('toDoList');
    // if get task exist ion the local storage
    if(getTask) {
        // change it back to an array
        taskItemsArray = JSON.parse(getTask)
        // display current items saved from local storage
        showlist(taskItemsArray)
    }
}
getFromLocalStorage() 
