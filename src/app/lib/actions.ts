"use server";
import { sql } from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireSellerAction } from "./data";

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
