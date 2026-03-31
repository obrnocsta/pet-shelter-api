import dotenv from "dotenv";
import express from "express";
import type { Express, Request, Response } from "express";
import cors from "cors";
import { pets } from "./data/pets";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app: Express = express();

app.use(cors());

app.get("/", (req: Request, res: Response): void => {
  res.json(pets);
});

app.listen(PORT, (): void => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
