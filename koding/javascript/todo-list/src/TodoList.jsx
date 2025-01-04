import React, { useState, useEffect } from "react";
import "./TodoList.css";

const getLocalItem = () => {
  let list = localStorage.getItem("todoList");
  if (list) {
    return JSON.parse(list);
  } else {
    return;
    [];
  }
};
function TodoList() {
  const [task, setTask] = useState("");
  const [todoList, setTodolist] = useState(getLocalItem);

  //   // Load TODOs from local storage on app startup
  //   useEffect(() => {
  //     const storedTodos = JSON.parse(localStorage.getItem("todoList"));
  //     if (storedTodos) {
  //       setTodolist(storedTodos);
  //     }
  //   }, []);

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
