import Project from './project'
import Task from './task'
import { projectList, currentProject } from './global_variables'
import { createTaskDOM, createProjectDOM, setCurrentProject } from './dom_manipulation'
import { closeAddProjectForm, closeEditProjectForm, closeAddTaskForm, closeEditTaskForm, showAddProjectForm, showAddTaskForm, openEditProjectForm, openEditTaskForm } from './forms'
import { addProject, editProject } from './project_interact'
import { addTask, editTask, completeTask, deleteTask } from './task_interact'

const initialize = function() {
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

    document.addEventListener('DOMContentLoaded', ()=> {
        document.getElementById('btnAddProject').addEventListener('click', showAddProjectForm)
        document.getElementById('btnCancelAddProject').addEventListener('click', closeAddProjectForm)
        document.getElementById('btnCancelEditProject').addEventListener('click', closeEditProjectForm)
        document.getElementById('btnAddTask').addEventListener('click', showAddTaskForm)
        document.getElementById('btnCancelAddTask').addEventListener('click', closeAddTaskForm)
        document.getElementById('btnCancelEditTask').addEventListener('click', closeEditTaskForm)
    })
}

const createDefaults = function() {
    //if (localStorage.getItem('projectList').length == 1) {
    //    
    //}
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

//const getStorage = function() {
//    projectList = localStorage.getItem('projectList')
//}

export { initialize, createDefaults }