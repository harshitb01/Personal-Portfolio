import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpeg";
import IMG5 from "../../assets/Monster.png";
import IMG6 from "../../assets/swtq.png";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Natural Mutations - A Touchscreen game based on Genetic Algorithm",
        github: "https://github.com/harshitb01",
        demo: "https://jmp.sh/KPvOnTRj",
    },
    {
        id: 2,
        image: IMG6,
        title: "So What's the question? - An API Based Multiplayer Arcade Game",
        github: "https://github.com/harshitb01",
        demo: "https://jmp.sh/Byp9sgPI",
    },
    {
        id: 3,
        image: IMG5,
        title: "Monter Maker - A DNA changing Arduino based Arcade Game",
        github: "https://github.com/harshitb01",
        demo: "https://jmp.sh/Httif8PV",
    },
    {
        id: 4,
        image: IMG4,
        title: "Tic Tac Toe Mobile Game (Using Unity Relay)",
        github: "https://github.com/harshitb01/TicTacToe",
        demo: "https://github.com/harshitb01/TicTacToe/blob/main/TicTacToe%20-%20The%20Game.apk",
    },
    {
        id: 5,
        image: IMG3,
        title: "IGift Life Mobile Game (Using Unity Engine)",
        github: "https://github.com/harshitb01/IGiftLife_Game",
        demo: "https://jmp.sh/L3L4iD2",
    },
    {
        id: 6,
        image: IMG2,
        title: "Ping-Pong Game (Using OpenGL)",
        github: "https://github.com/harshitb01/OpenGL/blob/main/Ping-Pong.c",
        demo: "https://jmp.sh/K3cC4Tm",
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
