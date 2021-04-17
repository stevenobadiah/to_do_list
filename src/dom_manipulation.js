import { colorBorder, displayCurrentTask } from "./dom_styling"
import { projectListDOM, currentTasksDOM, completedTasksDOM, projectList, currentProject } from "./global_variables"

function createTaskDOM(task) {
    let taskNode = document.createElement("div");
    taskNode.classList.add("task")
    taskNode.id = "taskNode" + task.id
    taskNode.addEventListener("click", function(){
        displayCurrentTask(task);
    }, false);

    let taskTitle = document.createElement("p");
    taskTitle.classList.add("taskTitle")
    taskTitle.innerHTML = task.title
    taskTitle.id = "taskTitle" + task.id

    let taskDueDate = document.createElement("p");
    taskDueDate.classList.add("taskDueDate")
    taskDueDate.innerHTML = "Due Date: " + task.due_date
    taskDueDate.id = "taskDueDate" + task.id

    let taskDescription = document.createElement("p");
    taskDescription.classList.add("taskDescription")
    taskDescription.innerHTML = task.description
    taskDescription.id = "taskDescription" + task.id
    taskDescription.style.display = "none"

    let taskEdit = document.createElement("button");
    taskEdit.innerHTML = "Edit"
    taskEdit.classList.add("taskEditBtn")
    taskEdit.id = "editProject" + currentProject.id + "Task" + task.id

    let taskDelete = document.createElement("button");
    taskDelete.innerHTML = "Delete"
    taskDelete.classList.add("taskDeleteBtn")
    taskDelete.id = "deleteProject" + currentProject.id + "Task" + task.id

    let taskCompleteLabel = document.createElement("p")
    taskCompleteLabel.classList.add("completionLabel")
    taskCompleteLabel.innerHTML = "Task Completed:"

    let taskComplete = document.createElement("input")
    taskComplete.type = "checkbox"
    taskComplete.classList.add("taskCompleteCheckBox")
    taskComplete.id = "completeProject" + currentProject.id + "Task" + task.id
    if (task.completion == true) {
        taskComplete.checked = true
    } else {
        taskComplete.checked = false
    }

    let taskCompleteSection = document.createElement("div")
    taskCompleteSection.classList.add("taskCompleteSection")
    taskCompleteSection.appendChild(taskCompleteLabel)
    taskCompleteSection.appendChild(taskComplete)

    let taskInfo = document.createElement("div");
    taskInfo.classList.add("taskInfo")
    taskInfo.appendChild(taskTitle)
    taskInfo.appendChild(taskDueDate)
    taskInfo.appendChild(taskCompleteSection)

    taskNode.appendChild(taskInfo)
    taskNode.appendChild(taskDescription)
    taskNode.appendChild(taskEdit)
    taskNode.appendChild(taskDelete)
    if (task.completion == false) {
        currentTasksDOM.appendChild(taskNode)
    } else {
        completedTasksDOM.appendChild(taskNode)
    }

    colorBorder(task, taskNode)
}


function setCurrentProject(project) {
    currentProject = project

    function clear() {
        while (currentTasksDOM.firstChild) {
            currentTasksDOM.removeChild(currentTasksDOM.lastChild);
        }
        while (completedTasksDOM.firstChild) {
            completedTasksDOM.removeChild(completedTasksDOM.lastChild);
        }
    }

    function display(project) {
        //show currrent project"s details on right hand side
        let projectTitleDisplay = document.getElementById("projectTitleDisplay")
        let projectDescriptionDisplay = document.getElementById("projectDescriptionDisplay")
        let projectDueDateDisplay = document.getElementById("projectDueDateDisplay")
        
        projectTitleDisplay.innerHTML = project.title
        projectDescriptionDisplay.innerHTML = project.description
        if (project.due_date !== null && project.due_date !== "") {
            projectDueDateDisplay.innerHTML = "Due Date: " + project.due_date
        } else {
            projectDueDateDisplay.innerHTML = ""
        }
    
        //show current project"s tasks
        for (var i = 0; i < project.tasks.length; i++ ) {
            let task = project.tasks[i]
            createTaskDOM(task)
        }
    }

    clear()
    display(project)

    //highlight correct div
    for (var i = 0; i < projectList.length; i++ ) {
        let projectNodeTemp = document.getElementById("project" + projectList[i].id)
        if (projectList[i].id == project.id) {
            projectNodeTemp.style.border = "thick solid yellow"
        } else {
            projectNodeTemp.style.border = "1px dashed grey"
        }
    }    
}

function createProjectDOM(project) {
    let projectNode = document.createElement("div");
    projectNode.id = "project" + project.id
    projectNode.classList.add("row", "project")
    projectNode.addEventListener("click", function(){
        setCurrentProject(project);
    }, false);

    let projectTitle = document.createElement("p");
    projectTitle.classList.add("projectTitle")
    projectTitle.innerHTML = project.title
    projectTitle.id = "projectTitle" + project.id
    projectNode.appendChild(projectTitle)

    let editProject = document.createElement("button")
    editProject.innerHTML = "Edit"
    editProject.classList.add("projectEditBtn")
    editProject.id = "editProject" + project.id
    projectNode.appendChild(editProject)

    projectListDOM.appendChild(projectNode)
}

export { createTaskDOM, createProjectDOM, setCurrentProject }