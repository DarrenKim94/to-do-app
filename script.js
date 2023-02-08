const noText = document.getElementById('p1');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskItems = [];

function addTask() {
    addNewTask(taskInput.value);
    return false
}

function addNewTask(task) {
    if(task = '') {
        noText.innerHTML = 'Please type in a task.'
    }

    else {
        const taskItem = {
            id : Math.floor(Math.random() * 100),
            name : task,
            completed : false
        };

        taskItems.push(taskItem);
        showlist();
        taskInput.value = '';
    }
}

function showlist() {
    const para = document.createElement('p');
    para.innerHTML = taskInput.value;
    taskList.appendChild(para);
}