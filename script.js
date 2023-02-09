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
    const removeButton = document.createElement('button');
    const checkBox = document.createElement('i');
    li.innerHTML = taskInput.value;
    li.className = 'toDoItem';
    removeButton.className = 'fa-solid fa-trash-can deleteBtn';
    checkBox.setAttribute('type', 'checkbox')
    li.appendChild(removeButton);
    li.appendChild(checkBox);
    taskList.appendChild(li);

}