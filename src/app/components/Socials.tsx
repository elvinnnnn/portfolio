import Image from "next/image";

export default function Socials() {
  return (
    <div className="socials-container">
      <a
        href="https://github.com/elvinnnnn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          alt="github-icon"
          src="/icons/github.svg"
          className="socials"
          width={25}
          height={25}
        ></Image>
      </a>
      <a
        href="https://www.linkedin.com/in/lee-elvin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          alt="linkedin-icon"
          src="/icons/linkedin.svg"
          className="socials"
          width={25}
          height={25}
        ></Image>
      </a>

      <a href="" target="_blank" rel="noopener noreferrer">
        <Image
          alt="discord-icon"
          src="/icons/discord.svg"
          className="socials"
          width={25}
          height={25}
        ></Image>
      </a>

      <a
        href="https://open.spotify.com/user/stevelsw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          alt="spotify-icon"
          src="/icons/spotify.svg"
          className="socials"
          width={25}
          height={25}
        ></Image>
      </a>
    </div>
  );
}
