const users = [
  {
    id: "66f51730-88b2-43e6-9419-e6c17c7b068e",
    name: "Leonardo Aragaki",
    email: "leo@example.com",
    password: "password123",
    role: "admin",
    joined_date: "2025-08-15",
  },
  {
    id: "e4e7a1a4-927d-49af-9d40-73cdeecc51c6",
    name: "Ester Aragaki",
    email: "ester@example.com",
    password: "password123",
    role: "seller",
    joined_date: "2025-09-02",
  },
  {
    id: "50179e80-5bc2-42c9-b745-a6af0b72d7f4",
    name: "Alan Turing",
    email: "alan@example.com",
    password: "password123",
    role: "buyer",
    joined_date: "2025-10-10",
  },
  {
    id: "7b8c9d0e-1f2a-4b5c-8d6e-7f8a9b0c1d2e",
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    role: "seller",
    joined_date: "2025-10-20",
  },
];

const categories = [
  {
    id: "97cd7322-2a77-4fc1-887c-12d67d45518e",
    name: "Pottery",
    description:
      "Handshaped ceramics, from rustic mugs to elegant vases. Each piece unique.",
    slug: "pottery",
  },
  {
    id: "f9900808-6388-4b82-b1fd-4fe2688771ce",
    name: "Jewelry",
    description:
      "Unique necklaces, rings, and earrings crafted with love by talented artisans.",
    slug: "jewelry",
  },
  {
    id: "9f3347cf-4d5d-433d-8292-635f546a29ec",
    name: "Textiles",
    description:
      "Handwoven blankets, embroidered pillows, and cozy fabrics for your home.",
    slug: "textiles",
  },
  {
    id: "089df6e4-5710-485a-9e7d-fda2879b4ae6",
    name: "Woodwork",
    description:
      "Carved bowls, cutting boards, and sculptures made from sustainable timber.",
    slug: "woodwork",
  },
];

const products = [
  {
    id: "ac10e8b1-3f4a-4d2c-9a11-1d6e5b7c8a90",
    seller_id: "e4e7a1a4-927d-49af-9d40-73cdeecc51c6",
    category_id: "97cd7322-2a77-4fc1-887c-12d67d45518e",
    title: "Handmade Ceramic Mug",
    description:
      "A rustic, hand-thrown ceramic mug with a matte glaze finish. Perfect for morning coffee.",
    price: 24.99,
    image_url: "/cards/placeholder.png",
  },
  {
    id: "bd21f9c2-4e5b-4a3d-8b22-2e7f6c8d9b01",
    seller_id: "e4e7a1a4-927d-49af-9d40-73cdeecc51c6",
    category_id: "97cd7322-2a77-4fc1-887c-12d67d45518e",
    title: "Stoneware Serving Bowl",
    description:
      "Large stoneware serving bowl in earthy tones. Food-safe glaze, dishwasher friendly.",
    price: 45.0,
    image_url: "/cards/placeholder.png",
  },
  {
    id: "ce32a0d3-5f6c-4b4e-8c33-3f8a7d9e0c12",
    seller_id: "e4e7a1a4-927d-49af-9d40-73cdeecc51c6",
    category_id: "f9900808-6388-4b82-b1fd-4fe2688771ce",
    title: "Silver Moon Pendant",
    description:
      "Handcrafted sterling silver pendant with an intricate moon design and matching chain.",
    price: 68.0,
    image_url: "/cards/placeholder.png",
  },
  {
    id: "df43b1e4-6a7d-4c5f-8d44-4a9b8e0f1d23",
    seller_id: "e4e7a1a4-927d-49af-9d40-73cdeecc51c6",
    category_id: "f9900808-6388-4b82-b1fd-4fe2688771ce",
    title: "Copper Wire Earrings",
    description:
      "Delicate handwoven copper wire earrings featuring turquoise beads.",
    price: 32.0,
    image_url: "/cards/placeholder.png",
  },
  {
    id: "ea54c2f5-7b8e-4d6a-8e55-5b0c9f1a2e34",
    seller_id: "e4e7a1a4-927d-49af-9d40-73cdeecc51c6",
    category_id: "9f3347cf-4d5d-433d-8292-635f546a29ec",
    title: "Handwoven Wool Blanket",
    description:
      "Cozy handwoven wool blanket in natural dyes. Perfect for chilly nights on the couch.",
    price: 120.0,
    image_url: "/cards/placeholder.png",
  },
  {
    id: "fb65d3a6-8c9f-4e7b-8f66-6c1d0a2b3f45",
    seller_id: "e4e7a1a4-927d-49af-9d40-73cdeecc51c6",
    category_id: "089df6e4-5710-485a-9e7d-fda2879b4ae6",
    title: "Walnut Cutting Board",
    description:
      "Sustainably sourced walnut cutting board with beeswax finish. Handcrafted for daily use.",
    price: 55.0,
    image_url: "/cards/placeholder.png",
  },
  {
    id: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6f",
    seller_id: "7b8c9d0e-1f2a-4b5c-8d6e-7f8a9b0c1d2e",
    category_id: "97cd7322-2a77-4fc1-887c-12d67d45518e",
    title: "Terracotta Planter Set",
    description:
      "Set of three hand-thrown terracotta planters in graduated sizes. Ideal for succulents and small herbs.",
    price: 42.0,
    image_url: "/cards/placeholder.png",
  },
  {
    id: "b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7f",
    seller_id: "7b8c9d0e-1f2a-4b5c-8d6e-7f8a9b0c1d2e",
    category_id: "f9900808-6388-4b82-b1fd-4fe2688771ce",
    title: "Beaded Leather Bracelet",
    description:
      "Genuine leather bracelet with hand-strung wooden beads and a brass clasp. Adjustable fit.",
    price: 28.0,
    image_url: "/cards/placeholder.png",
  },
  {
    id: "c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8a",
    seller_id: "7b8c9d0e-1f2a-4b5c-8d6e-7f8a9b0c1d2e",
    category_id: "9f3347cf-4d5d-433d-8292-635f546a29ec",
    title: "Embroidered Linen Pillow",
    description:
      "Natural linen throw pillow with hand-embroidered botanical patterns. Includes insert.",
    price: 58.0,
    image_url: "/cards/placeholder.png",
  },
  {
    id: "d4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f9b",
    seller_id: "7b8c9d0e-1f2a-4b5c-8d6e-7f8a9b0c1d2e",
    category_id: "089df6e4-5710-485a-9e7d-fda2879b4ae6",
    title: "Carved Wooden Spoon Set",
    description:
      "Hand-carved set of three cherry wood cooking spoons. Finished with food-safe mineral oil.",
    price: 38.0,
    image_url: "/cards/placeholder.png",
  },
  {
    id: "e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9a0c",
    seller_id: "7b8c9d0e-1f2a-4b5c-8d6e-7f8a9b0c1d2e",
    category_id: "97cd7322-2a77-4fc1-887c-12d67d45518e",
    title: "Glazed Flower Vase",
    description:
      "Elegant tall vase with a glossy ocean-blue glaze. A statement piece for any room.",
    price: 72.0,
    image_url: "/cards/placeholder.png",
  },
  {
    id: "f6a7b8c9-d0e1-2f3a-4b5c-6d7e8f9a0b1d",
    seller_id: "7b8c9d0e-1f2a-4b5c-8d6e-7f8a9b0c1d2e",
    category_id: "9f3347cf-4d5d-433d-8292-635f546a29ec",
    title: "Macramé Wall Hanging",
    description:
      "Boho-style macramé wall hanging made from natural cotton rope. Adds warmth to any space.",
    price: 65.0,
    image_url: "/cards/placeholder.png",
  },
];

