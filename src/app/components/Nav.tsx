import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <Link href="/?section=about" className="nav-button about-link">
            about
          </Link>
        </li>
        <li>
          <Link
            href="/?section=experience"
            className="nav-button experience-link"
          >
            experience
          </Link>
        </li>
        <li>
          <Link href="/?section=projects" className="nav-button projects-link">
            projects
          </Link>
        </li>
        <li>
          <Link href="/?section=contact" className="nav-button contact-link">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
