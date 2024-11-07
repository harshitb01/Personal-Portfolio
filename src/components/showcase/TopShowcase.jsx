import React, { useEffect, useRef } from "react";
import "./TopShowcase.css";

const data = [
    {
        id: 1,
        // image: IMG1,
        videoId: "XOcYilxLvxk",
        title: "Dread Manor - Unity based horror puzzle solving mobile game!",
        playstore: "https://play.google.com/store/apps/details?id=com.LumosRelicGames.DreadManor&pcampaignid=web_share",
        demo: "https://jmp.sh/3pIiKvkM",
    },
];

const TopShowcase = () => {
    const videoRefs = useRef([]);

    useEffect(() => {
        const options = {
            threshold: 0.5, // Trigger when 50% of the video is in view
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const iframe = entry.target;
                const videoSrc = iframe.getAttribute("src");

                if (entry.isIntersecting) {
                    // Add autoplay parameter to URL
                    iframe.setAttribute("src", `${videoSrc}&autoplay=1`);
                } else {
                    // Remove autoplay parameter to stop the video
                    iframe.setAttribute("src", videoSrc.replace("&autoplay=1", ""));
                }
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
        <section id="showcase">
            <h5>Showcases</h5>
            <h2>Top Showcase</h2>
            <div className="container showcase__container">
                {data.map(({ id, videoId, title, playstore, demo }, index) => (
                    <article key={id} className="showcase__item">
                        <div className="showcase__item-image">
                            <iframe
                                ref={(el) => (videoRefs.current[index] = el)}
                                title={title}
                                src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&mute=1&showinfo=0&rel=0&autoplay=1`}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                        <h3>{title}</h3>
                        <div className="showcase__item-cta">
                            <a href={playstore} className="btn" target="_blank" rel="noreferrer">
                                PlayStore
                            </a>
                            <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                                Documentation
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default TopShowcase;
