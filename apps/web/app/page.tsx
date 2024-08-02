"use client";

import Link from "next/link";
import Button from "./components/Button";
import styles from "./page.module.css";

export default function Home() {
  const handleClick = () => {
    console.log('button action started')
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header>CIRCA</header>
        <p>
          A <span style={{ color: "#EA3D2D" }}>neat</span> collection of
          interesting places
        </p>
        <Link href={"/home"}>
          <Button onClick={handleClick}>Start journey</Button>
        </Link>
      </main>
    </div>
  );
}
