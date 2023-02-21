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
                            <FaAward className="about__icon" />
                            <h5> Experience </h5>
                            <small> 4 Months Working </small>
                        </article>

                        <article className="about_card">
                            <FiUsers className="about__icon" />
                            <h5> Clients </h5>
                            <small> 3+ Worldwide </small>
                        </article>

                        <article className="about_card">
                            <VscFolderLibrary className="about__icon" />
                            <h5> Projects </h5>
                            <small> 10+ Completed </small>
                        </article>
                    </div>
                    <p>
                        <br />A highly ambitious and self-motivated BCA fresher with a focus on game development, I
                        am excited to apply my technical skills for improve of your Company. With a graduation from
                        Symbiosis University, I have honed my web development, graphic design, and game design
                        skills. Additionally, I am currently exploring the exciting world of AI and digital art
                        different models like stable diffusion. In fact, I have been selling my digital art on Adobe
                        Stocks! <br />
                        With my passion for game development and my diverse skillset, I am confident that I can
                        bring a fresh perspective to your company.
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
