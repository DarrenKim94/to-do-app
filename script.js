const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskItems = [];

function addTask() {
    addNewTask(taskInput.value);
}

function addNewTask(task) {
    if(task = '') {
        alert('Please Type in a task.')
    }
    else {
        const taskItem = {
            id : Math.floor(Math.random() * 100),
            name : task,
            completed : false
        }
        taskItems.push(taskItem);
        showlist(taskItems);
        taskInput.value = '';
    }
}