import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <Link href="/?section=about" className="nav-button about">
            about
          </Link>
        </li>
        <li>
          <Link href="/?section=experience" className="nav-button experience">
            experience
          </Link>
        </li>
        <li>
          <Link href="/?section=projects" className="nav-button projects">
            projects
          </Link>
        </li>
        <li>
          <Link href="/?section=contact" className="nav-button contact">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
