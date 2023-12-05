import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import { getTask } from "./controllers/project-controllers.js";

dotenv.config();

connect();

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "app works" });
});

app.get("/tasks", getTask);

app.listen(3001);
