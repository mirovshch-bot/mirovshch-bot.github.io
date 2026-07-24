import { ProjectCard } from '../../../entities/project'
import { getProjectByName } from '../model/projects'

const ProjectList = (props) => {
    const {
        styles
    } = props

    const projectNames = [
        'todo', 
        'learnlogicify', 
        'winzee', 
        'chatGPT', 
        'gemini'
    ]

    return (
        <div className={styles.grid}>
            {projectNames.map((name) => {
                const project = getProjectByName(name)
                return (
                    <ProjectCard
                        title={project.title}
                        image={project.image}
                        onClick={() => {console.log("click")}}
                        key={name}
                        styles={styles}
                    /> 
                )
            })}
        </div>
    )
}

export default ProjectList