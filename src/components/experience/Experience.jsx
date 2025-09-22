import React, { useEffect } from "react";
import "./experience.css";
import { BiCheck } from "react-icons/bi";

const languages = [
  { name: "C#", level: "Experienced" },
  { name: "HTML/CSS", level: "Experienced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "PHP", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "MySQL", level: "Intermediate" },
  { name: "Python", level: "Beginner" },
  { name: "Java", level: "Intermediate" },
];

const tools = [
  { name: "Blender", level: "Experienced" },
  { name: "Unity Engine", level: "Experienced" },
  { name: "Adobe Photoshop", level: "Intermediate" },
  { name: "Adobe Premiere", level: "Intermediate" },
  { name: "UPBGE", level: "Intermediate" },
  { name: "GitHub", level: "Intermediate" },
  { name: "Postman", level: "Intermediate" },
  { name: "Microsoft Excel", level: "Intermediate" },
];

const Experience = () => {
  useEffect(() => {
    const options = { threshold: 0.25 };

    const listObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const panel = entry.target;
        if (!panel) return;

        if (entry.isIntersecting) {
          panel.classList.add("revealed");
        } else {
          panel.classList.remove("revealed");
          // force reflow so animation can replay next time
          // eslint-disable-next-line no-unused-expressions
          void panel.offsetWidth;
        }
      });
    }, options);

    const panels = document.querySelectorAll(".experience__container > div");
    panels.forEach((p) => listObserver.observe(p));

    return () => {
      panels.forEach((p) => listObserver.unobserve(p));
    };
  }, []);

  return (
    <section id="experience">
      <h5>What skill I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__language glass-panel">
          <h3>Languages Known</h3>

          <div className="experinece__content">
            {languages.map((lang, i) => (
              <article
                className="experience__details"
                key={lang.name}
                style={{ ["--i"]: i }}
              >
                <span className="point-icon">
                  <BiCheck />
                </span>
                <div>
                  <h4>{lang.name}</h4>
                  <small className="text-light">{lang.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__tools glass-panel">
          <h3>Tools Known</h3>

          <div className="experinece__content">
            {tools.map((t, i) => (
              <article
                className="experience__details"
                key={t.name}
                style={{ ["--i"]: i }}
              >
                <span className="point-icon">
                  <BiCheck />
                </span>
                <div>
                  <h4>{t.name}</h4>
                  <small className="text-light">{t.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
