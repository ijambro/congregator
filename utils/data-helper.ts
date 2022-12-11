import dotenv from "dotenv";
import { Client, Pool } from "pg";

dotenv.config();

// Initialize Pool with connection params from .env
console.log("Initializing Postgres Pool using params", process.env);
const pgPool = new Pool();

export async function query(sql: string, params?: any[]) {
  console.log("[data-helper] Querying", sql, params);
  return pgPool.query(sql, params);
}
