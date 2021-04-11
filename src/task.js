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

export default Task

/*
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
*/