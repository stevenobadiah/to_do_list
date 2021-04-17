import Task from './task'
import { returnNewIndex } from './global_functions'
import { closeAddTaskForm, closeEditTaskForm, clearTaskForm } from './forms'
import { currentTasksDOM, completedTasksDOM, currentProject, currentTask } from './global_variables'
import { createTaskDOM } from './dom_manipulation'
import { colorBorder, displayCurrentTask } from './dom_styling'

const addTask = (ev)=> {
    ev.preventDefault();

    let task = new Task (
        returnNewIndex(currentProject.tasks),
        document.getElementById('taskTitle').value,
        document.getElementById('taskDueDate').value,
        document.getElementById('taskDescription').value,
        document.getElementById('taskPriority').value
    )

    currentProject.tasks.push(task);

    createTaskDOM(task)
    clearTaskForm();
    closeAddTaskForm();
};

const editTask = (ev) => {
    currentTask.title = document.getElementById('editTaskTitle').value
    currentTask.due_date = document.getElementById('editTaskDueDate').value
    currentTask.description = document.getElementById('editTaskDescription').value
    currentTask.priority = document.getElementById('editTaskPriority').value

    let taskNode = document.getElementById('taskNode' + currentTask.id)
    let taskTitle = document.getElementById('taskTitle' + currentTask.id)
    taskTitle.innerHTML = document.getElementById('editTaskTitle').value
    let taskDueDate = document.getElementById('taskDueDate' + currentTask.id)
    taskDueDate.innerHTML = "Due Date: " + document.getElementById('editTaskDueDate').value

    if (currentTask.completion == false) {
        currentTasksDOM.appendChild(taskNode)
    } else {
        completedTasksDOM.appendChild(taskNode)
    }

    colorBorder(currentTask, taskNode)
    displayCurrentTask(currentTask)
    closeEditTaskForm()
};

function completeTask(task) {
    let taskNode = document.getElementById("taskNode" + task.id)
    let taskCompletionCheckBox = document.getElementById('completeProject' + currentProject.id + 'Task' + task.id)
    if (taskCompletionCheckBox.checked) {
        task.markComplete()
        currentTasksDOM.removeChild(taskNode)
        completedTasksDOM.appendChild(taskNode)
    } else {
        task.markIncomplete()
        completedTasksDOM.removeChild(taskNode)
        currentTasksDOM.appendChild(taskNode)
    }
    colorBorder(task, taskNode)
};

function deleteTask(task) {
    let taskNode = document.getElementById("taskNode" + task.id)
    if (task.completion == false) {
        currentTasksDOM.removeChild(taskNode)
    } else {
        completedTasksDOM.removeChild(taskNode)
    }
    for (var i = 0; i < currentProject.tasks.length; i++) {
        if (currentProject.tasks[i] == task) {
            currentProject.tasks.splice(i, 1);
        }
    }    
};

export { addTask, editTask, completeTask, deleteTask }