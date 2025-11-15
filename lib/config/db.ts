// config/db.ts
import mongoose from "mongoose";
import { MONGO_URI } from "../../lib/config/key";

export const connectDB = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error("❌ MongoDB URI is missing (DB_URL is not set in .env)");
    }

    console.log("📌 Connecting to MongoDB:", MONGO_URI);

    await mongoose.connect(MONGO_URI);

    console.log("🍃 MongoDB connected successfully");
  } catch (error) {
    console.error("❌ Mongo connection error:", error);
    throw error;
  }
};
