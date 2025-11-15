// config/keys.ts
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../.env") });

export const JWT_SECRET = process.env.JWT_SECRET || "default_jwt_secret";
export const MONGO_URI = process.env.DB_URL || "";
export const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID || "";
export const GOOGLE_APPLICATION_CREDENTIALS =
  process.env.GOOGLE_APPLICATION_CREDENTIALS || "";
