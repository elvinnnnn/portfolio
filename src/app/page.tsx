import styles from "./styles/page.module.scss";
import { TypingText } from "./components";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="container">
        <TypingText />
      </div>
    </div>
  );
}
