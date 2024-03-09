import Image from "next/image";
import styles from "./page.module.css";
import LeftSection from "@/components/leftsection";
import RightSection from "@/components/RightSection";

export default function Home() {
  return (
    <div className={styles.mainpage}>
      <div className={styles.leftsection}>
        <LeftSection/>
      </div>
      <div className={styles.RightSection}>
        <RightSection/>
      </div>
      
    </div>
  );
}
