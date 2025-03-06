import "./reset.css";
import "./style.css";
import gitImg from "./assets/git.png"
import { format } from "date-fns"
import { Todo, createTodo } from "./todo";
import { Project } from "./projects";

const date = new Date();
const stPattysDay = new Date('2020/03/17');

const displayNavigation = (function () {
    const addTodoDiv = document.getElementById("add-todo");
    const addTodoButtons = addTodoDiv.querySelectorAll("button");
    const workProject = new Project("work");

    const defaultProject = new Project("default");
    let currentProject = defaultProject;


    const projectsListElement = document.getElementById("projects-list");

    console.log(projectsListElement);

    const projectsList = [] // This will contain the list of Project objects. Each Project object has a list of todo objects inside of it
    projectsList.push(defaultProject)
    projectsList.push(workProject)
    console.log(projectsList)

    const displayProjects = (projectsList) => {
        projectsList.forEach(project => {
            const listItem = document.createElement("li")
            const button = document.createElement("button")

            button.setAttribute("id", project.name)
            button.textContent = "# " + project.name;
            listItem.appendChild(button)

            projectsListElement.appendChild(listItem)
        })
    }

    const displayTodos = (project) => {
        //This should take in a project object, loop over the todos and create each of the elements
        const template = document.querySelector("#todo-template")
        const parent = document.querySelector(".todos-display")
        while (parent.firstChild) {
            parent.firstChild.remove();
        }
        project.todos.forEach((todo, index) => {
            const clone = template.content.cloneNode(true);
            clone.querySelector('.todo-title').textContent = todo.title;
            clone.querySelector('.due-date').textContent = todo.dueDate;
            clone.querySelector('.todo').setAttribute(project.name, index)
            parent.appendChild(clone)
        })
    }

    const switchProject = (project) => {
        //This should swap out what the current project is on the page and display its todos
        currentProject = project;
        const title = document.getElementById("project");
        title.textContent = project.name;
        console.log(project)
    }

    // Buttons on each of the specific todo items. Uses event delegation
    const todoButtons = () => {
        const div = document.querySelector('.todos-display')
        console.log(div)
        div.addEventListener("click", (event) => {
            if (event.target.tagName === 'BUTTON') {
                console.log(event.target.classList)
                if (event.target.classList.contains("delete-todo")) {
                    const todo = event.target.closest(".todo")
                    let index = todo.getAttribute(currentProject.name)
                    currentProject.deleteTodo(index)
                    event.target.closest(".todo").remove();
                }
            }
        })
    }
    //These are the buttons on the "Got More todo?" card
    addTodoButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (button.id == 'cancel-btn') {
                console.log("cancel")
                resetInput()

            }

            if (button.id == 'add-btn') {
                getInput();
                displayTodos(currentProject)
            }

        })
    })

    const projectButtons = () => {
        const div = document.querySelector('.left-nav')
        console.log(div)
        div.addEventListener("click", (event) => {
            if (event.target.tagName === 'BUTTON') {
                console.log("clicking ID: " + event.target.id)

                const project = projectsList.find((proj) => proj.name == event.target.id)
                console.log(project)
                if (project) {
                    switchProject(project)
                    displayTodos(project)
                }
            }
        })
    }
    const getInput = () => {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const dueDate = document.getElementById("due-date").value;
        const priority = document.getElementById("priority-select").value

        if (title && dueDate && priority) {
            console.log(title, description, dueDate, priority)
            const a = createTodo(title, description, dueDate, priority)
            currentProject.push(a)
            console.log(currentProject)
        }
    }

    const resetInput = () => {
        document.getElementById("title").value = ""
        document.getElementById("description").value = ""
        document.getElementById("due-date").value = ""
        document.getElementById("priority-select").value = ""
    }

    displayProjects(projectsList);
    switchProject(currentProject);
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
// work.appendTodo(todo1)
// work.appendTodo(todo2)

// console.log(work)
// work.deleteTodo(todo1)
// console.log(work)