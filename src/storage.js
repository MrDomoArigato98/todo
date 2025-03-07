const store = (function (){

    const saveProject = (project) => {
        localStorage.setItem(project.name, JSON.stringify(project));

        let newObject = localStorage.getItem(project.name);
        console.log("after this")
        console.log(JSON.parse(newObject));
    }

    const loadProjects = () => {
        for (let i = 0; i <= localStorage.length; i++){
            // do something with localStorage.getItem(localStorage.key(i));
            const projectListJSON = [];
            projectListJSON.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            console.log(projectListJSON)
            return(projectListJSON)
        }
    }

    const deleteTodo = (project, index) => {

    }
    return { saveProject, loadProjects }
})();

export { store}