const reviews = [
  {
    id: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    product_id: "ac10e8b1-3f4a-4d2c-9a11-1d6e5b7c8a90",
    user_id: "50179e80-5bc2-42c9-b745-a6af0b72d7f4",
    rating: 5,
    text: "Absolutely gorgeous mug. Feels great in the hand and holds heat wonderfully.",
  },
  {
    id: "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
    product_id: "ac10e8b1-3f4a-4d2c-9a11-1d6e5b7c8a90",
    user_id: "50179e80-5bc2-42c9-b745-a6af0b72d7f4",
    rating: 4,
    text: "Beautiful design, slightly smaller than expected but great quality overall.",
  },
  {
    id: "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
    product_id: "ce32a0d3-5f6c-4b4e-8c33-3f8a7d9e0c12",
    user_id: "66f51730-88b2-43e6-9419-e6c17c7b068e",
    rating: 5,
    text: "Stunning piece! Gets so many compliments. Ester's craftsmanship is incredible.",
  },
  {
    id: "4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f90",
    product_id: "ea54c2f5-7b8e-4d6a-8e55-5b0c9f1a2e34",
    user_id: "66f51730-88b2-43e6-9419-e6c17c7b068e",
    rating: 5,
    text: "Perfect for cold nights. The wool is so soft and the natural dyes give it real character.",
  },
  {
    id: "5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a01",
    product_id: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6f",
    user_id: "50179e80-5bc2-42c9-b745-a6af0b72d7f4",
    rating: 5,
    text: "The planters look amazing on my windowsill. The nested sizes work perfectly for my herb garden.",
  },
  {
    id: "6f7a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b12",
    product_id: "b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7f",
    user_id: "66f51730-88b2-43e6-9419-e6c17c7b068e",
    rating: 4,
    text: "Nice bracelet, comfortable to wear. The leather quality is excellent.",
  },
  {
    id: "7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c23",
    product_id: "c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8a",
    user_id: "50179e80-5bc2-42c9-b745-a6af0b72d7f4",
    rating: 5,
    text: "Gorgeous pillow. The embroidery is even more beautiful in person.",
  },
];

export { users, categories, products, reviews };
