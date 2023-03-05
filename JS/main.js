let taskInput = document.getElementById('taskInput');
let addTaskbtn = document.getElementById('addTaskbtn');
let allTasks = document.getElementById('allTasks');
let noTask = document.getElementById('noTask');



let addTask = () => {
    noTask.remove();
    let task = taskInput.value;
    allTasks.innerHTML += Text;

    let divNewTask = document.createElement('div');
    divNewTask.classList = "alert alert-info";
    divNewTask.append(task)


    allTasks.append(divNewTask);
}
addTaskbtn.addEventListener('click', addTask);