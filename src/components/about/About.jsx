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
                        <br />Unity Game Developer skilled in gameplay programming,
                        mobile optimization, and multiplayer systems. Currently leading
                        the game development team at Webanix, delivering client
                        projects and original prototypes using Unity, JS and Monogame.
                        Successfully launched Dread Manor on the Play Store and
                        achieved a top 250 global ranking in Brackeys GameJam 2025
                        out of 2300 entries. Proficient in C#, Blender, and AI Integration,
                        with a strong focus on performance, visuals, and player
                        experience.
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
