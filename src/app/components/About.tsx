import Image from "next/image";
import Link from "next/link";
import { Spotify } from "react-spotify-embed";

export default function About() {
  return (
    <div className="page-container">
      <div className="page-title">about me.&nbsp;</div>
      <div className="page-content">
        <div className="page-child bio-container">
          <div>
            Hello! I&apos;m a recent
            <Link
              href="https://www.unsw.edu.au/"
              rel="noopener noreferrer"
              className="highlight"
              target="_blank"
            >
              {" "}
              UNSW{" "}
            </Link>
            Computer Science graduate with a passion for technology, creative
            problem-solving, and the belief that everyone has something valuable
            to teach. I thrive on staying curious and am always ready to dive
            into new challenges. Please feel free to have a look around! 😊
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
          When I’m not immersed in tech, you can find me exploring my love for
          music and gaming. I love having a creative outlet, and I am currently
          learning to draw and produce music.
        </div>
        <div className="page-child spotify-container">
          <div className="spotify-text">
            Some of my favourite songs at the moment...
          </div>
          <div className="fav-songs">
            <Spotify
              className="spotify-card"
              wide
              link="https://open.spotify.com/track/5v7oj9PosKdE39x9uwDs6C"
            />
            <Spotify
              className="spotify-card"
              wide
              link="https://open.spotify.com/track/4JcS9WIUfDny6XJ82GqMpZ"
            />
            <Spotify
              className="spotify-card"
              wide
              link="https://open.spotify.com/track/5iyuwVaMliMdloOzSBxohv"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
