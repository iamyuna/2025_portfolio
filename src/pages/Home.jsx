import { NavLink } from "react-router-dom";

export default function Home(){

    return (
        <section className="main_section">
            <div className="content_wrap">
                <div className="main_title_wrap">
                    <strong className="main_title">
                        Bridging Design 
                        and Development
                    </strong>
                    <p className="mini_title">
                        Between design and development,<br/>
                        I focus on balance — clarity and flow,<br/>
                        crafting calm yet engaging web experiences.
                    </p>
                </div>
                <div className="category_wrap">
                    <div className="category about">
                        <NavLink to="/about">
                            <div className="img">
                                <img src="/images/main_about_thumb.jpg" alt="소개 썸네일" />
                            </div>
                            <div className="hover_text"><p>ABOUT</p></div>
                        </NavLink>        
                    </div>
                    <div className="category projects">
                        <NavLink to="/projects">
                            <div className="img">
                                <img src="/images/main_projects_thumb.jpg" alt="프로젝트 썸네일" />
                            </div>
                            <div className="hover_text"><p>PROJECTS</p></div>
                        </NavLink>           
                    </div>
                    <div className="category contact">
                        <NavLink to="/contact">
                            <div className="img">
                                <img src="/images/main_contact_thumb.jpg" alt="연락처 썸네일" />
                            </div>
                            <div className="hover_text"><p>CONTACT</p></div>
                        </NavLink>        
                    </div>
                </div>
            </div>
        </section>
    );
}