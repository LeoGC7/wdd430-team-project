import ProductCard from "@/components/ProductCard/ProductCard";
import SearchBar from "@/components/SearchBar/SearchBar";
import Link from "next/link";
import styles from "./page.module.css";
import { fetchAllProducts } from "@/app/lib/data";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const products = await fetchAllProducts(query);

  return (
    <main className={styles.main}>
      <h1 className={styles.shopTitle}>Shop</h1>
      <p className={styles.shopSubtitle}>
        Discover unique handcrafted treasures from artisans around the world.
      </p>
      <SearchBar placeholder="Search products..." />

      {products.length === 0 ? (
        <p className={styles.noResults}>
          No products found{query ? ` for "${query}"` : ""}. Try a different
          search.
        </p>
      ) : (
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
      )}
    </main>
  );
}
