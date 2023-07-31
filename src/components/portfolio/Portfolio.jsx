import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/Monster.png";
import IMG6 from "../../assets/swtq.png";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Theme based Shopping Website (Hogwarts Hub)",
        github: "https://github.com/harshitb01/Hogwarts/tree/main/Hogwarts_land",
        demo: "https://jmp.sh/Q9iMB2X",
    },
    {
        id: 2,
        image: IMG2,
        title: "Ping-Pong Game (Using OpenGL)",
        github: "https://github.com/harshitb01/OpenGL/blob/main/Ping-Pong.c",
        demo: "https://jmp.sh/K3cC4Tm",
    },
    {
        id: 3,
        image: IMG3,
        title: "IGift Life Mobile Game (Using Unity Engine)",
        github: "https://github.com/harshitb01/IGiftLife_Game",
        demo: "https://jmp.sh/L3L4iD2",
    },
    {
        id: 4,
        image: IMG4,
        title: "Shooter mini games using UPBGE",
        github: "https://github.com/harshitb01/Blender",
        demo: "https://jmp.sh/TwqH14C0",
    },
    {
        id: 5,
        image: IMG5,
        title: "Monter Maker - A DNA changing Arcade Game",
        github: "https://github.com/harshitb01",
        demo: "https://jmp.sh/Httif8PV",
    },
    {
        id: 6,
        image: IMG6,
        title: "So What's the question? - An API Based Arcade Game",
        github: "https://github.com/harshitb01",
        demo: "https://jmp.sh/nGu91V6Z",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Projects</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image ">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn" target="_blank" rel="noreferrer">
                                    Github
                                </a>
                                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                                    Demo / Documentation
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
