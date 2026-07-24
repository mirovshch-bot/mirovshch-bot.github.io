import Project1 from '../../../shared/assets/images/Project1.png'
import Project2 from '../../../shared/assets/images/Project2.png'
import Project3 from '../../../shared/assets/images/Project3.png'
import Project4 from '../../../shared/assets/images/Project4.png'
import ProjectTodo from '../../../shared/assets/images/ProjectTodo.png'

export const PROJECTS = {
  learnlogicify: {
    id: 1,
    title: "Learnlogicify Landing Page",
    image: Project1
  },
  winzee: {
    id: 2,
    title: "Winzee Web Chat application",
    image: Project2
  },
  chatGPT: {
    id: 3,
    title: "ChatGPT clone",
    image: Project3
  },
  gemini: {
    id: 4,
    title: "Gemini Clone",
    image: Project4
  },
  todo: {
    id: 5,
    title: "Todo List",
    image: ProjectTodo
  }
}

export const PROJECTS_LIST = Object.values(PROJECTS)

export const getProjectByName = (name) => PROJECTS[name]