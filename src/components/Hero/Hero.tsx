import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heroTitle}>
        Discover Unique Handcrafted Treasures
      </h1>
      <p className={styles.heroParagraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius
        delectus quas distinctio inventore ad molestiae aspernatur odio
        laboriosam soluta.
      </p>
      <div className={styles.btnContainer}>
        <button className={styles.btnPrimary}>Browse Products</button>
        <button className={styles.btnSecondary}>Become a Seller</button>
      </div>
    </section>
  );
}
