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

export default Project