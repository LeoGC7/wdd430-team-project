import { Product } from "@/app/lib/definitions";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className={styles.productCard}>
      <img
        className={styles.productImage}
        src={product.image_url}
        alt={product.title}
      />
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>U${product.price}</p>
      </div>
    </article>
  );
}
