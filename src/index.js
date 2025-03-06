import "./reset.css";
import "./style.css";
import gitImg from "./assets/git.png"
import { format } from "date-fns"
import { Todo } from "./todo";
import { addTodo } from "./addTodo";
import { Project } from "./projects";

const date = new Date();
const stPattysDay = new Date('2020/03/17');

const displayNavigation = (function () {
    const defaultProject = new Project("default");
    const workProject = new Project("work");
    const projectsListElement = document.getElementById("projects-list");

    console.log(projectsListElement);

    const projectsList = [] // This will contain the list of Project objects. Each Project object has a list of todo objects inside of it
    projectsList.push(defaultProject)
    projectsList.push(workProject)

    const displayProjects = (projectsList) => {
        projectsList.forEach(project => {
            const listItem = document.createElement("li")
            const link = document.createElement("button")

            listItem.setAttribute("id", project.name)
            link.textContent = "# " + project.name;
            listItem.appendChild(link)

            projectsListElement.appendChild(listItem)
        })
    }

    const displayTodos = (project) => {
        //This should take in a project object, loop over the todos and create each of the elements
    }

    const switchProject = () => {
        //This should swap out what the current project is on the page and display its todos
    }

    const todoButtons = () => {
        const div = document.querySelector('.todos-display')
        console.log(div)
        div.addEventListener("click", (event) => {
            if (event.target.tagName === 'BUTTON') {
                console.log(event.target)
            }
        })
    }

    const projectButtons = () => {
        const div = document.querySelector('.left-nav')
        console.log(div)
        div.addEventListener("click", (event) => {
            if (event.target.tagName === 'BUTTON') {
                console.log("clicking" + event.target.textContent)
            }
        })
    }

    displayProjects(projectsList);
    projectButtons();
    todoButtons();
})();


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