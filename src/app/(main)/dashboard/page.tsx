import { fetchProductsBySeller, requireSeller } from "@/app/lib/data";
import Link from "next/link";
import styles from "./page.module.css";
import { deleteProduct } from "@/app/lib/actions";

export default async function Dashboard() {
  const dbUser = await requireSeller();
  const products = await fetchProductsBySeller(dbUser.id);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Welcome, {dbUser.name}!</h1>
        </div>
        <Link href="/dashboard/products/new" className={styles.createButton}>
          + Create New Product
        </Link>
      </header>
      <p className={styles.subtitle}>Manage your products below.</p>
      <section className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>
          Your Products ({products.length})
        </h2>

        {products.length === 0 ? (
          <p className={styles.emptyState}>
            You haven't listed any products yet. Click "Create New Product" to
            start.
          </p>
        ) : (
          <div className={styles.productsList}>
            {products.map((product) => (
              <article key={product.id} className={styles.productRow}>
                <div className={styles.productInfo}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <p className={styles.productPrice}>
                    ${Number(product.price).toFixed(2)}
                  </p>
                </div>
                <div className={styles.productActions}>
                  <Link
                    href={`/shop/${product.id}`}
                    className={styles.viewButton}
                  >
                    View
                  </Link>
                  <Link
                    href={`/dashboard/products/${product.id}/edit`}
                    className={styles.editButton}
                  >
                    Edit
                  </Link>
                  <form action={deleteProduct.bind(null, product.id)}>
                    <button type="submit" className={styles.deleteButton}>
                      Delete
                    </button>
                  </form>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
