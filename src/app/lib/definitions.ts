export type Product = {
  id: string;
  seller_id: string;
  category_id: string;
  title: string;
  description: string;
  price: string;
  image_url: string;
  created_at: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: "buyer" | "seller" | "admin";
  joined_date: string;
};

export type ProductWithDetails = Product & {
  seller_name: string;
  category_name: string;
  category_slug: string;
};

export type ReviewWithUser = {
  id: string;
  product_id: string;
  user_id: string;
  rating: number;
  text: string;
  created_at: string;
  user_name: string;
};
