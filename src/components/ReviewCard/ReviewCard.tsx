import { ReviewWithUser } from "@/app/lib/definitions";
import styles from "./ReviewCard.module.css";

export default function ReviewCard({ review }: { review: ReviewWithUser }) {
  const formattedDate = new Date(review.created_at).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );

  const stars = "⭐".repeat(review.rating) + "☆".repeat(5 - review.rating);

  return (
    <article className={styles.reviewCard}>
      <header className={styles.header}>
        <div>
          <p className={styles.userName}>{review.user_name}</p>
          <p className={styles.date}>{formattedDate}</p>
        </div>
        <p className={styles.rating}>{stars}</p>
      </header>
      <p className={styles.text}>{review.text}</p>
    </article>
  );
}
