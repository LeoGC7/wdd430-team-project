import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import {
  fetchAllCategories,
  fetchRawProductById,
  requireSeller,
} from "@/app/lib/data";
import { updateProduct } from "@/app/lib/actions";
import styles from "./page.module.css";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const dbUser = await requireSeller();

  const product = await fetchRawProductById(id);
  if (!product) {
    notFound();
  }

  if (product.seller_id !== dbUser.id) {
    redirect("/dashboard");
  }

  const categories = await fetchAllCategories();

  const updateProductWithId = updateProduct.bind(null, product.id);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href="/dashboard" className={styles.backLink}>
          Back
        </Link>
        <h1 className={styles.title}>Edit Product</h1>
        <p className={styles.subtitle}>
          Update the details for {product.title}.
        </p>
      </header>

      <form action={updateProductWithId} className={styles.form}>
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
            defaultValue={product.title}
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
            defaultValue={product.description}
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
              defaultValue={product.price}
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
              defaultValue={product.category_id}
            >
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
            defaultValue={product.image_url}
          />
        </div>

        <div className={styles.actions}>
          <Link href="/dashboard" className={styles.cancelButton}>
            Cancel
          </Link>
          <button type="submit" className={styles.submitButton}>
            Save Changes
          </button>
        </div>
      </form>
    </main>
  );
}
