import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [todoList, setTodolist] = useState(["Eat Breakfast", "Take a shower"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    e.target.reset();
    AddTask();
  };

  function AddTask() {
    if (task.trim() !== "") {
      setTodolist((t) => [...t, task]);
      setTask("");
      console.log(todoList);
    }
  }

  function RemoveTask(index) {
    console.log("går inne her");
    const updatedTasks = todoList.filter((_, i) => i !== index);
    setTodolist(updatedTasks);
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
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
        </form>
      </div>
    </div>
  );
}
export default TodoList;
