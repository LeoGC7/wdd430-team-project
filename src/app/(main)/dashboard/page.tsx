import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import styles from "./page.module.css";

export default async function Dashboard() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome, {session.user.name}</h1>
      <p className={styles.subtitle}>
        This is your Dashboard. Sellet tools and profile management coming soon!
      </p>
    </main>
  );
}
