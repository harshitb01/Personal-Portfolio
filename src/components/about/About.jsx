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
                            <small> 5+ Worldwide </small>
                        </article>

                        <article className="about_card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small> 2+ Years Working </small>
                        </article>

                        <article className="about_card">
                            <VscFolderLibrary className="about__icon" />
                            <h5> Projects </h5>
                            <small> 10+ Completed </small>
                        </article>
                    </div>
                    <p>
                        <br />Experienced Unity Game Developer with a successful launch of 
                        an indie mobile horror game on the Play Store. Working full-time at Webanix Pvt Ltd, 
                        specializing in diverse game genres like DNA-altering simulations, 
                        gene-mutation games, and API-driven quiz games with WebSocket integration. 
                        Eager to bring creativity and technical depth to impactful projects at leading gaming studios.
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
