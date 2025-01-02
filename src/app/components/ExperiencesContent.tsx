import React from "react";

export default function ExperiencesContent({ index }: { index: number }) {
  return (
    <>
      <div
        style={{ display: index === 0 ? "block" : "none" }}
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
        style={{ display: index === 1 ? "block" : "none" }}
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
      <div
        style={{ display: index === 2 ? "block" : "none" }}
        className="experience-content"
      >
        Taiwanese Student Association (TSA)
        <ul>
          <li>
            Assisted with the tech for events, such as setting up audio-visual
            equipment, managing online platforms, and ensuring smooth
            operations.
          </li>
          <li>
            Troubleshooted software and hardware issues (installations,
            connectivity, common OS failures)
          </li>
        </ul>
        Phillip Baxter Catering Chatbot
        <ul>
          <li>
            Provided support for managing catering enquiries when using the
            Phillip Baxter chatbot.
          </li>
          <li>
            The chatbot was designed to be user-friendly, with a simple
            interface that allows users to easily select their desired food
            items and place an order.
          </li>
        </ul>
      </div>
    </>
  );
}
