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
  Footer,
} from "./components";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const section = searchParams.get("");
  const renderContent = () => {
    switch (section) {
      case "/":
        return <About />;
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
      <Footer />
    </div>
  );
}
