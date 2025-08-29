import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";

const app = express();

// Read from .env
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Workly backend 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
