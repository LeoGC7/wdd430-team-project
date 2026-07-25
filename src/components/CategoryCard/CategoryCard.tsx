import styles from "./CategoryCard.module.css";
import Image from "next/image";

export default function CategoryCard({
  cardImage,
  cardTitle,
  cardDescription,
  cardButtonText,
}: {
  cardImage: string;
  cardTitle: string;
  cardDescription: string;
  cardButtonText: string;
}) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.cardImage}
        src={cardImage}
        alt={cardTitle}
        width={200}
        height={200}
      ></Image>
      <div className={styles.cardInfo}>
        <p className={styles.cardTitle}>{cardTitle}</p>
        <p className={styles.cardDescription}>{cardDescription}</p>
        <button className={styles.cardBtn}>{cardButtonText}</button>
      </div>
    </div>
  );
}
