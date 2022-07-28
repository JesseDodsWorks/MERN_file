import {useState} from 'react'

export default function TodoForm(data) {

    const [todoList, setTodoList] = data.todoState;

    const [taskName, setTaskName] = useState();

    const addTask = (e) => {
        e.preventDefault()
        setTodoList ([
            ...todoList,
            {
                taskName : taskName,
                isComplete : false,
                id : Math.floor(Math.random() * 10000)
            }
        ])
        setTaskName("")
    };

  return (
    <div>
        <h3>Enter Task Here</h3>
        <input type="text" onChange={(e) => setTaskName(e.target.value)} />
        <button onClick={(e) => addTask(e)}>Add</button>
    </div>
  )
}
