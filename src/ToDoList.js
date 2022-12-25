import { useState } from "react"

export const ToDoList = () => {
    const [todoList, updateTodo] = useState([])
    const [task, setTask] = useState('')
    const storeTask = (event) => {
        setTask(event.target.value)
    }

    const updateList = () => {
        // const newTodoList = [...todoList, task]
        // updateTodo(newTodoList) // or
        updateTodo([...todoList, task])
    }

    function deleteTask (name) {
        // Need to use filter here, similar to map.
        const newTodoList = todoList.filter((task) => {
            return task === name ? false : true // For all but that same name, do nothing
        });
        updateTodo(newTodoList)
        // Or updateTodo(todoList.filter((task) => return task !== name))
    }

    return (
        <div>
            <h1>Add Tasks</h1>
            <input placeholder="Add task" onChange={storeTask}/>
            <button onClick={updateList}>+ Task</button>
            {
                todoList.map((data) => {
                    return <div>
                        <h4>{data}</h4>
                        <button onClick={() => deleteTask(data)}>X</button>
                        {/* Notice how to pass param to deleteTask, we need to create anon function */}
                        </div>
                })
            }
        </div>
       
    )
  }