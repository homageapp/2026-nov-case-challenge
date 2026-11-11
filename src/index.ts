import express from "express";
import mongoose from "mongoose";

const PORT = Number(process.env.PORT ?? 3000);
const MONGO_URL = process.env.MONGO_URL ?? "mongodb://localhost:27017/app";

await mongoose.connect(MONGO_URL);

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
