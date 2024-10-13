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
import { Suspense } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const section = searchParams.get("");
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
    <Suspense fallback={<div>Loading...</div>}>
      <div className={`${styles.page} container`}>
        <div className="left-half">
          <div className="hub-container">
            <TypingText />
            <Nav />
          </div>
        </div>
        <div className="right-half">{renderContent()}</div>
      </div>
    </Suspense>
  );
}
