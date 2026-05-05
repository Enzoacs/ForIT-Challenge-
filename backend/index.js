const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Array en memoria para las tareas
let tasks = [];

// GET /api/tasks - Obtener todas las tareas
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// POST /api/tasks - Crear una nueva tarea
app.post("/api/tasks", (req, res) => {
  const { title, description } = req.body;
  const newTask = {
    id: Date.now().toString(),
    title,
    description,
    completed: false,
    createdAt: new Date(),
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /api/tasks/:id - Actualizar una tarea existente
app.put("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title: title ?? tasks[taskIndex].title,
    description: description ?? tasks[taskIndex].description,
    completed: completed ?? tasks[taskIndex].completed,
  };

  res.json(tasks[taskIndex]);
});

// DELETE /api/tasks/:id - Eliminar una tarea
app.delete("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  const deletedTask = tasks.splice(taskIndex, 1);
  res.json(deletedTask[0]);
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
