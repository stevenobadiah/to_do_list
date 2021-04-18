import Task from "./task"
import { returnNewIndex, addToLocalStorage } from "./global_functions"
import { closeAddTaskForm, closeEditTaskForm, clearTaskForm } from "./forms"
import { projectList, currentTasksDOM, completedTasksDOM, currentProject, currentTask } from "./global_variables"
import { createTaskDOM } from "./dom_manipulation"
import { colorBorder, displayCurrentTask } from "./dom_styling"
import { format, parse } from "date-fns";

const addTask = (ev)=> {
    ev.preventDefault();

    let dateString = document.getElementById("taskDueDate").value
    let formattedDate
    if (dateString == "") {
        formattedDate = null
    } else {
        formattedDate = format(parse(dateString, "yyyy-MM-dd", new Date()), "MM/dd/yyyy")
    }

    let task = new Task (
        returnNewIndex(currentProject.tasks),
        document.getElementById("taskTitle").value,
        formattedDate,
        document.getElementById("taskDescription").value,
        document.getElementById("taskPriority").value
    )

    currentProject.tasks.push(task);

    createTaskDOM(task)
    clearTaskForm();
    closeAddTaskForm();
    addToLocalStorage(projectList)
};

const editTask = (ev) => {
    let dateString = document.getElementById("editTaskDueDate").value
    let formattedDate
    if (dateString == "") {
        formattedDate = null
    } else {
        formattedDate = format(parse(dateString, "yyyy-MM-dd", new Date()), "MM/dd/yyyy")
    }

    currentTask.title = document.getElementById("editTaskTitle").value
    currentTask.due_date = formattedDate
    currentTask.description = document.getElementById("editTaskDescription").value
    currentTask.priority = document.getElementById("editTaskPriority").value

    let taskNode = document.getElementById("taskNode" + currentTask.id)
    let taskTitle = document.getElementById("taskTitle" + currentTask.id)
    taskTitle.innerHTML = document.getElementById("editTaskTitle").value
    let taskDueDate = document.getElementById("taskDueDate" + currentTask.id)
    if (formattedDate == null) {
        taskDueDate.innerHTML = ""
    } else {
        taskDueDate.innerHTML = "Due Date: " + formattedDate
    }

    if (currentTask.completion == false) {
        currentTasksDOM.appendChild(taskNode)
    } else {
        completedTasksDOM.appendChild(taskNode)
    }

    colorBorder(currentTask, taskNode)
    displayCurrentTask(currentTask)
    closeEditTaskForm()
    addToLocalStorage(projectList)
};

function completeTask(task) {
    let taskNode = document.getElementById("taskNode" + task.id)
    let taskCompletionCheckBox = document.getElementById("completeProject" + currentProject.id + "Task" + task.id)
    //if (taskCompletionCheckBox.checked) {
    if (task.completion == false) {
        task.completion = true
        currentTasksDOM.removeChild(taskNode)
        completedTasksDOM.appendChild(taskNode)
    } else {
        task.completion = false
        completedTasksDOM.removeChild(taskNode)
        currentTasksDOM.appendChild(taskNode)
    }
    colorBorder(task, taskNode)
    addToLocalStorage(projectList)
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
    addToLocalStorage(projectList)
};

export { addTask, editTask, completeTask, deleteTask }