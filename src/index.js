import { initialize, createDefaults, showStoredProjects } from "./initialize"
import { projectList } from "./global_variables"
import { getFromLocalStorage, addToLocalStorage } from "./global_functions"
import { setCurrentProject } from "./dom_manipulation"

initialize()

const storedProjects = getFromLocalStorage()
localStorage.clear()
projectList = []

if (storedProjects) {
    showStoredProjects(storedProjects)
    addToLocalStorage(projectList)
    setCurrentProject(projectList[0])
} else {
    createDefaults()
}