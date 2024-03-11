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
                            <small> 1+ Years Working </small>
                        </article>

                        <article className="about_card">
                            <VscFolderLibrary className="about__icon" />
                            <h5> Projects </h5>
                            <small> 10+ Completed </small>
                        </article>
                    </div>
                    <p>
                        <br />Skilled Unity Game Developer with a strong passion for creating
                        engaging and educational games. Successfully completed a
                        6-month internship and now thriving as a full-time game developer
                        at Webanix Pvt Ltd for the past 1 year. Skilled in a wide range
                        of game types, including DNA-altering simulations, gene-mutation games, and API-driven quiz games with WebSocket
                        integration. Ready to bring my technical expertise and creativity
                        to your exciting projects.
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
