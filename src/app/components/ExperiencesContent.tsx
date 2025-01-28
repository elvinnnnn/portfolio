import React from "react";

export default function ExperiencesContent({ index }: { index: number }) {
  return (
    <>
      <div
        style={{ display: index === 0 ? "block" : "none" }}
        className="experience-content"
      >
        TechOps Specialist at FCCCI
        <ul>
          <li>
            Enhanced FCCCI chatbot performance via updates and debugging,
            boosting response accuracy by 25% and cutting downtime by 15%.
          </li>
          <li>
            Resolved 150+ hardware/software issues, ensuring seamless operations
            and user efficiency.
          </li>
        </ul>
        Co-Founder of JobEase B2C Platform
        <ul>
          <li>
            Launched a beta platform to transform job search and recruitment,
            managing product design, development, and iteration.
          </li>
          <li>
            Led cross-functional efforts in product strategy, technical
            architecture, and user acquisition.
          </li>
        </ul>
      </div>
      <div
        style={{ display: index === 1 ? "block" : "none" }}
        className="experience-content"
      >
        Computer Science
        <ul>
          <li>Rewarded Best project Award for Computer Graphics Project</li>
          <li>
            Completed subjects in networks, databases, functional programming,
            computer graphics, computer systems, discrete/finite mathematics
          </li>
        </ul>
        Software Development
        <ul>
          <li>
            Shortlisted for the Optiver Prize in Software Engineering Workshop 3
            Project
          </li>
          <li>Completed all available Software Engineering Workshops</li>
        </ul>
        Graduate Certificate in Data Science (In-Progress)
      </div>
      <div
        style={{ display: index === 2 ? "block" : "none" }}
        className="experience-content"
      >
        Microsoft Certified: Azure Fundamentals (AZ900)
        <ul>
          <li>Described multiple Azure architectures and services</li>
          <li>Exposure to Azure management and data governance</li>
        </ul>
        AWS Certified: Cloud Practitioner (CLF-C02) <p />
        <ul>
          <li>Understood cloud principles in AWS</li>
          <li>
            Fundamental knowledge of AWS cloud concepts, services, and
            terminology
          </li>
        </ul>
        AWS Certified: Solutions Architect Associate (SAA-C03) (In-Progress)
      </div>
    </>
  );
}
