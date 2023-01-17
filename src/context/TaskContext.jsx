import { createContext, useState, useEffect } from "react";
import { task } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function deleteTask(id) {
    let newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
  }

  function createTask(task) {
    let newTask = {
      id: tasks.length,
      title: task.title,
      description: task.description,
    };
    setTasks([...tasks, newTask]);
  }

  useEffect(() => {
    setTasks(task);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
