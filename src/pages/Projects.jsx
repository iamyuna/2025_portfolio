import { useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";
import axios from 'axios';

export default function Projects(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getData = async() => {
            try {
                const result = await axios.get('/data/projects.json');
                setProjects(result.data);
            } catch(error) {
                console.error('data load failed:', error);
            }
        };
        getData();
    }, []);

    return (
        <section className="work_section sub_section">
            <div className="content_wrap">
                <div className="title_wrap">
                    <span className="sub_title">My Projects<em>({projects.length})</em></span>
                    <span className="scroll">Scroll Down</span>
                </div>
                <ul className="work_list">
                    {projects.map((project) => (
                        <ProjectList key={project.id} project={project}/>
                    ))}
                </ul>
            </div>
        </section>
    );
}