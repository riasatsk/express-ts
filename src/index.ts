import express from "express";
import { authRouter } from "./routes/auth.js";

const app = express();
app.use(authRouter);

app.use((req, res) => {
  res.send("Hello World I am Riasat");
});
app.listen(3000);
