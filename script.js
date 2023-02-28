const noText = document.getElementById('p1');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskForm = document.getElementById('taskForm');
let savedArray = JSON.parse(localStorage.getItem('toDoList'));
let taskItemsArray;

if (savedArray === null) {
    axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(response => {
            for (let i = 0; i < 5; i++) {
                taskItemsArray.push(response.data[i].title)
            }
        })
        saveToLocalStorage();
}
else {
    taskItemsArray = savedArray;
}


function addTaskBtn(event) {
    event.preventDefault();
    addNewTask(taskInput.value);
}

function addNewTask(task) {
    if(task === '') {
        noText.innerHTML = 'Please type in a task.'
    }

    else {
        noText.innerHTML = '';
         taskItem = {
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
    li = document.createElement('li');
    li.innerHTML += `${taskInput.value}
    <i class="deleteBtn fa-solid fa-trash-can" onclick='deleteTask(${taskItem.id})'></i>`;
    li.className = 'toDoItem';
    li.id = taskItem.id;
    taskList.appendChild(li);
}

function saveToLocalStorage() {
    localStorage.setItem('toDoList', JSON.stringify(taskItemsArray));
}

taskItemsArray.forEach(taskItem => {
    li = document.createElement('li');
    li.innerHTML += `${taskItem.name}
    <i class="deleteBtn fa-solid fa-trash-can" onclick='deleteTask(${taskItem.id})'></i>`;
    li.className = 'toDoItem';
    li.id = taskItem.id;
    taskList.appendChild(li);
  });

  function deleteTask(id) {
    taskItemsArray = taskItemsArray.filter(
        function(item) {
            return item.id !== id
        }
    );
    
    saveToLocalStorage();
    document.getElementById(id).remove();
  }




