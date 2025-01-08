import React, { useState, useEffect } from "react";
import "./TodoList.css";

const getLocalItem = () => {
  let list = localStorage.getItem("todoList");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
function TodoList() {
  const [task, setTask] = useState("");
  const [todoList, setTodolist] = useState(getLocalItem);

  // Update local storage whenever TODOs change
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

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
      <h1 className="todo-header">To-Do-List</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
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
      <div className="todo-task">
        <ul>
          {todoList.map((task, index) => (
            <li key={index}>
              <h3 className="task-description">{task}</h3>
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
    </>
  );
}
export default TodoList;
