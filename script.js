const noText = document.getElementById('p1');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
let taskItemsArray =JSON.parse(localStorage.getItem('toDoListArray')) || [];


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
    localStorage.setItem('toDoListArray', JSON.stringify(taskItemsArray));
    showlist(taskItemsArray)
}

function getFromLocalStorage() {
  taskItemsArray.forEach(taskItem => {
    const li = document.createElement('li');
    li.innerHTML += `${taskItem.name}
    <i class="deleteBtn fa-solid fa-trash-can"></i>`
    li.className = 'toDoItem';
    taskList.appendChild(li);
  });
}
getFromLocalStorage()