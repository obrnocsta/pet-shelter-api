import "dotenv/config";
import express from "express";
import type { Express } from "express";

const PORT = process.env.PORT || 8000;
const app: Express = express();

app.listen(PORT, (): void => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
