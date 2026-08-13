"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/dashboard";

  return (
    <main className={styles.main}>
      <div className={styles.loginCard}>
        <h1 className={styles.loginTitle}>Sign in to Handcrafted Haven</h1>
        <p className={styles.loginSubtitle}>
          Use your GitHub Account to continue
        </p>
        <button
          className={styles.loginButton}
          onClick={() => signIn("github", { callbackUrl })}
        >
          Sign in with GitHub
        </button>
      </div>
    </main>
  );
}
