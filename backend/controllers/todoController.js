const Todo = require("../models/TodoModel");
const mongoose = require("mongoose");

// get all todos
const getTodos = async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  if (!todos) {
    return res.status(404).json({ error: "Could not find Todos" });
  }
  return res.status(200).json(todos);
};

// get a single todo
const getTodo = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Could not find Todo" });
  }
  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(404).json({ error: "Could not find Todo" });
  }
  return res.status(200).json(todo);
};

// create a new todo
const addTodo = async (req, res) => {
  const { title, description, isCompleted } = req.body;
  try {
    const todo = await Todo.create({ title, description, isCompleted });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a todo
const updateTodo = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Could not find Todo" });
  }
  const todo = await Todo.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!todo) {
    return res.status(404).json({ error: "Could not find Todo" });
  }
  return res.status(200).json(todo);
};

// delete a todo
const deleteTodo = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Could not find Todo" });
  }
  const todo = await Todo.findOneAndDelete({ _id: id });
  if (!todo) {
    return res.status(404).json({ error: "Could not find Todo" });
  }
  return res.status(200).json(todo);
};

module.exports = { getTodos, getTodo, addTodo, updateTodo, deleteTodo };
