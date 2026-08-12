import ProductCard from "@/components/ProductCard/ProductCard";
import Link from "next/link";
import styles from "./page.module.css";
import { fetchAllProducts } from "@/app/lib/data";

export default async function ShopPage() {
  const products = await fetchAllProducts();

  return (
    <main className={styles.main}>
      <h1 className={styles.shopTitle}>Shop</h1>
      <p className={styles.shopSubtitle}>
        Discover unique handcrafted treasures from artisans around the world.
      </p>
      <div className={styles.productsContainer}>
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
    </main>
  );
}
