import { currentProject } from './global_variables'

function closeAddProjectForm() {
    document.getElementById('addProjectFormContainer').style.display = 'none';
}

function closeEditProjectForm() {
    document.getElementById('editProjectFormContainer').style.display = 'none';
}

function closeAddTaskForm() {
    document.getElementById('addTaskFormContainer').style.display = 'none';
}

function closeEditTaskForm() {
    document.getElementById('editTaskFormContainer').style.display = 'none';
}

function closeAllForms() {
    document.getElementById('addProjectFormContainer').style.display = 'none';
    document.getElementById('editProjectFormContainer').style.display = 'none';
    document.getElementById('addTaskFormContainer').style.display = 'none';
    document.getElementById('editTaskFormContainer').style.display = 'none';
}

function showAddProjectForm() {
    closeAllForms()
    document.getElementById('addProjectFormContainer').style.display = 'block';
}

function showEditProjectForm() {
    closeAllForms()
    document.getElementById('editProjectFormContainer').style.display = 'block';
}

function showAddTaskForm() {
    closeAllForms()
    if (currentProject == null) {
        alert('Please create or select a project, first')
    } else {
        document.getElementById('addTaskFormContainer').style.display = 'block';
    }
}

function showEditTaskForm() {
    closeAllForms()
    document.getElementById('editTaskFormContainer').style.display = 'block';
}

function clearProjectForm() {
    document.getElementById('projectTitle').value = ""
    document.getElementById('projectDueDate').value = ""
    document.getElementById('projectDescription').value = ""
}

function clearTaskForm() {
    document.getElementById('taskTitle').value = ""
    document.getElementById('taskDueDate').value = ""
    document.getElementById('taskDescription').value = ""
    document.getElementById('taskPriority').value = ""
}


document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btnAddProject').addEventListener('click', showAddProjectForm)
    document.getElementById('btnCancelAddProject').addEventListener('click', closeAddProjectForm)
    document.getElementById('btnCancelEditProject').addEventListener('click', closeEditProjectForm)
    document.getElementById('btnAddTask').addEventListener('click', showAddTaskForm)
    document.getElementById('btnCancelAddTask').addEventListener('click', closeAddTaskForm)
    document.getElementById('btnCancelEditTask').addEventListener('click', closeEditTaskForm)
})

export { closeAddProjectForm, closeEditProjectForm, closeAddTaskForm, closeEditTaskForm, showEditProjectForm, showEditTaskForm, clearProjectForm, clearTaskForm }