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
        return (
          <Suspense>
            <About />
          </Suspense>
        );
      case "experience":
        return (
          <Suspense>
            <Experience />
          </Suspense>
        );
      case "projects":
        return (
          <Suspense>
            <Projects />
          </Suspense>
        );
      case "contact":
        return (
          <Suspense>
            <Contact />
          </Suspense>
        );
      default:
        return (
          <Suspense>
            <About />
          </Suspense>
        );
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
