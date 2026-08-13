import styles from "./CategoryCard.module.css";
import Image from "next/image";
import Link from "next/link";

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
        <Link href="/shop" className={styles.cardLink}>
          <button className={styles.cardBtn}>{cardButtonText}</button>
        </Link>
      </div>
    </div>
  );
}
