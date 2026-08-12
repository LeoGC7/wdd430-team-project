import Link from "next/link";
import { fetchAllCategories, requireSeller } from "@/app/lib/data";
import { createProduct } from "@/app/lib/actions";
import styles from "./page.module.css";

export default async function NewProductPage() {
  await requireSeller();

  const categories = await fetchAllCategories();

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href="/dashboard" className={styles.backLink}>
          Back
        </Link>
        <h1 className={styles.title}>Create New Product</h1>
        <p className={styles.subtitle}>
          Fill in the details below to list a new product
        </p>
      </header>

      <form action={createProduct} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="title" className={styles.label}>
            Title <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className={styles.input}
            required
            placeholder="e.g., Handmade Ceramic Mug"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="description" className={styles.label}>
            Description <span className={styles.required}>*</span>
          </label>
          <textarea
            id="description"
            name="description"
            className={styles.textarea}
            required
            rows={4}
            placeholder="Describe your product..."
          />
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="price" className={styles.label}>
              Price <span className={styles.required}>*</span>
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className={styles.input}
              required
              step="0.01"
              min="0"
              placeholder="0.00"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="category_id" className={styles.label}>
              Category <span className={styles.required}>*</span>
            </label>
            <select
              id="category_id"
              name="category_id"
              className={styles.select}
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="image_url" className={styles.label}>
            Image URL
          </label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            className={styles.input}
            placeholder="/cards/placeholder.png"
          />
          <p className={styles.helper}>
            Leave blank to use a placeholder image.
          </p>
        </div>

        <div className={styles.actions}>
          <Link href="/dashboard" className={styles.cancelButton}>
            Cancel
          </Link>
          <button type="submit" className={styles.submitButton}>
            Create Product
          </button>
        </div>
      </form>
    </main>
  );
}
