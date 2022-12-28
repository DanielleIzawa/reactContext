import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";

const TaskList = () => {
  const { tasks } = useContext<any>(TaskContext);

  return tasks.length ? (
    <div>
      <ul>
        {tasks.map((task: any) => {
          return <li>{task.title}</li>;
        })}
      </ul>
    </div>
  ) : (
    <div>No Books Found</div>
  );
};
export default TaskList;
