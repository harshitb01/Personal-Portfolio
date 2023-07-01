import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
    return (
        <section id="experience">
            <h5>What skill I Have</h5>
            <h2>My Skills</h2>
            <div className="container experience__container">
                <div className="experience__language">
                    <h3>Languages Known</h3>
                    <div className="experinece__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Java</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__tools">
                    <h3>Tools Known</h3>
                    <div className="experinece__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Blender</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Unity Engine</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Adobe Photoshop</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Adobe Premier</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Orange</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>GitHub</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Postman</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Microsoft Excel</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
