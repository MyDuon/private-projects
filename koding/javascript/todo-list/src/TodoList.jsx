import React, { useState, useEffect } from "react";
import "./TodoList.css";

function getLocalItem() {
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

  // add task to list
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page from reloading after sending in form
    event.target.reset(); // reset the target
    addTask(); // add task
  };

  function addTask() {
    if (task.trim() != "") {
      setTodolist((currentTask) => [...currentTask, task]);
      setTask("");
    }
  }

  function editTask(index) {

  }

  function removeTask(index) {
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
                className="edit-button"
                onClick={() => editTask(index)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => removeTask(index)}
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
