//import project from './project'
//import task from './task'

//Task Module
class Task {
    constructor(id ,title, due_date, description, priority) {
        this.id = id
        this.title = title
        this.due_date = due_date
        this.creation_date = new Date()
        this.description = description
        this.priority = priority
        this.completion = false
    };

    markComplete() {
        this.completion = true
    };

    markIncomplete() {
        this.completion = false
    };

    changePriority(newPriority) {
        this.priority = newPriority;
    };

};

//Project Module
class Project {
    constructor(id ,title, due_date, description ) {
        this.id = id
        this.title = title
        this.due_date = due_date
        this.creation_date = new Date()
        this.description = description
        this.completion = false
        this.tasks = []
    };

    markComplete() {
        this.completion = true
    };

    markIncomplete() {
        this.completion = false
    }

    addTask(task) {
        this.tasks.push(task)
    }

    removeTask(task) {
        for (var i = 0; i < this.tasks.length; i++ ) {
            if ( tasks[i] == task ) {
                this.tasks.splice(i, 1)
            }
        }
    };
    
};

var projectList = [];
var currentProject = 0;

const projectListDOM = document.getElementById('projectsList')
const taskListDOM = document.getElementById('tasksList')

function returnNewIndex(array) {
    if (array.length == 0) {
        return 0;
    } else if (array.length == 1) {
        return 1;
    } else {
        let last = array[array.length - 1];
        let newIndex = last + 1;
        return newIndex;
    }
}

function setCurrentProject(project) {
    currentProject = project

    //highlight correct div
    for (var i = 0; i < projectList.length; i++ ) {
        let projectNodeTemp = document.getElementById("project" + projectList[i].id)
        if (projectList[i].id == project.id) {
            projectNodeTemp.style.border = "thick solid yellow"
        } else {
            projectNodeTemp.style.border = "1px dashed grey"
        }
    }    

    //clear task list
    while (taskListDOM.firstChild) {
        taskListDOM.removeChild(taskListDOM.lastChild);
    }
    
    //show currrent project's details on right hand side
    let projectTitleDisplay = document.getElementById("projectTitleDisplay")
    let projectDescriptionDisplay = document.getElementById("projectDescriptionDisplay")
    projectTitleDisplay.innerHTML = project.title
    projectDescriptionDisplay.innerHTML = project.description

    //show current project's tasks
    for (var i = 0; i < currentProject.tasks.length; i++ ) {
        let taskTitle = document.createElement('p');
        taskTitle.innerHTML = currentProject.tasks[i].title
        taskListDOM.appendChild(taskTitle)
    }
}

const addProject = (ev)=> {
    ev.preventDefault();

    let project = new Project (
        returnNewIndex(projectList),
        document.getElementById('projectTitle').value,
        document.getElementById('projectDueDate').value,
        document.getElementById('projectDescription').value
    )

    projectList.push(project);

    let projectNode = document.createElement('div');
    projectNode.id = "project" + project.id
    projectNode.classList.add('row', 'project')
    projectNode.addEventListener('click', function(){
        setCurrentProject(project);
    }, false);

    let projectTitle = document.createElement('p');
    projectTitle.innerHTML = project.title
    projectNode.appendChild(projectTitle)

    projectListDOM.appendChild(projectNode)
    setCurrentProject(project)
    closeProjectForm();
};

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

    let taskNode = document.createElement('div');
    taskNode.classList.add('task')
    let taskTitle = document.createElement('p');
    taskTitle.innerHTML = task.title
    taskNode.appendChild(taskTitle)
    taskListDOM.appendChild(taskNode)
    closeTaskForm();
};

//Dom Listening js?
function showProjectForm() {
    document.getElementById('projectFormContainer').style.display = 'block';
}

function closeProjectForm() {
    document.getElementById('projectFormContainer').style.display = 'none';
}

function showTaskForm() {
    document.getElementById('taskFormContainer').style.display = 'block';
}

function closeTaskForm() {
    document.getElementById('taskFormContainer').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btnSubmitProject').addEventListener('click', addProject);
    document.getElementById('btnSubmitTask').addEventListener('click', addTask);
    document.getElementById('btnAddProject').addEventListener('click', showProjectForm)
    document.getElementById('btnCancelProject').addEventListener('click', closeProjectForm)
    document.getElementById('btnAddTask').addEventListener('click', showTaskForm)
    document.getElementById('btnCancelTask').addEventListener('click', closeTaskForm)
})