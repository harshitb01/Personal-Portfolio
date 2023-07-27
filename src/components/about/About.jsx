import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
        <section id="about">
            <h5 className="h5"> Get To Know </h5>
            <h2 className="h2"> About Me </h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FiUsers className="about__icon" />
                            <h5> Clients </h5>
                            <small> 3+ Worldwide </small>
                        </article>

                        <article className="about_card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small> 6 Months Working </small>
                        </article>

                        <article className="about_card">
                            <VscFolderLibrary className="about__icon" />
                            <h5> Projects </h5>
                            <small> 10+ Completed </small>
                        </article>
                    </div>
                    <p>
                        <br />Motivated BCA fresher with a keen interest in game development
                        and a successful 6-month internship experience. Proficient in
                        Unity Engine, C#, and game design, I have created engaging
                        educational arcade games during my internship. My portfolio
                        showcases a browser game using JavaScript, a Unity-based DNA-changing game, and an API-driven quiz game with WebSockets
                        integration. Eager to contribute my technical skills and creativity
                        to a challenging role in game development.
                    </p>
                    <br />
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};
export default About;
