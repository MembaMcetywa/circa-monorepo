"use client";

import { useRouter } from "next/navigation";
import Button from "./components/Button";
import styles from "./page.module.css";
import useAuthStore from "./stores/authStore"

export default function Home() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  const handleClick = () => {
    if (isAuthenticated) {
      router.push("/home");
    } else {
     //TODO:ADD NICE TOAST MODAL HERE TO TELL THE USER THE WHAT HAPPENED
      router.push("/login");
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header>CIRCA</header>
        <p>
          A <span style={{ color: "#EA3D2D" }}>neat</span> collection of
          interesting places
        </p>
        <Button onClick={handleClick}>Start journey</Button>{" "}

      </main>
    </div>
  );
}
