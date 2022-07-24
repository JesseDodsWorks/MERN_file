import React, { useState } from "react";

function TodoForm (data) {

    const setTodoArray = data.setTodoArray;
    const [taskName, setTaskName] = useState();

    const saveTask = (e) => {
        e.preventDefault()
        const taskInfo = {
            taskName : taskName,
            isDone : 0
          };
        const newArray = [...data.todoArray, taskInfo]
        setTodoArray(newArray)
    }

    return (
        <>
            <form>
                <input type="text" name="todo" placeholder="what is there to do" onChange={(e)=>setTaskName(e.target.value)}/>
                <button onClick={(e)=>saveTask(e)}>add</button>
            </form>
        </>
    );
}

export default TodoForm;