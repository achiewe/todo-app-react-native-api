import express from "express";
import bodyParser from "body-parser";
import connect from "./database/mongo.js";
import dotenv from "dotenv";

// functions
import {
  deleteTask,
  getTask,
  postTask,
  putProperty,
  updateTitle,
} from "./controllers/project-controllers.js";
import cors from "cors";

dotenv.config();

connect();

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "app works" });
});

// which http request should happend this functions
app.get("/tasks", getTask);
app.post("/postTask", postTask);
app.put("/tasks/:id", putProperty);
app.delete("/tasks/:id", deleteTask);
app.put("/tasks/title/:id", updateTitle);

app.listen(3001);
