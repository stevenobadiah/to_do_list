import Project from './project'
import { returnNewIndex } from './global_functions'
import { closeAddProjectForm, closeEditProjectForm, clearProjectForm } from './forms'
import { projectList, currentProject } from './global_variables'
import { createProjectDOM, setCurrentProject } from './dom_manipulation'

const addProject = (ev)=> {
    ev.preventDefault();

    let project = new Project (
        returnNewIndex(projectList),
        document.getElementById('projectTitle').value,
        document.getElementById('projectDueDate').value,
        document.getElementById('projectDescription').value
    )

    projectList.push(project);
    
    //var projectListStorage = {key: "project"};
    //localStorage.object = JSON.stringify(projectListStorage)
    //projectListStorage = JSON.parse(localStorage.object)

    createProjectDOM(project)

    setCurrentProject(project)
    clearProjectForm();
    closeAddProjectForm();
};

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

export { addProject, editProject }