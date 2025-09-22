import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import IMGNM from "../../assets/NM.png";
import IMGCrispr from "../../assets/Crispr.jpg";
import IMGYouCannotGoBack from "../../assets/YouCannotGoBack.png";
import IMGBalancingGame from "../../assets/BalancingGame.jpg";
import IMGMonsterMaker from "../../assets/MonsterMaker.png";
import IMGSoWhatsTheQuestion from "../../assets/SoWhatsTheQuestion.png";
import IMGDreadManor from "../../assets/DreadManor.jpeg";

const projects = [
  {
    title: "Dread Manor",
    type: "Unity Solo Project",
    platform: "Google Play Store",
    videoId: "XOcYilxLvxk",
    thumbnail: IMGDreadManor,
    externalLink:
      "https://www.notion.so/Dread-Manor-27334068b7b280ca8954eb57c4ca4ac7",
  },
  {
    title: "So What's the question?",
    type: "Unity Websocket API Project",
    platform: "Arcade Game",
    videoId: "4hBlJHpCo3M",
    thumbnail: IMGSoWhatsTheQuestion,
    externalLink:
      "https://www.notion.so/So-what-s-the-question-27634068b7b280de9a3fd857324ad437",
  },
  {
    title: "Monster Maker",
    type: "Unity Arduino Project",
    platform: "Arcade Game",
    videoId: "zyJjB7AnChE",
    thumbnail: IMGMonsterMaker,
    externalLink:
      "https://www.notion.so/Monster-Maker-27634068b7b280cba303dd5546d9a676",
  },
  {
    title: "You Cannot Go Back",
    type: "Brackeys Game Jam 2025.2",
    platform: "Itch.io",
    videoId: "_k1WT73GSF4",
    thumbnail: IMGYouCannotGoBack,
    externalLink:
      "https://www.notion.so/You-Cannot-go-back-27634068b7b2809f8303de6670b6c91f",
  },
  {
    title: "Crispr",
    type: "MonoGame Project",
    platform: "Arcade Game",
    videoId: "zir4qujc92c",
    thumbnail: IMGCrispr,
    externalLink:
      "https://www.notion.so/Crispr-27634068b7b28092818edffc406e3a91",
  },
  {
    title: "The Balancing Game",
    type: "MonoGame Project",
    platform: "Arcade Game",
    videoId: "HQI_zGSIXEY",
    thumbnail: IMGBalancingGame,
    externalLink:
      "https://www.notion.so/The-Balancing-Game-27634068b7b28014b5bcf921f32fd58f",
  },
  {
    title: "Natural Mutations",
    type: "Unity Touch Screen Project",
    platform: "Arcade Game",
    videoId: "XTUs1KsdPWI",
    thumbnail: IMGNM,
    externalLink:
      "https://www.notion.so/Natural-Mutation-27634068b7b280d98249e20ac5f23d49",
  },
];

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryVisible, setGalleryVisible] = useState(true);
  const rowRef = useRef(null);
  const cardRefs = useRef([]);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const handleQuestion = () => {
    const project = projects[currentIndex];
    const url =
      project.externalLink ||
      `https://www.youtube.com/watch?v=${project.videoId}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const toggleGallery = () => setGalleryVisible((v) => !v);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft")
        setCurrentIndex((prev) =>
          prev === 0 ? projects.length - 1 : prev - 1
        );
      if (e.key === "ArrowRight")
        setCurrentIndex((prev) =>
          prev === projects.length - 1 ? 0 : prev + 1
        );
      if (e.key === "g" || e.key === "G") setGalleryVisible((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const row = rowRef.current;
    const el = cardRefs.current[currentIndex];
    if (!row || !el) return;
    const isMobile =
      window.matchMedia && window.matchMedia("(max-width: 900px)").matches;
    if (isMobile) {
      // Center the active card in view on mobile to avoid cutoffs
      const rowRect = row.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const elCenter = el.offsetLeft + elRect.width / 2;
      const target = elCenter - rowRect.width / 2;
      const scrollLeft = Math.max(0, target);
      row.scrollTo({ left: scrollLeft, behavior: "smooth" });
    } else {
      // Keep desktop behavior
      const scrollLeft = el.offsetLeft - 80;
      row.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [currentIndex]);

  const currentProject = projects[currentIndex];

  return (
    <div className="header-container">
      <div className="hero-video">
        <iframe
          key={currentProject.videoId}
          src={`https://www.youtube.com/embed/${currentProject.videoId}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${currentProject.videoId}&modestbranding=1&rel=0`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={currentProject.title}
        />
      </div>

      <div className={`hero-overlay ${galleryVisible ? "" : "hidden"}`} />

      <div className={`hero-content ${galleryVisible ? "" : "hidden"}`}>
        <h1 className="hero-title">Harshit Bhandari</h1>
        <p className="hero-subtitle">
          Game Developer with a Taste for the Experimental. Here's a showcase of
          my work.
        </p>
      </div>

      <div className={`gallery-section ${galleryVisible ? "" : "hidden"}`}>
        <div
          className="gallery-container"
          ref={rowRef}
          aria-hidden={!galleryVisible}
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => setCurrentIndex(index)}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`gallery-card ${
                index === currentIndex ? "active" : ""
              }`}
              tabIndex={0}
            >
              <img src={project.thumbnail} alt={project.title} />
            </div>
          ))}
        </div>

        <div className="description-panel">
          <h2 className="project-title">{currentProject.title}</h2>
          <p className="project-type">{currentProject.type}</p>
          <small className="project-platform">{currentProject.platform}</small>
        </div>
      </div>

      <div className="nav-controls">
        <button
          onClick={handleQuestion}
          className="nav-button question"
          title="More about this project"
        >
          ?
        </button>
        <button
          onClick={handlePrev}
          className="nav-button"
          title="Previous project"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="nav-button"
          title="Next project"
        >
          &#10095;
        </button>
        <button
          onClick={toggleGallery}
          className="nav-button toggle-gallery"
          title={galleryVisible ? "Hide gallery" : "Show gallery"}
        >
          {galleryVisible ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
