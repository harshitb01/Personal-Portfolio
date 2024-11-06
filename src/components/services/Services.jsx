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
                            <p>Led graphic design team for mobile game promoting organ donation.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Designed game assets using Photoshop and implemented in Unity Engine.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Placed game on NGO website portal, planned for Google Play Store.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Developed engaging game to effectively promote NGO's cause.</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Dread Manor</h3>
                        <h3>(Indie Game Launch)</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Conceptualized, designed, and developed an indie horror mobile game using Unity.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Successfully launched on the Google Play Store, receiving positive feedback from players.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Designed intricate puzzle mechanics and atmospheric visuals to enhance player immersion.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Implemented an engaging solo mode with unique environments and challenging escape room elements.</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>WEBaniX Pvt. Ltd.</h3>
                        <h3>(Game Developer)</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Developed educational arcade games for gaming parlour using Unity</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Created a browser game using JavaScript, a Unity-based DNA-changing game, and an API-driven quiz game.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Maintained organized code repositories with Git version control.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Leveraged WebSockets and API's for seamless integration with Arduino in the quiz game.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Services;
