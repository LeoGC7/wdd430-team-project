import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import { sql } from "./db";
import {
  Product,
  User,
  ProductWithDetails,
  ReviewWithUser,
} from "./definitions";

export async function fetchAllProducts() {
  const products = await sql<Product[]>`
        SELECT * FROM products ORDER BY created_at DESC
    `;
  return products;
}

export async function fetchProductById(id: string) {
  try {
    const products = await sql<ProductWithDetails[]>`
            SELECT
                products.*,
                users.name AS seller_name,
                categories.name AS category_name,
                categories.slug AS category_slug
            FROM products
            JOIN users ON products.seller_id = users.id
            JOIN categories ON products.category_id = categories.id
            WHERE products.id = ${id}
            LIMIT 1
        `;
    return products[0];
  } catch (error) {
    console.error("Error fetching product:", error);
    return undefined;
  }
}

export async function fetchProductsBySeller(sellerId: string) {
  const products = await sql<Product[]>`
        SELECT * FROM products
        WHERE seller_id = ${sellerId}
        ORDER BY created_at DESC
    `;
  return products;
}

export async function fetchSellerById(id: string) {
  try {
    const users = await sql<User[]>`
            SELECT id, name, email, role, joined_date
            FROM users
            WHERE id = ${id}
            LIMIT 1
        `;
    return users[0];
  } catch (error) {
    console.error("Error fetching seller:", error);
    return undefined;
  }
}

export async function fetchReviewsForProduct(productId: string) {
  const reviews = await sql<ReviewWithUser[]>`
        SELECT
            reviews.*,
            users.name AS user_name
        FROM reviews
        JOIN users ON reviews.user_id = users.id
        WHERE reviews.product_id = ${productId}
        ORDER BY reviews.created_at DESC
    `;
  return reviews;
}

export async function fetchUserByEmail(email: string) {
  try {
    const users = await sql<User[]>`
      SELECT id, name, email, role, joined_date
      FROM users
      WHERE email = ${email}
      LIMIT 1
    `;
    return users[0];
  } catch (error) {
    console.error("Error fetching user by email:", error);
    return undefined;
  }
}

export async function fetchAllCategories() {
  try {
    const categories = await sql<{ id: string; name: string; slug: string }[]>`
        SELECT id, name, slug FROM categories ORDER BY name ASC
      `;
    return categories;
  } catch (error) {
    console.error("Error fetching categorties:", error);
    return [];
  }
}

export async function requireSeller() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const dbUser = await fetchUserByEmail(session.user.email);

  if (!dbUser) {
    redirect("/login");
  }

  if (dbUser.role !== "seller" && dbUser.role !== "admin") {
    redirect("/shop");
  }

  return dbUser;
}

export async function requireSellerAction() {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }

  const dbUser = await fetchUserByEmail(session.user.email);

  if (!dbUser) {
    throw new Error("User not found");
  }

  if (dbUser.role !== "seller" && dbUser.role !== "admin") {
    throw new Error("Only sellers can perform this action");
  }

  return dbUser;
}

export async function fetchRawProductById(id: string) {
  try {
    const products = await sql<Product[]>`
      SELECT * FROM products WHERE id = ${id} LIMIT 1
    `;
    return products[0];
  } catch (error) {
    console.error("There was an error fetching product:", error);
    return undefined;
  }
}

export async function hasUserReviewedProduct(
  userId: string,
  productId: string,
) {
  try {
    const reviews = await sql<{ id: string }[]>`
            SELECT id FROM reviews
            WHERE user_id = ${userId} AND product_id = ${productId}
            LIMIT 1
        `;
    return reviews.length > 0;
  } catch (error) {
    console.error("Error checking review:", error);
    return false;
  }
}
