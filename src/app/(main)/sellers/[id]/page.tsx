import { fetchSellerById, fetchProductsBySeller } from "@/app/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./page.module.css";

export default async function SellerProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const seller = await fetchSellerById(id);

  if (!seller) {
    notFound();
  }

  const products = await fetchProductsBySeller(id);

  const formattedDate = new Date(seller.joined_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long" },
  );

  return (
    <main className={styles.main}>
      <section className={styles.profileHeader}>
        <div className={styles.avatar}>{seller.name.charAt(0)}</div>
        <div className={styles.profileInfo}>
          <h1 className={styles.sellerName}>{seller.name}</h1>
          <span className={styles.roleBadge}>{seller.role}</span>
          <p className={styles.joinedDate}>Member since {formattedDate}</p>
          <p className={styles.productCount}>
            {products.length} {products.length === 1 ? "product" : "products"}
          </p>
        </div>
      </section>

      <section className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>Products by {seller.name}</h2>
        {products.length === 0 ? (
          <p className={styles.emptyState}>
            This seller hasn't listed any products yet.
          </p>
        ) : (
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.id}`}
                className={styles.productLink}
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
