import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div className="about-container">
      <div className="page-title">about me.&nbsp;</div>
      <div className="page-content">
        <div className="page-child bio-container">
          <div>
            Hello! I&apos;m a recent graduate from the{" "}
            <Link
              href="https://www.unsw.edu.au/"
              rel="noopener noreferrer"
              className="highlight"
              target="_blank"
            >
              UNSW{" "}
            </Link>
            with a Bachelor&apos;s degree in Computer Science. I am passionate
            about technology, problem-solving, creative thinking, and believe
            you can learn something from everyone. Please feel free to have a
            look around! 😊
          </div>
          <Image
            className="profile-pic fade-in"
            src="/profile-pic.jpg"
            alt="profile"
            width={250}
            height={250}
          />
        </div>
        <div className="page-child hobby-container">
          Beyond my professional interests, I enjoy everything music, gaming,
          and exercise! I am currently learning to draw and produce music.
        </div>
        <div className="page-child spotify-container">
          <div className="currently-listening">track:</div>
          <div className="favourite-music"></div>
        </div>
      </div>
    </div>
  );
}
