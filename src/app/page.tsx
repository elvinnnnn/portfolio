import styles from "./styles/page.module.scss";
import { TypingText, Nav, Socials } from "./components";

export default function Home() {
  return (
    <div className={`${styles.page} container`}>
      <div className="left-half">
        <div className="hub-container">
          <TypingText />
          <Nav />
          <Socials />
        </div>
      </div>
      <div className="right-half">CHANGE CONTENT DEPENDING ON URL</div>
    </div>
  );
}
