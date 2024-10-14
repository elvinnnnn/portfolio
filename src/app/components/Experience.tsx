import { TechStack } from "./index";
import React from "react";

export default function Experience() {
  const [index, setIndex] = React.useState<number>(0);
  const experience: { [key: number]: JSX.Element } = {
    0: (
      <div>
        <div>University of New South Wales</div>
        <ul>
          <li>
            Shortlisted for the Optiver Prize in regards to my Software
            Engineering Workshop 3 Project
          </li>
          <li>Rewarded Best project Award for Computer Graphics Project</li>
          <li>Completed all available Software Engineering Workshops</li>
        </ul>
      </div>
    ),
    1: (
      <div>
        Technical Support at Taiwanese Student Association
        <ul>
          <li>
            Assisting with the technical aspects of events, such as setting up
            audio-visual equipment, managing online platforms for virtual
            events, and ensuring smooth operation during events.
          </li>
          <li>
            Helping with issues related to internet connectivity, access to
            shared drives, or other network-related concerns during society
            events or meetings.
          </li>
        </ul>
      </div>
    ),
    2: (
      <div>
        Github Contributions (WIP)
        <ul>
          <li>Make a C# Plugin for Simple Tweaks FFXIV</li>
          <li>
            Other contributions to open source github repositories (bugs,
            features, design improvements, refactoring, etc).{" "}
          </li>
        </ul>
      </div>
    ),
  };
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
              CS/SENG
            </button>
            <button
              className={`tab ${index === 1 ? "active" : ""}`}
              onClick={() => setIndex(1)}
            >
              Technical Support
            </button>
            <button
              className={`tab ${index === 2 ? "active" : ""}`}
              onClick={() => setIndex(2)}
            >
              Github Contributions
            </button>
          </div>
          <div className="tab-underline"></div>
        </div>
        <div className="page-child experience-content">{experience[index]}</div>
      </div>
    </div>
  );
}
