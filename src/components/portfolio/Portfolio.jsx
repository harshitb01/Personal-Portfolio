import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

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
        title: "Registration Form Using Django",
        github: "https://github.com/harshitb01/Djanjo_project",
        demo: "https://jmp.sh/uhEPJp5",
    },
    {
        id: 5,
        image: IMG5,
        title: "Instagram Clone Using HTML and CSS",
        github: "https://github.com/harshitb01/InstagramClone",
        demo: "https://jmp.sh/dyWbRSx",
    },
    {
        id: 6,
        image: IMG6,
        title: "Weather App Using JavaScript API",
        github: "https://github.com/harshitb01/Weather-App",
        demo: "https://youtu.be/DPN2_32XsnU",
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
