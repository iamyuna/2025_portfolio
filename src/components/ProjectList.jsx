export default function ProjectList({project}){

    return (
        <li>
            <a href={project.link} target="_blank">
                <div className="img_wrap">
                    <div className="img">
                        <img src={project.image} alt={project.title} />
                        <span className="hover_text"><p>VIEW SITE</p></span>
                    </div>
                </div>
                <div className="text_wrap">
                    <strong className="title">{project.title}</strong>
                    <p className="des">{project.description}</p>
                    <ul className="skill_list">
                        {project.skills?.map((skill) => (
                            <li key={skill} className={skill}>#{skill}</li>
                        ))}
                    </ul>
                </div>
            </a>
        </li>
    );
}