import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "app works" });
});

app.listen(3001);
