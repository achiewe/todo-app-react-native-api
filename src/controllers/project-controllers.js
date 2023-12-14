import Project from "../models/Project.js";

// get request for take data from the database
export const getTask = async (req, res) => {
  const data = await Project.find();
  return res.status(200).json(data);
};

// post task for add info from front to database
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

export const putProperty = async (req, res) => {
  try {
    const itemId = req.params.id;
    const { succeed } = req.body;
    const updatedItem = await Project.findByIdAndUpdate(
      itemId,
      { succeed },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "item not found" });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "an error occurred" });
  }
};

export const updateTitle = async (req, res) => {
  try {
    const itemId = req.params.id;
    const { title } = req.body;

    const updatedItem = await Project.findByIdAndUpdate(
      itemId,
      { title },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "item not found" });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "an error occurred" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const itemId = req.params.id;
    const deleteItem = await Project.findOneAndDelete({ _id: itemId });
    if (!deleteItem) {
      return res.status(404).json("task not found");
    }
    res.status(200).json("delete successfully");
  } catch (error) {
    console.log(error);
  }
};
