class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    editTitle(title) {
        todoLogger(this.title, title)
        this.title = title;
    }

    editDescription(description) {
        todoLogger(this.description, description)
        this.description = description;
    }

    editDueDate(dueDate) {
        todoLogger(this.dueDate, dueDate)
        this.dueDate = dueDate;
    }

    editPriority(priority) {
        todoLogger(this.priority, priority)
        this.priority = priority;
    }
}

function todoLogger(old, _new) {
    console.log("Old value: " + old + ", set to new value: " + _new)

}

export { Todo }