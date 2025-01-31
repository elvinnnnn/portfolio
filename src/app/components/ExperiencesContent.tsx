import React from "react";

export default function ExperiencesContent({ index }: { index: number }) {
  return (
    <>
      <div
        style={{ display: index === 0 ? "block" : "none" }}
        className="experience-content"
      >
        Software Developer at Phillip Baxter (Volunteer)
        <ul>
          <li>
            Implemented multi-intent handling and TTL caching on Python catering
            chatbot, resulting in a 25% reduction in required user-input and a
            65% increase in response accuracy.
          </li>
        </ul>
        Support Engineer at FCCCI (Non-Profit)
        <ul>
          <li>
            Diagnosed and resolved 150+ hardware and software issues for
            customers, ensuring seamless operations and minimizing downtime to
            maintain event efficiency.
          </li>
          <li>
            Developed website with WordPress CMS, enhancing user experience and
            increasing site traffic by 30%.
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
