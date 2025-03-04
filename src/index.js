import "./reset.css";
import "./style.css";
import gitImg from "./assets/git.png"
import { format } from "date-fns"

const date = new Date();

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

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];

    }
    addTodo(todo) {
        this.todos.push(todo)
    }

    deleteTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1)
    }
}

class DisplayTodo {

}

class DisplayProject {

}

const todo1 = new Todo("todo1", "Nothing here", "00.00.00", "1", "default")
const todo2 = new Todo("todo2", "Nothing here", "00.00.00", "1", "default")
const todo3 = new Todo("todo3", "Nothing here", "00.00.00", "1", "default")
const todo4 = new Todo("todo3", "Nothing here", "00.00.00", "1", "default")
console.log(todo1)
todo1.editTitle("New Title")

const work = new Project("Test")
work.addTodo(todo1)
work.addTodo(todo2)

console.log(work)
work.deleteTodo(todo1)
console.log(work)