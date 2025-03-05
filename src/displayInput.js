import { Todo } from "../todo";

const addTodo = (function () {
    const addTodoDiv = document.getElementById("add-todo");
    const todoButtons = addTodoDiv.querySelectorAll("button")


    const getInput = () => {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const dueDate = document.getElementById("due-date").value;
        const prioButton = document.getElementById("priority-btn");

        let priority;
        if (isPriority(prioButton)) {
            priority = "Priority!"
        } else {
            priority = 'Not that important'
        }
        console.log(title, description, dueDate, priority)
        createTodo(title, description, dueDate, priority)
    }

    const resetInput = () => {
        document.getElementById("title").value = ""
        document.getElementById("description").value = ""
        document.getElementById("due-date").value = ""
    }

    const isPriority = (button) => {
        if (button.classList.contains("priority-active")) {
            return true
        } else {
            return false
        }
    }

    const createTodo = (title, description, dueDate, priority) => {
        const todo = new Todo(title, description, dueDate, priority)
        console.log(todo)
    }
    todoButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (button.id == 'priority-btn') {
                button.classList.toggle("priority-active")
            }

            if (button.id == 'cancel-btn') {
                console.log("cancel")
                resetInput()

            }

            if (button.id == 'add-btn') {
                getInput();
            }

        })
    })

    return { getInput, resetInput }

})();

export { addTodo };