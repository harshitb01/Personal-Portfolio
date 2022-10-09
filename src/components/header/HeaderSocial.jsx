import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/harshitbhandari01/" target="_blank">
                <BsLinkedin />
            </a>
            <a href="https://www.instagram.com/harshitb2006/" target="_blank">
                <BsInstagram />
            </a>
            <a href="https://github.com/harshitb01" target="_blank">
                <FaGithub />
            </a>
        </div>
    );
};

export default HeaderSocial;
