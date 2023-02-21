import React, { useState, useEffect, useRef } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { RiLinksLine } from "react-icons/ri";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    const navRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveNav("#" + entry.target.id);
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px" }
        );

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <nav ref={navRef}>
            <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav("#experience")}
                className={activeNav === "#experience" ? "active" : ""}
            >
                <BiBook />
            </a>
            <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={activeNav === "#services" ? "active" : ""}
            >
                <RiServiceLine />
            </a>
            <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={activeNav === "#portfolio" ? "active" : ""}
            >
                <RiLinksLine />
            </a>
            <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}
            >
                <MdOutlinePermContactCalendar />
            </a>
        </nav>
    );
};

export default Nav;
