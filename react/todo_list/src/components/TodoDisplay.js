import React from 'react'

export default function TodoDisplay(data) {

    const [todoList, setTodoList] = data.todoState;

    // onChange toggle isComplete to true/false && the p tag to text decoration cross out 
    const toggleComplete = (value) => {
        value.isComplete = !value.isComplete
        setTodoList([...todoList])
    }

    const styled = (isComplete) => {
        if (isComplete === true) {
          return "completed";
        } 
        else {
          return "notCompleted";
        }
      };

    // function "removeTask" can only remove tasks that are checked 
      const removeTask = (id) => {
            setTodoList(
                todoList.filter((value) => {
                return value.id !== id;
              })
            );
      }


  return (
    <div>
        <h3>List of Todos</h3>

        {todoList.map((value) => (
            <div className={styled(value.isComplete)} key={value.id}>
                <input type="checkbox" onChange={() => toggleComplete(value)}/>
                <p>{value.taskName}</p>
                <p>{console.log(value.isComplete)}</p>
                <button onClick={() => removeTask(value.id)}>remove task</button>
            </div>
        ))}
    </div>
  )
}


