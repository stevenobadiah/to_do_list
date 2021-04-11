//import project from './project'
//import task from './task'

//Task Module
class task {
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
class project {
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
const projectListDOM = document.getElementById('projects')

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

const addProject = (ev)=> {
    ev.preventDefault();

    let project = new Project (
        returnNewIndex(projectList),
        document.getElementById('title').value,
        document.getElementById('dueDate').value,
        document.getElementById('description').value
    )

    projectList.push(project);

    let projectNode = document.createElement('div');
    let projectTitle = document.createElement('p');
    projectTitle.innerHTML = project.title
    projectNode.appendChild(projectTitle)
    projectListDOM.appendChild(projectNode)

};

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btnSubmitProject').addEventListener('click', addProject);
})