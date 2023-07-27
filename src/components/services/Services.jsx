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
                        <h3>Freelancing</h3>
                        <h3>(Graphic Designer)</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Designed logos for Prope Network, Nearbii App, and Cafe Code Brew.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Iterated designs based on feedback to ensure client satisfaction.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Created scalable logos using Adobe Photoshop for marketing collateral.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Provided clients with editable logo files for future modifications.</p>
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
