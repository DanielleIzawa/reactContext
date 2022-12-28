import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TaskContextProvider from "./TaskContext";
import TaskList from "./TaskList";

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <TaskList />
      </TaskContextProvider>
    </div>
  );
}

export default App;
