import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/NM.jpeg";
import IMG2 from "../../assets/Crispr.jpeg";
import IMG3 from "../../assets/cover2.png";
import IMG4 from "../../assets/Balancing.jpeg";
import IMG5 from "../../assets/Monster.jpeg";
import IMG6 from "../../assets/SWTQ.jpeg";

const data = [
    {
        id: 1,
        image: IMG4,
        title: "The Balancing Game - Server based 5 player touchscreen game on saving environment (Using MonoGame)",
        github: "https://jmp.sh/WOGr0K2A",
        demo: "https://jmp.sh/jAHatXIs",
    },
    {
        id: 2,
        image: IMG6,
        title: "So What's the question? - An API based multiplayer arcade game (Using Unity)",
        github: "https://jmp.sh/Byp9sgPI",
        demo: "https://jmp.sh/kY3p8ya5",
    },
    {
        id: 3,
        image: IMG5,
        title: "Monter Maker - A DNA changing arduino based arcade game (Using Unity)",
        github: "https://jmp.sh/Httif8PV",
        demo: "https://jmp.sh/bsGrjMIB",
    },
    {
        id: 4,
        image: IMG1,
        title: "Natural Mutations - A touchscreen game based on genetic algorithm (Using Unity)",
        github: "https://jmp.sh/KPvOnTRj",
        demo: "https://jmp.sh/rez6uH1f",
    },
    {
        id: 5,
        image: IMG3,
        title: "Brackeys Game Jam 2025.2 — You Cannot Go Back!",
        github: "https://itch.io/jam/brackeys-14/rate/3849706",
        demo: "https://tihan.itch.io/you-cannot-go-back",
    },
    {
        id: 6,
        image: IMG2,
        title: "Crispr - A dual screen arduino based game (Using MonoGame)",
        github: "https://jmp.sh/oLCl3vmt",
        demo: "https://jmp.sh/gqN0CJZ4",
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
                                    Demo
                                </a>
                                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                                    Live Demo
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
