import TodoForm from "./components/TodoForm";
import './App.css';
import React, { useState } from "react";

function App() {

  const [Todo, setTodo] = useState([]);

  return (
    <div className="App">
      <h3>Todo List</h3>

      <TodoForm setTodoArray={setTodo} todoArray={Todo}/>

      <p>todo: {Todo}</p>
    </div>
  );
}

export default App;
