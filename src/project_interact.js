import Project from "./project"
import { returnNewIndex, addToLocalStorage } from "./global_functions"
import { closeAddProjectForm, closeEditProjectForm, clearProjectForm } from "./forms"
import { projectList, currentProject } from "./global_variables"
import { createProjectDOM, setCurrentProject } from "./dom_manipulation"
import { format, parse } from "date-fns";

const addProject = (ev)=> {
    ev.preventDefault();

    let dateString = document.getElementById("projectDueDate").value
    let formattedDate
    if (dateString == "") {
        formattedDate = null
    } else {
        formattedDate = format(parse(dateString, "yyyy-MM-dd", new Date()), "MM/dd/yyyy")
    }

    let project = new Project (
        returnNewIndex(projectList),
        document.getElementById("projectTitle").value,
        formattedDate,
        document.getElementById("projectDescription").value
    )

    projectList.push(project);
    
    //var projectListStorage = {key: "project"};
    //localStorage.object = JSON.stringify(projectListStorage)
    //projectListStorage = JSON.parse(localStorage.object)

    createProjectDOM(project)

    setCurrentProject(project)
    clearProjectForm();
    closeAddProjectForm();
    addToLocalStorage(projectList)
};

const editProject = (ev) => {
    let dateString = document.getElementById("editProjectDueDate").value
    let formattedDate
    if (dateString == "") {
        formattedDate = null
    } else {
        formattedDate = format(parse(dateString, "yyyy-MM-dd", new Date()), "MM/dd/yyyy")
    }

    currentProject.title = document.getElementById("editProjectTitle").value
    currentProject.due_date = formattedDate
    currentProject.description = document.getElementById("editProjectDescription").value

    let projectTitle = document.getElementById("projectTitle" + currentProject.id)
    projectTitle.innerHTML = document.getElementById("editProjectTitle").value

    let titleDisplay = document.getElementById("projectTitleDisplay")
    titleDisplay.innerHTML = document.getElementById("editProjectTitle").value

    let dueDateDisplay = document.getElementById("projectDueDateDisplay")
    dueDateDisplay.innerHTML = "Due Date: " + formattedDate

    let descriptionDisplay = document.getElementById("projectDescriptionDisplay")
    descriptionDisplay.innerHTML = document.getElementById("editProjectDescription").value

    closeEditProjectForm()
    addToLocalStorage(projectList)
};

export { addProject, editProject }