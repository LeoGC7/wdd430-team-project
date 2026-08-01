import { sql } from "../lib/db";
import { Product } from "../lib/definitions";
import ProductCard from "@/components/ProductCard/ProductCard";
import Link from "next/link";
import styles from "./page.module.css";

export default async function ShopPage() {
  const products = await sql<Product[]>`
        SELECT * FROM products ORDER BY created_at DESC;
    `;

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
