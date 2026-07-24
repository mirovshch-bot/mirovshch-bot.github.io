import { ProjectCard } from '../../../entities/project'
import { getProjectByName } from '../model/projects'

export const projectNames = [
    'todo', 
    'learnlogicify', 
    'winzee', 
    'chatGPT', 
    'gemini'
]

const ProjectList = (props) => {
    const {
        styles,
        showAllProjects
    } = props

    return (
        <div className={styles.grid}>
            {projectNames.map((name, index) => {
                const project = getProjectByName(name)

                const isHidden = index >= 4 && !showAllProjects

                return (
                    <ProjectCard
                        title={project.title}
                        image={project.image}
                        onClick={() => {console.log("click")}}
                        key={name}
                        styles={styles}
                        isHidden={isHidden}
                    /> 
                )
            })}
        </div>
    )
}

export default ProjectList