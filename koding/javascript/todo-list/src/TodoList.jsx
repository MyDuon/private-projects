import React, { useState } from 'react';

function TodoList () {

    const [task, setTask] = useState("")
    const [todoList, setTodolist] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        console.log(task)
        e.target.reset()

    }

    function AddTask() {
        setTodolist(t => [...t, task])
        console.log(t)
        setTask("")
    }

    function RemoveTask() {

    }


    return (
        <form className="todoList" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="todo-input" 
                placeholder="What is the task today?" 
                onChange={(e) => console.log(e.target.value)}/>
            <button type="submit" className="todo-button">Add</button>

        </form>
    )
}
export default TodoList