import Link from "next/link";
import React, { useState } from "react";

export default function Nav({ section }: { section: string }) {
  const [active, setActive] = useState<string>(section);
  const handleClick = (section: string) => {
    setActive(section);
  };
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <Link
            href="/?=about"
            className={`nav-button about-link ${
              active === "about" ? "active-link" : ""
            }`}
            onClick={() => handleClick("about")}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            href="/?=experience"
            className={`nav-button experience-link ${
              active === "experience" ? "active-link" : ""
            }`}
            onClick={() => handleClick("experience")}
          >
            experience
          </Link>
        </li>
        <li>
          <Link
            href="/?=projects"
            className={`nav-button projects-link ${
              active === "projects" ? "active-link" : ""
            }`}
            onClick={() => handleClick("projects")}
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            href="/?=contact"
            className={`nav-button contact-link ${
              active === "contact" ? "active-link" : ""
            }`}
            onClick={() => handleClick("contact")}
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
