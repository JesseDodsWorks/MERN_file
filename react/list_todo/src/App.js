import React, { useState } from "react";
import './App.css';
import Form from "./components/Form";
import Display from "./components/Display";

function App() {

  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <h3>Add a task</h3>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <hr></hr>
      <h3>List of todos</h3>
      <Display todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
