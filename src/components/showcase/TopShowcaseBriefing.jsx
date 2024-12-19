import React, { useEffect, useRef } from "react";
import "./TopShowcaseBriefing.css";
// import IMG1 from "../../assets/portfolio2.jpg";

const data = [
    {
        id: 1,
        // image: IMG1,
        videoId: "yll23kGq8To",
        title: "Portal System for Map Transitions",
        points: [
            "Implemented a seamless portal system to load and unload assets dynamically between maps (Hospital, Dungeon, and Manor).",
            "Optimized memory usage by unloading unused assets, ensuring smooth transitions and performance."
        ],
    },
    {
        id: 2,
        // image: IMG1,
        videoId: "HAQyYoTiLC4",
        title: "Object Examination and Inventory System",
        points: [
            "Built an Object Examination mode allowing players to rotate and inspect items using an alternate camera.",
            "Integrated with an Inventory System for players to store and use collected items for puzzles."
        ],
    },
    {
        id: 3,
        // image: IMG1,
        videoId: "5nc1oijEMHQ",
        title: "Light-Spider AI",
        points: [
            "Created a light-dependent spider monster that calculates the player’s distance from light sources.",
            "If the player moves too far from light, the spider attacks, encouraging strategic navigation."
        ],
    },
    {
        id: 4,
        // image: IMG1,
        videoId: "q6GrqisBYFE",
        title: "Mannequin Monster AI",
        points: [
            "Developed an AI system where mannequin monsters attack when the player loses eye contact with them.",
            "Combined raycasting and player direction tracking to implement this mechanic, creating suspenseful encounters."
        ],
    },
    {
        id: 5,
        // image: IMG1,
        videoId: "puEnh53Dveo",
        title: "Teleporting Mini-Puzzle",
        points: [
            "Designed a puzzle where players must find the correct path through better understanding of wires teleporters.",
            "Path resets dynamically if the player chooses the wrong teleport, adding complexity to the challenge."
        ],
    },
    {
        id: 6,
        // image: IMG1,
        videoId: "wMy5t4Vb16w",
        title: "Laser Puzzle with Object Pooling",
        points: [
            "Implemented a laser maze puzzle using object pooling to spawn and deactivate lasers efficiently.",
            "Players solve the puzzle by navigating through the maze while avoiding or disabling lasers."
        ],
    }
];

const TopShowcaseBriefing = () => {
    const videoRefs = useRef([]);

    useEffect(() => {
        const options = {
            threshold: 0.5, // Trigger when 50% of the video is in view
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const iframe = entry.target;
                const videoSrc = iframe.getAttribute("src");

                iframe.setAttribute("src", videoSrc);

                // if (entry.isIntersecting) {
                //     // Add autoplay parameter to URL
                //     iframe.setAttribute("src", `${videoSrc}&autoplay=1`);
                // } else {
                //     // Remove autoplay parameter to stop the video
                //     iframe.setAttribute("src", videoSrc.replace("&autoplay=1", ""));
                // }
            });
        }, options);

        videoRefs.current.forEach((ref) => {
            observer.observe(ref);
        });

        return () => {
            // Clean up observer on component unmount
            videoRefs.current.forEach((ref) => {
                observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section id="topShowcase">
            <h5>Dread Manor</h5>
            <h2>Mechanics Made</h2>
            <div className="container showcaseBriefing__container">
                {data.map(({ id, videoId, title, points }, index) => (
                    <article key={id} className="showcaseBriefing__item">
                        <h3>{title}</h3>
                        <div className="showcaseBriefing__item-image">
                            <iframe
                                ref={(el) => (videoRefs.current[index] = el)}
                                title={title}
                                src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&mute=1&showinfo=0&rel=0&modestbranding=1&controls=1`}
                                // frameBorder="0"
                                // allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                        {/* <div className="portfolio__item-image ">
                            <img src={image} alt={title} />
                        </div> */}
                        {/* <h3>{title}</h3> */}
                        <ul className="showcaseBriefing__points">
                            {points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default TopShowcaseBriefing;
