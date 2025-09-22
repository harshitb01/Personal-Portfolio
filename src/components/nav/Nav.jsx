import React, { useState, useEffect, useRef } from "react";
import "./nav.css";
import ResumePDF from "../../assets/Resume.pdf";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    const navRef = useRef(null);
    const [timeString, setTimeString] = useState("");
    const [isHidden, setIsHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const lastScrollYRef = useRef(0);
    const tickingRef = useRef(false);

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

    useEffect(() => {
        const formatTime = () => {
            const now = new Date();
            const hh = String(now.getHours()).padStart(2, "0");
            const mm = String(now.getMinutes()).padStart(2, "0");
            return `${hh}:${mm}`;
        };
        setTimeString(formatTime());
        const interval = setInterval(() => setTimeString(formatTime()), 1000 * 30);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (!tickingRef.current) {
                window.requestAnimationFrame(() => {
                    const currentY = window.scrollY || window.pageYOffset;
                    const lastY = lastScrollYRef.current;

                    if (currentY > lastY && currentY > 80) {
                        setIsHidden(true);
                    } else {
                        setIsHidden(false);
                    }

                    lastScrollYRef.current = currentY;
                    tickingRef.current = false;
                });
                tickingRef.current = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 900 && menuOpen) setMenuOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [menuOpen]);

    return (
        <nav ref={navRef} className={`top-nav${isHidden ? " hidden" : ""}${menuOpen ? " open" : ""}`}>
            <span className="top-time" aria-label="current time">{timeString}</span>
            <button
                className="menu-toggle"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
            >
                ☰
            </button>
            <div className="top-links">
                <a href="#" onClick={() => { setActiveNav("#"); setMenuOpen(false); }} className={activeNav === "#" ? "active" : ""}>
                    Home
                </a>
                <a
                    href="#about"
                    onClick={() => { setActiveNav("#about"); setMenuOpen(false); }}
                    className={activeNav === "#about" ? "active" : ""}
                >
                    About
                </a>
                <a
                    href="#experience"
                    onClick={() => { setActiveNav("#experience"); setMenuOpen(false); }}
                    className={activeNav === "#experience" ? "active" : ""}
                >
                    Skills
                </a>
                <a
                    href="#services"
                    onClick={() => { setActiveNav("#services"); setMenuOpen(false); }}
                    className={activeNav === "#services" ? "active" : ""}
                >
                    Work
                </a>
                <a href={ResumePDF} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                    Resume
                </a>
                <a
                    href="#contact"
                    onClick={() => { setActiveNav("#contact"); setMenuOpen(false); }}
                    className={activeNav === "#contact" ? "active" : ""}
                >
                    Connect
                </a>
            </div>
        </nav>
    );
};

export default Nav;
