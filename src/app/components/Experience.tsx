import { TechStack } from "./index";
import React from "react";

export default function Experience() {
  const [index, setIndex] = React.useState<number>(0);
  const experience: { [key: number]: JSX.Element } = {
    0: (
      <div>
        <div>Computer Science</div>
        <ul>
          <li>Rewarded Best project Award for Computer Graphics Project</li>
          <li>
            Completed subjects in networks, databases, functional programming,
            computer graphics, computer systems, discrete/finite mathematics
          </li>
        </ul>
        <div>Software Development</div>
        <ul>
          <li>
            Shortlisted for the Optiver Prize in Software Engineering Workshop 3
            Project
          </li>
          <li>Completed all available Software Engineering Workshops</li>
        </ul>
      </div>
    ),
    1: (
      <div>
        Microsoft Certified: Azure Fundamentals (AZ900)
        <ul>
          <li>Demonstrated knowledge in cloud concepts and cloud computing</li>
          <li>Described multiple Azure architectures and services</li>
          <li>Exposure to Azure management and data governance</li>
        </ul>
        AWS Certified: Cloud Practitioner (CLF-C02) (In-Progress) <p />
        AWS Certified: Solutions Architect Associate (SAA-C03) (In-Progress)
      </div>
    ),
    2: (
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
              University of New South Wales
            </button>
            <button
              className={`tab ${index === 1 ? "active" : ""}`}
              onClick={() => setIndex(1)}
            >
              Certifications
            </button>
            <button
              className={`tab ${index === 2 ? "active" : ""}`}
              onClick={() => setIndex(2)}
            >
              Technical Support
            </button>
          </div>
          <div className="tab-underline"></div>
        </div>
        <div className="page-child experience-content">{experience[index]}</div>
      </div>
    </div>
  );
}
