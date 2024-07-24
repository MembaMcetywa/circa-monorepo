import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        CIRCA
        <ol>
          <li>
            A <span style={{ color: "#AA0A27" }}>social</span> experiment
          </li>
        </ol>
      </main>
    </div>
  );
}
