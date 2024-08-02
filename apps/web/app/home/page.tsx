"use client"
import styles from "../page.module.css";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import Map from "../components/Map";

export default function Home() {

  return (
    <div>
      <main>
        <Map />
      </main>
    </div>
  );
}
