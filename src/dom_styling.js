import { currentTask, currentProject } from './global_variables'

function colorBorder(task, taskNode) {
    if (task.completion == true) {
        taskNode.style.borderBottom = "thick solid green"
    } else if (task.priority == 'High') {
        taskNode.style.borderBottom = "thick solid red"
    } else if (task.priority == 'Medium') {
        taskNode.style.borderBottom = "thick solid orange"
    } else if (task.priority == 'Low') {
        taskNode.style.borderBottom = "thick solid yellow"
    }
}

function displayCurrentTask(task) {
    currentTask = task

    //highlight correct div
    for (var i = 0; i < currentProject.tasks.length; i++ ) {
        let taskNodeTemp = document.getElementById("taskNode" + currentProject.tasks[i].id)
        let taskDescription = document.getElementById('taskDescription' + currentProject.tasks[i].id)
        taskDescription.innerHTML = task.description
        if (currentProject.tasks[i].id == task.id) {
            taskNodeTemp.style.backgroundColor = "rgb(255, 253, 157)"
            taskDescription.style.display = 'block'
        } else {
            taskNodeTemp.style.backgroundColor = "rgb(255, 255, 255)"
            taskDescription.style.display = 'none'
        }
    }    
}

export { colorBorder, displayCurrentTask }