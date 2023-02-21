import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Work Experience</h2>
            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>IGiftLife NGO</h3>
                        <h3>(Graphic/Game Designer)</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Worked as the Head of Graphic Team (Responsible for Game Designing)</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Helped in spreading awareness about organ donation by creating a Mobile Game</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Created Assets of the game to accomplish the goal by using Unity Engine</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>
                                Successful in getting the game placed on the NGO website portal and on play store in
                                future
                            </p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Prope Network & Cafe Code Brew</h3>
                        <h3>(Freelancing)</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Worked as a freelance Graphic Designer</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Designed Few logos for The Prope Network and The Nearbii App</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>
                                Provide them with editable files so that they may make modifications in the future.
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Made Logos with the help of Adobe Photoshop</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>WEBaniX Pvt. Ltd.</h3>
                        <h3>(Front-End/Game Developer)</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Developed My Portfolio Website Using React</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Successfully Uploaded it to cloud</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Created separate Components for each Section of the website</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>
                                Made Sure that the code was arranged such that anybody could understand it with
                                ease.
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>
                                It was Designed responsive in order to be easily accessible on Mobile, tablets and
                                laptops.
                            </p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Services;
