import Project from "../models/Project.js";

export const getTask = async (req, res) => {
  const data = await Project.find();
  return res.status(200).json(data);
};

export const postTask = async (req, res) => {
  try {
    const { title, succeed } = req.body;
    const newTodo = new Project({ title, succeed });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json(error);
  }
};
