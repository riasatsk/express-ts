import { Router } from "express";

export const authRouter = Router();

authRouter.get("/login", (req, res) => {
  res.send("You are logged in");
});
