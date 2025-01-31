import { TechStack, ExperiencesContent } from "./index";
import React, { useEffect, useState } from "react";

export default function Experience() {
  const [index, setIndex] = useState<number>(0);
  const [isCramped, setIsCramped] = useState<boolean>(window.innerWidth <= 670);

  useEffect(() => {
    const handleResize = () => {
      setIsCramped(window.innerWidth <= 670);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="page-container">
      <div className="page-title">my experience.&nbsp;</div>
      <div className="page-content">
        <div className="page-child">
          <TechStack />
        </div>
        <div className="page-child">
          <div className="tab-container">
            <button
              className={`tab ${index === 0 ? "active" : ""}`}
              onClick={() => setIndex(0)}
            >
              Experience
            </button>
            <button
              className={`tab ${index === 1 ? "active" : ""}`}
              onClick={() => setIndex(1)}
            >
              {isCramped ? "UNSW" : "University of New South Wales"}
            </button>
            <button
              className={`tab ${index === 2 ? "active" : ""}`}
              onClick={() => setIndex(2)}
            >
              Certifications
            </button>
          </div>
          <div className="tab-underline"></div>
        </div>
        <div className="page-child">
          <ExperiencesContent index={index} />
        </div>
      </div>
    </div>
  );
}
