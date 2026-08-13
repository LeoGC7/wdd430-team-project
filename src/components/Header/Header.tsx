import styles from "./Header.module.css";
import Link from "next/link";
import { auth, signOut } from "../../../auth";

export default async function Header() {
  const session = await auth();

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
          {session?.user ? (
            <>
              <a className={styles.greeting} href="/dashboard">
                Hi, {session.user.name?.split(" ")[0] ?? "User"}
              </a>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className={styles.signOutButton}>
                  Sign Out
                </button>
              </form>
            </>
          ) : (
            <Link className={styles.navLink} href={"/login"}>
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
