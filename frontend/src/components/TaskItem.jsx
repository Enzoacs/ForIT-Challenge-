function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <div className="flex items-center justify-between p-2 border rounded">
      <div>
        <h3 className={task.completed ? "line-through" : ""}>{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => toggleTask(task.id, task.completed)}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          {task.completed ? "Desmarcar" : "Completar"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
