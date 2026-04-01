import dotenv from "dotenv";
import express from "express";
import type { Express, Request, Response } from "express";
import cors from "cors";

import { petRouter } from "./routes/pets.routes";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app: Express = express();

app.use(cors());

app.use("/pets", petRouter);

app.use(
  (
    req: Request,
    res: Response<{ success: boolean; message: string }>,
  ): void => {
    res.status(404).json({ success: false, message: "No route found" });
  },
);

app.listen(PORT, (): void => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
