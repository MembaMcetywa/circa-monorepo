"use client";

import Button from "./components/Button";
import styles from "./page.module.css";

export default function Home() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header>CIRCA</header>
        <p>
          A <span style={{ color: "#EA3D2D" }}>neat</span> collection of interesting places
        </p>
        <Button onClick={handleClick}>Start journey</Button>
      </main>
    </div>
  );
}
