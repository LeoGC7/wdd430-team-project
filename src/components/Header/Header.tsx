import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} href={"/"}>
          Handcrafted Haven
        </Link>
        <nav className={styles.navBar}>
          <Link className={styles.navLink} href={"/"}>
            Home
          </Link>
          <Link className={styles.navLink} href={"/shop"}>
            Shop
          </Link>
          <Link className={styles.navLink} href={"/about"}>
            About
          </Link>
          <Link className={styles.navLink} href={"/login"}>
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
