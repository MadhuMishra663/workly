import express from "express";
import * as http from "http";

import { config } from "./utils/configuration/config";
import mongoose from "mongoose";
import { uploadData } from "./firebase";
import { api } from "./routes/api";
import { connectDB } from "./config/db";

const startServer = async () => {
  try {
    await connectDB();
    console.log("🍃 MongoDB connected");
    await uploadData();

    const app = express();
    // app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use("/api", api);
    app.use((req, res) => {
      res.status(404).send("Route Not Found");
    });

    const port = config.PORT || "8000";
    app.set("port", port);

    const server = http.createServer(app);

    server.listen(port, () => console.info(`API running on localhost:${port}`));
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

startServer();
