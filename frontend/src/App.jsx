import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  // Cargar tareas desde el backend
  useEffect(() => {
    fetch("http://localhost:3000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  // Agregar tarea
  const addTask = async (task) => {
    const res = await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
  };

  // Eliminar tarea
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/api/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Marcar tarea como completada / desmarcar
  const toggleTask = async (id, completed) => {
    const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    });
    const updatedTask = await res.json();
    setTasks(tasks.map((t) => (t.id === id ? updatedTask : t)));
  };
 
  return (
    
    <div className="bg-blue-200 rounded-lg shadow-lg mt-40 max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text text-center text-gray-700">Lista de Tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
