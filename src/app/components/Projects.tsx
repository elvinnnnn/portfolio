import React, { useState } from "react";
import GitHub from "./GitHub";
import Pdf from "./Pdf";

interface Project {
  description: string;
  tech: string;
  link: string;
  img: string;
}

function Projects() {
  const [active, setActive] = useState<string>("AInterview");

  const projects: { [key: string]: Project } = {
    AInterview: {
      description:
        "AI chat bot app that performs mock interviews, and gives feedback based on user responses.",
      tech: "ASP.NET Core, TypeScript, NextJS, TailwindCSS, OpenAI API",
      link: "https://github.com/elvinnnnn/AInterview",
      img: "/ainterview.png",
    },
    FinConnect: {
      description:
        "Financial application that provides correlation analysis based on stock price and news articles.",
      tech: "Python, GraphQL, JavaScript, ReactJS, TailwindCSS, Bootstrap, New Relic",
      link: "/finconnect.pdf",
      img: "/finconnect.png",
    },
    Songdle: {
      description:
        "Wordle inspired audio recognition mini game based on an artist's discography.",
      tech: "TypeScript, NextJS, Youtube API, Spotify API, TailwindCSS",
      link: "https://github.com/elvinnnnn/songdle",
      img: "/songdle.png",
    },
    "Introvert in IKEA": {
      description:
        "IKEA inspired survival/stealth game developed for both 3D/Desktop and VR.",
      tech: "Unreal Engine, C++, Blueprints, Blender, HTC Vive",
      link: "/?=projects",
      img: "/introvertinikea.png",
    },
  };

  return (
    <div className="page-container">
      <div className="page-title">projects.&nbsp;</div>
      <div className="page-content projects">
        {Object.keys(projects).map((key) => {
          const project = projects[key];
          return (
            <div key={key} className="project-container">
              {key === active ? (
                <div
                  style={{
                    backgroundImage: `url(${project.img})`,
                  }}
                  className="active-project"
                >
                  <div className="project-content">
                    <div className="project-title">{key}</div>
                    <div className="project-description">
                      {project.description}
                    </div>
                  </div>
                  <div className="project-footer">
                    <div className="project-tech">{project.tech}</div>
                    <div className="project-redirect">
                      {key === "FinConnect" ? (
                        <Pdf link={project.link} name={"finconnect_report"} />
                      ) : (
                        <GitHub link={project.link} />
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setActive(key);
                  }}
                  style={{
                    backgroundImage: `url(${project.img})`,
                  }}
                  className="inactive-project"
                >
                  <div className="project-title">{key}</div>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
