import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext)

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-xl">
      <h1 className="font-bold text-2xl capitalize">{task.title}</h1>
      <p className="text-gray-400 text-sm">
        {task.description}
      </p>
      <button
        className="bg-red-600 rounded-md px-2 py-1 mt-4 hover:bg-red-700"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
