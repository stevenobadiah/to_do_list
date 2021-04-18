import { currentTask, currentProject } from "./global_variables"

function colorBorder(task, taskNode) {
    if (task.completion == true) {
        taskNode.style.borderLeft = "thick solid green"
    } else if (task.priority == "High") {
        taskNode.style.borderLeft = "thick solid red"
    } else if (task.priority == "Medium") {
        taskNode.style.borderLeft = "thick solid orange"
    } else if (task.priority == "Low") {
        taskNode.style.borderLeft = "thick solid yellow"
    } else {
        taskNode.style.borderLeft = "none"
    }
}

function displayCurrentTask(task) {
    currentTask = task

    //highlight correct div
    for (var i = 0; i < currentProject.tasks.length; i++ ) {
        let taskNodeTemp = document.getElementById("taskNode" + currentProject.tasks[i].id)
        let taskDescription = document.getElementById("taskDescription" + currentProject.tasks[i].id)
        taskDescription.innerHTML = task.description
        if (currentProject.tasks[i].id == task.id) {
            taskNodeTemp.style.backgroundColor = "rgb(255, 253, 240)"
            taskDescription.style.display = "block"
        } else {
            taskNodeTemp.style.backgroundColor = "rgb(255, 255, 255)"
            taskDescription.style.display = "none"
        }
    }    
}

export { colorBorder, displayCurrentTask }