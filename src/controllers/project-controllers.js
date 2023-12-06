import Project from "../models/Project.js";

export const getTask = async (req, res) => {
  const data = await Project.find();
  return res.status(200).json(data);
};

export const postTask = async (req, res) => {
  try {
    const { title, succeed } = req.body;
    const newTodo = new Project({ title, succeed });
    const savedTodo = await newTodo.save();
    return res.status(201).json(savedTodo);
  } catch (error) {
    return res.status(500).json({ error: "internal server error" });
  }
};
