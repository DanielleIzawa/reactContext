import React, { createContext, useState, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const TaskContext = createContext<string[]>([]);

const TaskContextProvider = ({ children }: Props) => {
  const [tasks, taskList] = useState([
    { title: "Task 01", priority: "Medium", id: 1 },
    { title: "Task 02", priority: "Medium", id: 2 },
    { title: "Task 03", priority: "Medium", id: 3 },
    { title: "Task 04", priority: "Medium", id: 4 },
    { title: "Task 05", priority: "Medium", id: 5 },
  ]);
  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};

export default TaskContextProvider;
