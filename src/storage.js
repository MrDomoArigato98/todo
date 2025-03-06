const store = (function (){

    const saveProject = (project) => {
        localStorage.setItem(project.name, JSON.stringify(project));

        let newObject = localStorage.getItem(project.name);
        console.log("after this")
        console.log(JSON.parse(newObject));
    }

    const loadProject = (project) => {

    }

    const deleteTodo = (project, index) => {

    }
    return { saveProject, loadProject }
})();

export { store}