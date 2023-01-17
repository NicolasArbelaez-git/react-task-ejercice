import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 rounded-lg  shadow-xl">
      <h1 className="text-gray-300 bg-gray-700 rounded-t-lg text-2xl font-bold text-center py-3">
        Crea tu tarea
      </h1>
      <form
        onSubmit={handleSubmit}
        className="text-white bg-transparent p-10 mb-4 flex flex-col gap-4"
      >
        <input
          className="bg-gray-800 rounded-md p-4 text-gray-400 border border-gray-700 placeholder:italic"
          placeholder="Titulo"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          
        />
        <textarea
          className="bg-gray-800 rounded-md p-4 text-gray-400 border border-gray-700 placeholder:italic"
          placeholder="Descripcción"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          
        />
        <button className="bg-green-600 rounded-md px-2 py-1 hover:bg-green-700">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
