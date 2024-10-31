import React from "react";

export default function ExperiencesContent({ index }: { index: number }) {
  return (
    <>
      <div
        style={{ display: index === 0 ? "block" : "none" }}
        className="experience-content"
      >
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
      <div
        style={{ display: index === 1 ? "block" : "none" }}
        className="experience-content"
      >
        Microsoft Certified: Azure Fundamentals (AZ900)
        <ul>
          <li>Demonstrated knowledge in cloud concepts and cloud computing</li>
          <li>Described multiple Azure architectures and services</li>
          <li>Exposure to Azure management and data governance</li>
        </ul>
        AWS Certified: Cloud Practitioner (CLF-C02) (In-Progress) <p />
        AWS Certified: Solutions Architect Associate (SAA-C03) (In-Progress)
      </div>
      <div
        style={{ display: index === 2 ? "block" : "none" }}
        className="experience-content"
      >
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
    </>
  );
}
