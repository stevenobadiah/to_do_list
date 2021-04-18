import { currentProject, currentTask } from './global_variables'
import { format, parse } from 'date-fns';

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

function openEditProjectForm(project) {
    showEditProjectForm()
    document.getElementById('editProjectTitle').value = project.title
    document.getElementById('editProjectDueDate').value = project.due_date
    document.getElementById('editProjectDescription').value = project.description
    currentProject = project
}

function openEditTaskForm(task) {
    showEditTaskForm()

    let dateString = task.due_date
    let formattedDate
    if (dateString == null) {
        formattedDate = null
    } else {
        formattedDate = format(parse(dateString, "MM/dd/yyyy", new Date()), "yyyy-MM-dd")
    }

    document.getElementById('editTaskFormContainer').style.display = 'block';
    document.getElementById('editTaskTitle').value = task.title
    document.getElementById('editTaskDueDate').value = formattedDate
    document.getElementById('editTaskDescription').value = task.description
    document.getElementById('editTaskPriority').value = task.priority
    currentTask = task;
}

export { closeAddProjectForm, closeEditProjectForm, closeAddTaskForm, closeEditTaskForm, showAddProjectForm, showAddTaskForm, showEditProjectForm, showEditTaskForm, clearProjectForm, clearTaskForm, openEditProjectForm, openEditTaskForm }