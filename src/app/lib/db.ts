import postgres from "postgres";

export const sql = postgres(process.env.POSTGRESS_url!, { ssl: "require" });
