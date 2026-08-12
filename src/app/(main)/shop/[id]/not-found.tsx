import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <main className={styles.notFoundMain}>
      <h1 className={styles.notFoundTitle}>Product Not Found</h1>
      <p className={styles.notFoundText}>
        We couldn't find the product you're looking for. It may have been
        removed or the link is broken.
      </p>
      <Link href="/shop" className={styles.notFoundButton}>
        Back to Shop
      </Link>
    </main>
  );
}
