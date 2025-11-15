import * as dotenv from "dotenv";
import * as path from "path";

if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: path.resolve(".", ".env.spec") });
} else {
  dotenv.config();
}

class Config {
  DB_URL: string;
  PORT: string;
  JWT_SECRET: string;

  constructor() {
    if (!process.env.DB_URL) {
      throw new Error("❌ Missing environment variable: DB_URL");
    }
    if (!process.env.PORT) {
      throw new Error("❌ Missing environment variable: PORT");
    }
    if (!process.env.JWT_SECRET) {
      throw new Error("❌ Missing environment variable: JWT_SECRET");
    }

    this.DB_URL = process.env.DB_URL;
    this.PORT = process.env.PORT;
    this.JWT_SECRET = process.env.JWT_SECRET;
  }
}

export const config = new Config();
