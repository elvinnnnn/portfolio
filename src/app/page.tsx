"use client";
import styles from "./styles/page.module.scss";
import {
  TypingText,
  Nav,
  Socials,
  About,
  Experience,
  Contact,
  Projects,
} from "./components";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const renderContent = () => {
    switch (section) {
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };
  return (
    <div className={`${styles.page} container`}>
      <div className="left-half">
        <div className="hub-container">
          <TypingText />
          <Nav />
          <Socials />
        </div>
      </div>
      <div className="right-half">{renderContent()}</div>
      <div className="footer">By Elvin Lee 2024. All rights reserved ©.</div>
    </div>
  );
}
