import styles from "./Categories.module.css";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function Categories() {
  return (
    <section className={styles.categoriesContainer}>
      <h2 className={styles.categoriesTitle}>Browse Our Categories</h2>
      <div className={styles.cardContainer}>
        <CategoryCard
          cardImage="/cards/placeholder.png"
          cardTitle="Pottery"
          cardDescription="Handshaped ceramics, from rustic mugs to elegant vases. Each piece unique."
          cardButtonText="Explore"
        ></CategoryCard>
        <CategoryCard
          cardImage="/cards/placeholder.png"
          cardTitle="Jewelry"
          cardDescription="Unique necklaces, rings, and earrings crafted with love by talented artisans."
          cardButtonText="Explore"
        ></CategoryCard>
        <CategoryCard
          cardImage="/cards/placeholder.png"
          cardTitle="Textiles"
          cardDescription="Handwoven blankets, embroidered pillows, and cozy fabrics for your home."
          cardButtonText="Explore"
        ></CategoryCard>
        <CategoryCard
          cardImage="/cards/placeholder.png"
          cardTitle="Woodwork"
          cardDescription="Carved bowls, cutting boards, and sculptures made from sustainable timber."
          cardButtonText="Explore"
        ></CategoryCard>
      </div>
    </section>
  );
}
