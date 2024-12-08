import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [todoList, setTodolist] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    AddTask();
  };

  function AddTask() {
    if (task.trim() !== "") {
      setTodolist((t) => [...t, task]);
      setTask("");
    }
  }

  function RemoveTask(index) {
    const updatedTasks = todoList.filter((_, i) => i !== index);
    setTodolist(updatedTasks);
  }

  return (
    <>
      <h1 className="todoList-header">To-Do-List</h1>
      <div className="to-do-list">
        <form className="todoTask" onSubmit={handleSubmit}>
          <input
            type="text"
            className="todo-input"
            placeholder="What is the task today?"
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit" className="add-button">
            Add
          </button>
        </form>
        <div className="todoList">
          <ul>
            {todoList.map((task, index) => (
              <li key={index}>
                <span className="text">{task}</span>
                <button
                  className="delete-button"
                  onClick={() => RemoveTask(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default TodoList;
