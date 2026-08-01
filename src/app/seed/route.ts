import bcrypt from "bcrypt";
import { users, categories, products, reviews } from "../lib/placeholder-data";
import { sql } from "../lib/db";

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
        CREATE TABLE IF NOT EXISTS users (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            role VARCHAR(20) NOT NULL CHECK (role IN ('buyer', 'seller', 'admin')),
            joined_date DATE NOT NULL
        )
    `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
              INSERT INTO users (id, name, email, password, role, joined_date)
              VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.role}, ${user.joined_date})
              ON CONFLICT (email) DO NOTHING;
            `;
    }),
  );

  return insertedUsers;
}

async function seedCategories() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
        CREATE TABLE IF NOT EXISTS categories (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          name VARCHAR(255) NOT NULL,
          description TEXT,
          slug VARCHAR(255) NOT NULL UNIQUE
    )
  `;

  const insertedCategories = await Promise.all(
    categories.map(async (category) => {
      return sql`
                INSERT INTO categories (id, name, description, slug)
                VALUES (${category.id}, ${category.name}, ${category.description}, ${category.slug})
                ON CONFLICT (slug) DO NOTHING
      `;
    }),
  );

  return insertedCategories;
}

async function seedProducts() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
        CREATE TABLE IF NOT EXISTS products (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          seller_id UUID NOT NULL REFERENCES users(id),
          category_id UUID NOT NULL REFERENCES categories(id),
          title VARCHAR(255) NOT NULL,
          description TEXT,
          price DECIMAL(10, 2) NOT NULL,
          image_url TEXT,
          created_at TIMESTAMP DEFAULT NOW()
    )
  `;

  const insertedProducts = await Promise.all(
    products.map(async (product) => {
      return sql`
              INSERT INTO products (id, seller_id, category_id, title, description, price, image_url)
              VALUES (
                ${product.id},
                ${product.seller_id},
                ${product.category_id},
                ${product.title},
                ${product.description},
                ${product.price},
                ${product.image_url}
              )
              ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedProducts;
}

async function seedReviews() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
        CREATE TABLE IF NOT EXISTS reviews (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          product_id UUID NOT NULL REFERENCES products(id),
          user_id UUID NOT NULL REFERENCES users(id),
          rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
          text TEXT,
          created_at TIMESTAMP DEFAULT NOW()
    )
  `;

  const insertedReviews = await Promise.all(
    reviews.map(async (review) => {
      return sql`
            INSERT INTO reviews (id, product_id, user_id, rating, text)
            VALUES (${review.id}, ${review.product_id}, ${review.user_id}, ${review.rating}, ${review.text})
            ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedReviews;
}

export async function GET() {
  try {
    await seedUsers();
    await seedCategories();
    await seedProducts();
    await seedReviews();
    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
