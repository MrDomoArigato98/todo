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

export { Project }