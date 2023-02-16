const noText = document.getElementById('p1');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskForm = document.getElementById('taskForm');
let savedArray = JSON.parse(localStorage.getItem('toDoList'));
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
        saveToLocalStorage();
        showList();
        taskInput.value = '';
    }
}

function showList() {
    li = document.createElement('li');
    li.innerHTML += `${taskInput.value}
    <i class="deleteBtn fa-solid fa-trash-can"></i> onclick='deleteTask(${taskItem.id})'`
    li.className = 'toDoItem';
    taskList.appendChild(li);
}

function saveToLocalStorage() {
    localStorage.setItem('toDoList', JSON.stringify(taskItemsArray));
}

taskItemsArray.forEach(taskItem => {
    li = document.createElement('li');
    li.innerHTML += `${taskItem.name}
    <i class="deleteBtn fa-solid fa-trash-can" id='trashIcon' onclick='deleteTask(${taskItem.id})'></i>`
    li.className = 'toDoItem';
    li.id = 'listItem'
    taskList.appendChild(li);
  });

  function deleteTask(id) {
    taskItemsArray = taskItemsArray.filter(
        function(item) {
            return item.id !== id
        }
    );
    saveToLocalStorage();
    document.getElementById('trashIcon').remove();
    document.getElementById('listItem').remove();
  }



