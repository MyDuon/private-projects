import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [todoList, setTodolist] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    e.target.reset();
    AddTask();
  };

  function AddTask() {
    setTodolist((t) => [...t, task]);
    setTask("");
    console.log(todoList);
  }

  function RemoveTask() {}

  return (
    <div>
      <form className="todoTask" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="What is the task today?"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="todo-button">
          Add
        </button>
      </form>
      <div className="todoList">
        <ul>
          {todoList.map((todoListId) => (
            <li key={todoListId}>{todoListId}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TodoList;
