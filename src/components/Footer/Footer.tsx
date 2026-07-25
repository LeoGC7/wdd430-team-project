import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        Handcrafted Haven <br></br> A Marketplace for unique handcrafted
        treasures
      </p>
      <div className={styles.footerLinks}>
        <div className={styles.links}>
          <p className={styles.linkTitle}>Shop</p>
          <Link href="/">All Products</Link>
          <Link href="/">Categories</Link>
          <Link href="/">New Arrivals</Link>
        </div>
        <div className={styles.links}>
          <p className={styles.linkTitle}>Company</p>
          <Link href="/">About Us</Link>
          <Link href="/">Our Artisans</Link>
          <Link href="/">Blog</Link>
        </div>
        <div className={styles.links}>
          <p className={styles.linkTitle}>Support</p>
          <Link href="/">Help</Link>
          <Link href="/">Contact</Link>
          <Link href="/">FAQ</Link>
        </div>
      </div>
      <div className={styles.copy}>
        <p>©2026 Handcrafted Haven</p>
      </div>
    </footer>
  );
}
