import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoDisplay from "./components/TodoDisplay";

function App() {

  // const [todoList, setTodoList] = useState([]);
  const todoState = useState([]);
  const [todoList, setTodoList] = todoState;

  return (
    <div className="App">

      <TodoForm todoState={todoState} />
      <hr></hr>
      <TodoDisplay todoState={todoState} />
    </div>
  );
}

export default App;