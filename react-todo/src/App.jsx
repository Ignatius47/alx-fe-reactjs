import React from "react";
import TodoList from "./components/TodoList"; // import TodoList

export default function App() {
  return (
    <div>
      <h1>My Todo App</h1>
      <TodoList /> {/* render TodoList component */}
    </div>
  );
}
