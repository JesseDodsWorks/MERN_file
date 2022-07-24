import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css';
import React, { useState } from "react";

function App() {

  const test = {
    taskName : "SampleString",
    isDone : 0
  };
  
  const [Todo, setTodo] = useState([test]);
  // todo[0].taskName
  return (
    <div className="App">
      <h3>Todo List</h3>

      <TodoForm todoArray={Todo} setTodoArray={setTodo}/>
      <hr></hr>
      <TodoList todoArray={Todo} />
      
        
    </div>
  );
}

export default App;
