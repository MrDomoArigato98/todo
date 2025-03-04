import "./reset.css";
import "./style.css";
import gitImg from "./assets/git.png"
import {format} from "date-fns"

console.log("Hello webpack");

const date = new Date();

class Todo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project
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

    editProject(project) {
        todoLogger(this.project, project)
        this.project = project;
    }
}

function todoLogger(old, _new) {
    console.log("Old value: " + old + ", set to new value: " + _new)

}

class Display {

}

const todo1 = new Todo("MyTitle", "Nothing here", "00.00.00", "1", "default")

console.log(todo1)

todo1.editTitle("New Title")