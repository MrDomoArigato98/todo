import "./reset.css";
import "./style.css";
import gitImg from "./assets/git.png"
import { format } from "date-fns"
import { addTodo } from "./displayInput";

const date = new Date();
const stPattysDay = new Date('2020/03/17');

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

class Display {
    showProject(){

    }


}

addTodo.getInput();
// createTodo.resetInput();

// const todo1 = new Todo("todo1", "Nothing here", "00.00.00", "1", "default")
// const todo2 = new Todo("todo2", "Nothing here", "00.00.00", "1", "default")
// const todo3 = new Todo("todo3", "Nothing here", "00.00.00", "1", "default")
// const todo4 = new Todo("todo3", "Nothing here", "00.00.00", "1", "default")
// console.log(todo1)
// todo1.editTitle("New Title")

// const work = new Project("Test")
// work.addTodo(todo1)
// work.addTodo(todo2)

// console.log(work)
// work.deleteTodo(todo1)
// console.log(work)