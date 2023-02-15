const noText = document.getElementById('p1');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
let savedArray = JSON.parse(localStorage.getItem('toDoList'))
let taskItemsArray;
if (savedArray === null) {
    taskItemsArray = [];
}
else {
    taskItemsArray = savedArray;
}

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
        showList();
        saveToLocalStorage();
        taskInput.value = '';
    }
}

function showList() {
    const li = document.createElement('li');
    li.innerHTML += `${taskInput.value}
    <i class="deleteBtn fa-solid fa-trash-can" id='removeTask'></i>`
    li.className = 'toDoItem';
    taskList.appendChild(li);
}

function saveToLocalStorage() {
    localStorage.setItem('toDoList', JSON.stringify(taskItemsArray));
}

taskItemsArray.forEach(taskItem => {
    const li = document.createElement('li');
    li.innerHTML += `${taskItem.name}
    <i class="deleteBtn fa-solid fa-trash-can" id='removeTask'></i>`
    li.className = 'toDoItem';
    taskList.appendChild(li);
  });

document.getElementById('removeTask').addEventListener("click", deleteTask);

function deleteTask() {
console.log('hi')
}
