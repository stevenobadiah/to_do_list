import Project from './project'
import Task from './task'
import { returnNewIndex } from './global_functions'
import { closeAddProjectForm, closeEditProjectForm, closeAddTaskForm, closeEditTaskForm, showEditProjectForm, showEditTaskForm, clearProjectForm, clearTaskForm } from './forms'
import { currentTasksDOM, completedTasksDOM, projectList, currentProject, currentTask } from './global_variables'
import { createTaskDOM, createProjectDOM, setCurrentProject } from './dom_manipulation'
import { colorBorder, displayCurrentTask } from './dom_styling'

const addProject = (ev)=> {
    ev.preventDefault();

    let project = new Project (
        returnNewIndex(projectList),
        document.getElementById('projectTitle').value,
        document.getElementById('projectDueDate').value,
        document.getElementById('projectDescription').value
    )

    projectList.push(project);

    createProjectDOM(project)

    setCurrentProject(project)
    clearProjectForm();
    closeAddProjectForm();
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

function openEditProjectForm(project) {
    showEditProjectForm()
    document.getElementById('editProjectTitle').value = project.title
    document.getElementById('editProjectDueDate').value = project.due_date
    document.getElementById('editProjectDescription').value = project.description
    currentProject = project
}

const editProject = (ev) => {
    currentProject.title = document.getElementById('editProjectTitle').value
    currentProject.due_date = document.getElementById('editProjectDueDate').value
    currentProject.description = document.getElementById('editProjectDescription').value

    let projectTitle = document.getElementById('projectTitle' + currentProject.id)
    projectTitle.innerHTML = document.getElementById('editProjectTitle').value

    let titleDisplay = document.getElementById('projectTitleDisplay')
    titleDisplay.innerHTML = document.getElementById('editProjectTitle').value

    let dueDateDisplay = document.getElementById('projectDueDateDisplay')
    dueDateDisplay.innerHTML = "Due Date: " + document.getElementById('editProjectDueDate').value

    let descriptionDisplay = document.getElementById('projectDescriptionDisplay')
    descriptionDisplay.innerHTML = document.getElementById('editProjectDescription').value

    closeEditProjectForm()
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
    taskDueDate.innerHTML = document.getElementById('editTaskDueDate').value

    if (currentTask.completion == false) {
        currentTasksDOM.appendChild(taskNode)
    } else {
        completedTasksDOM.appendChild(taskNode)
    }

    colorBorder(currentTask, taskNode)
    displayCurrentTask(currentTask)
    closeEditTaskForm()
};

function openEditTaskForm(task) {
    showEditTaskForm()
    document.getElementById('editTaskFormContainer').style.display = 'block';
    document.getElementById('editTaskTitle').value = task.title
    document.getElementById('editTaskDueDate').value = task.due_date
    document.getElementById('editTaskDescription').value = task.description
    document.getElementById('editTaskPriority').value = task.priority
    currentTask = task;
}

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

function createDefaults () {
    let date = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    date = '2025-05-19'

    let project = new Project (
        0,
        "Default Project",
        date,
        "default project description",
    )

    let task1 = new Task (
        0,
        'Default Task 1',
        date,
        'First task to complete',
        'Low'
    )

    let task2 = new Task (
        1,
        'Default Task 2',
        date,
        'Second task to complete',
        'Low'
    )

    projectList.push(project);

    createProjectDOM(project)

    setCurrentProject(project)

    createTaskDOM(task1)
    createTaskDOM(task2)
    currentProject.tasks.push(task1)
    currentProject.tasks.push(task2)

}


//Dom Listening js?
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btnSubmitProject').addEventListener('click', addProject)
    document.getElementById('btnEditProject').addEventListener('click', editProject)
    document.getElementById('btnSubmitTask').addEventListener('click', addTask)
    document.getElementById('btnEditTask').addEventListener('click', editTask)
})

document.body.addEventListener('click', (e) => {
    //Check body of this function
    if (e.target.classList.contains('projectEditBtn')) {
        var buttonDOMId = e.target.getAttribute("id")
        var buttonId = buttonDOMId.charAt(buttonDOMId.length - 1)
        var project_to_edit = projectList.find(x => x.id == buttonId)
        openEditProjectForm(project_to_edit)
    } else if (e.target.classList.contains('taskEditBtn')) {
        var buttonDOMId = e.target.getAttribute("id")
        var buttonId = buttonDOMId.charAt(buttonDOMId.length - 1)
        var task_to_edit = currentProject.tasks.find(x => x.id == buttonId)
        openEditTaskForm(task_to_edit)
    } else if (e.target.classList.contains('taskDeleteBtn')) {
        var buttonDOMId = e.target.getAttribute("id")
        var buttonId = buttonDOMId.charAt(buttonDOMId.length - 1)
        var task_to_delete = currentProject.tasks.find(x => x.id == buttonId)
        deleteTask(task_to_delete)
    } else if (e.target.classList.contains('taskCompleteCheckBox')) {
        var buttonDOMId = e.target.getAttribute("id")
        var buttonId = buttonDOMId.charAt(buttonDOMId.length - 1)
        var task_to_complete = currentProject.tasks.find(x => x.id == buttonId)
        completeTask(task_to_complete)
    };
});

createDefaults()