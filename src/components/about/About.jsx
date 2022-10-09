import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
        <section id="about">
            <h5 h5> Get To Know </h5>
            <h2 h2> About Me </h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about__icon" />
                            <h5> Experience </h5>
                            <small> 0 Year Working </small>
                        </article>

                        <article className="about_card">
                            <FiUsers className="about__icon" />
                            <h5> Clients </h5>
                            <small> 1+ Worldwide </small>
                        </article>

                        <article className="about_card">
                            <VscFolderLibrary className="about__icon" />
                            <h5> Projects </h5>
                            <small> 10+ Completed </small>
                        </article>
                    </div>
                    <p>
                        <br />
                        Ambitious and self-esteemed BCA fresher who is capable of applying technical skills for the
                        improvement of the company. Improved my web development, Graphic and Game designing skills
                        with the help of graduation in Symbiosis University and looking forward to work in a
                        competitive environment that can boost my overall learning.
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
