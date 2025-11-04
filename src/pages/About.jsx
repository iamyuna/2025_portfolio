import { useEffect, useState } from "react";
import axios from 'axios';

export default function About(){
    const [aboutData, setAboutData] = useState({career: [], skills: []});

    useEffect(() => {
        const getData = async() => {
            try {
                const result = await axios.get('/data/about.json');
                setAboutData(result.data);
            } catch(error) {
                console.error('data load failed:', error);
            }
        };
        getData();
    }, []);

    return (
        <section className="about_section sub_section">
            <div className="content_wrap">
                <div className="title_wrap">
                    <span className="sub_title">My Career <p className="period">*총 3년 5개월</p></span>
                    <span className="scroll">Scroll Down</span>
                </div>
                <div className="content career_wrap">
                    <ul className="career_list">
                        {aboutData.career?.map((career, id) => {
                            return(
                                <li key={id}>
                                    <strong>* {career.company} <em>({career.period})</em></strong>
                                    <p>경력: {career.duration}</p>
                                    <p>직책: {career.position}</p>
                                    <p>업무: {career.work}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="content_wrap">
                <div className="title_wrap">
                    <span className="sub_title">My Skills</span>
                </div>
                <ul className="content skills_wrap">
                    {aboutData.skills?.map((skill, id) => {
                        return(
                            <li key={id}>
                                <div className="icon">
                                    <img src={skill.icon} alt={skill.name} />
                                </div>
                                <p>{skill.name}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}