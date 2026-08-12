import styles from "./page.module.css";
import { fetchProductById, fetchReviewsForProduct } from "@/app/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReviewCard from "@/components/ReviewCard/ReviewCard";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProductById(id);
  if (!product) {
    notFound();
  }

  const reviews = await fetchReviewsForProduct(id);

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  return (
    <main className={styles.main}>
      <div className={styles.pageContent}>
        <div className={styles.productWrapper}>
          <Image
            width={400}
            height={400}
            src="/cards/placeholder.png"
            alt={product.title}
            className={styles.productImage}
          />
          <aside className={styles.detailsContainer}>
            <div className={styles.productHeader}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <div className={styles.productSubtitle}>
                <p className={styles.productCategory}>
                  {product.category_name}
                </p>
                <Link
                  href={`/sellers/${product.seller_id}`}
                  className={styles.sellerName}
                >
                  By {product.seller_name}
                </Link>
              </div>
              {reviews.length > 0 && (
                <p className={styles.averageRating}>
                  ⭐ {averageRating.toFixed(1)} ({reviews.length}{" "}
                  {reviews.length === 1 ? "review" : "reviews"})
                </p>
              )}
            </div>
            <div className={styles.productDescriptionContainer}>
              <p className={styles.descriptionTitle}>Description</p>
              <p className={styles.productDescription}>{product.description}</p>
              <div className={styles.priceContainer}>
                <div className={styles.productPrice}>
                  <p className={styles.priceText}>Price</p>
                  <p className={styles.priceValue}>${product.price}</p>
                </div>
                <button className={styles.reviewButton}>+ Review</button>
              </div>
            </div>
          </aside>
        </div>
        <section className={styles.reviewsWrapper}>
          <p className={styles.reviewsTitle}>Reviews ({reviews.length})</p>
          <div className={styles.reviewsContainer}>
            {reviews.length === 0 ? (
              <p className={styles.noReviews}>
                No reviews yet. Be the first to review this product!
              </p>
            ) : (
              reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
