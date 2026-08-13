"use server";
import { sql } from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { fetchUserByEmail, requireSellerAction } from "./data";
import { auth } from "../../../auth";

export async function createProduct(formData: FormData) {
  const dbUser = await requireSellerAction();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price") as string;
  const categoryId = formData.get("category_id") as string;
  const imageUrl = formData.get("image_url") as string;

  if (!title || !description || !price || !categoryId) {
    throw new Error("Missing required fields");
  }

  try {
    await sql`
            INSERT INTO products (seller_id, category_id, title, description, price, image_url)
            VALUES (
                ${dbUser.id},
                ${categoryId},
                ${title},
                ${description},
                ${price},
                ${imageUrl || "/cards/placeholder.png"}
            )
        `;
  } catch (error) {
    console.error("Error creating product:", error);
    throw new Error("Failed to create product");
  }

  revalidatePath("/dashboard");
  revalidatePath("/shop");

  redirect("/dashboard");
}

export async function deleteProduct(id: string, formData: FormData) {
  const dbUser = await requireSellerAction();

  try {
    const rows = await sql<{ seller_id: string }[]>`
        SELECT seller_id FROM products WHERE id = ${id} LIMIT 1
    `;

    if (rows.length === 0) {
      throw new Error("Product not found");
    }

    if (rows[0].seller_id !== dbUser.id) {
      throw new Error("You don't have permission to delete this product");
    }

    await sql`DELETE FROM reviews WHERE product_id = ${id}`;
    await sql`DELETE FROM products WHERE id = ${id}`;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw new Error("Failed to delete product");
  }

  revalidatePath("/dashboard");
  revalidatePath("/shop");
}

export async function updateProduct(id: string, formData: FormData) {
  const dbUser = await requireSellerAction();

  try {
    const rows = await sql<{ seller_id: string }[]>`
      SELECT seller_id  FROM products WHERE id = ${id}
    `;

    if (rows.length === 0) {
      throw new Error("Product not found");
    }

    if (rows[0].seller_id !== dbUser.id) {
      throw new Error("You don't have permission to edit this product");
    }
  } catch (error) {
    console.error("Error checking product ownership:", error);
    throw new Error("Failed to verify product ownership");
  }

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price") as string;
  const categoryId = formData.get("category_id") as string;
  const imageUrl = formData.get("image_url") as string;

  if (!title || !description || !price || !categoryId) {
    throw new Error("Missing required fields");
  }

  try {
    await sql`
            UPDATE products
            SET
                title = ${title},
                description = ${description},
                price = ${price},
                category_id = ${categoryId},
                image_url = ${imageUrl || "/cards/placeholder.png"}
            WHERE id = ${id}
        `;
  } catch (error) {
    console.error("Error updating product:", error);
    throw new Error("Failed to update product");
  }

  revalidatePath("/dashboard");
  revalidatePath("/shop");
  revalidatePath(`/shop/${id}`);

  redirect("/dashboard");
}

export async function createReview(productId: string, formData: FormData) {
  const session = await auth();
  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }

  const dbUser = await fetchUserByEmail(session.user.email);
  if (!dbUser) {
    throw new Error("User not found");
  }

  const existing = await sql`
        SELECT id FROM reviews
        WHERE product_id = ${productId} AND user_id = ${dbUser.id}
        LIMIT 1
    `;

  if (existing.length > 0) {
    throw new Error("You've already reviewed this product");
  }

  const ratingRaw = formData.get("rating") as string;
  const text = formData.get("text") as string;

  const rating = parseInt(ratingRaw, 10);
  if (isNaN(rating) || rating < 1 || rating > 5) {
    throw new Error("Rating must be between 1 and 5");
  }
  if (!text || text.trim().length === 0) {
    throw new Error("Review text is required");
  }

  try {
    await sql`
            INSERT INTO reviews (product_id, user_id, rating, text)
            VALUES (${productId}, ${dbUser.id}, ${rating}, ${text})
        `;
  } catch (error) {
    console.error("Error creating review:", error);
    throw new Error("Failed to create review");
  }

  revalidatePath(`/shop/${productId}`);
}
