import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">
                HARSHIT'S PORTFOLIO
            </a>
            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#topShowcase">Top ShowCase</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#experience">Skills</a>
                </li>
                <li>
                    <a href="#services">Work Experience</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/harshitbhandari01/">
                    <BsLinkedin />
                </a>
                <a href="https://www.instagram.com/harshitb2006/">
                    <FiInstagram />
                </a>
                <a href="https://twitter.com/Harshit04411820">
                    <IoLogoTwitter />
                </a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Harshit Bhandari . All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
