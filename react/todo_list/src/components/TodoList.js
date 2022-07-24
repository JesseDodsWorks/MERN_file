import React, { useState } from "react";
import styles from "./TodoList.module.css"

function TodoList (data) {

    const todoList = data.todoArray;
    const [isChecked, setIsChecked] = useState(false)

    const deleteTasks = (e) => {
        e.preventDefault()
    }

    const ifChecked = (e, index) => {
        if(isChecked){

            setIsChecked(false)
        }
        else{

            setIsChecked(true)
        }
    }

    return (
        <> 
            <h3>List of Todos</h3>
            
            {todoList.map((value, index) =>(
            <>
                <input type="checkbox" id={index} checked={isChecked} onClick={(e)=>ifChecked(e,index)}/>

                <label className={isChecked ? styles.lineThrough : null} htmlFor={index} key={index}> { value.taskName } </label>

                <br></br>
            </>
            ))}

            <button onClick={(e)=>deleteTasks(e)}>remove checked tasks</button>   
        </>
    );
}

export default TodoList;

