import React, { useState } from 'react';

function TodoForm () {

    const [value, setValue] = useState("")

    return (
        <form className="TodoForm">
            <input type="text" className="todo-input" placeholder="What is the task today?" 
            onChange={(e) => console.log(e.target.value)}/>
            <button type="submit" className="todo-button">Add</button>
        </form>
    )
}
export default TodoForm