import React, { useState } from "react";
import GitHub from "./GitHub";
import Pdf from "./Pdf";

interface Project {
  title: string;
  description: string;
  tech: string;
  link: string;
  img: string;
}

function Projects() {
  const [activePanel, setActivePanel] = useState<number>(0);
  const toggleProjects = (index: number) => {
    if (activePanel !== index) {
      setActivePanel(index);
    }
  };

  const projects: Project[] = [
    {
      title: "AInterview",
      description:
        "AI chat bot app that performs mock interviews, and gives feedback based on user responses.",
      tech: "ASP.NET Core, TypeScript, NextJS, TailwindCSS, OpenAI API",
      link: "https://github.com/elvinnnnn/AInterview",
      img: "/ainterview.png",
    },
    {
      title: "JobEase",
      description:
        "A mobile application that streamlines the job application process using webscraping and data cleaning",
      tech: "React Native, Spring Boot, PostGreSQL, Azure",
      link: "http://github.com/elvinnnnn/JobEase",
      img: "",
    },
    {
      title: "FinConnect",
      description:
        "Financial application that provides correlation analysis based on stock price and news articles.",
      tech: "Python, GraphQL, JavaScript, ReactJS, TailwindCSS, Bootstrap, AWS",
      link: "/finconnect.pdf",
      img: "/finconnect.png",
    },
    {
      title: "Songdle",
      description:
        "Wordle inspired audio recognition mini game based on an artist's discography.",
      tech: "TypeScript, NextJS, Youtube API, Spotify API, TailwindCSS",
      link: "https://github.com/elvinnnnn/songdle",
      img: "/songdle.png",
    },
    {
      title: "Introvert in IKEA",
      description:
        "IKEA inspired survival/stealth game developed for both 3D and VR.",
      tech: "Unreal Engine, C++, Blueprints, Blender, HTC Vive",
      link: "/?=projects",
      img: "/introvertinikea.png",
    },
  ];

  return (
    <div className="page-container">
      <div className="page-title">projects.&nbsp;</div>
      <div className="page-content projects">
        {projects.map((panel, index) => (
          <div
            key={index}
            className={`project-panel page-child ${
              activePanel === index ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${panel.img})`,
            }}
            onClick={() => {
              toggleProjects(index);
            }}
          >
            <button aria-expanded={activePanel === index}>
              <div className="project-title">{panel.title}</div>
            </button>
            <div
              className="project-content"
              aria-hidden={activePanel !== index}
            >
              <div>
                <div className="project-description">{panel.description}</div>

                <div className="project-tech">
                  {panel.tech}
                  <div className="project-link">
                    {index === 2 ? (
                      <Pdf link={panel.link} name={"finconnect_report"} />
                    ) : (
                      <GitHub link={panel.link} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
