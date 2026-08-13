import { createReview } from "@/app/lib/actions";
import styles from "./ReviewForm.module.css";

export default function ReviewForm({ productId }: { productId: string }) {
  const createReviewWithId = createReview.bind(null, productId);

  return (
    <form action={createReviewWithId} className={styles.form}>
      <h3 className={styles.title}>Leave a Review</h3>

      <div className={styles.field}>
        <label htmlFor="rating" className={styles.label}>
          Rating <span className={styles.required}>*</span>
        </label>
        <select
          id="rating"
          name="rating"
          className={styles.select}
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select a rating
          </option>
          <option value="5">⭐⭐⭐⭐⭐ (5)</option>
          <option value="4">⭐⭐⭐⭐ (4)</option>
          <option value="3">⭐⭐⭐ (3)</option>
          <option value="2">⭐⭐ (2)</option>
          <option value="1">⭐ (1)</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="text" className={styles.label}>
          Review <span className={styles.required}>*</span>
        </label>
        <textarea
          id="text"
          name="text"
          className={styles.textarea}
          required
          rows={4}
          placeholder="Share your thoughts about this product..."
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit Review
      </button>
    </form>
  );
}
