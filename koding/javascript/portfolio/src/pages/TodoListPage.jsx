import Header from "../components/Header/Header";
import { useState, useEffect } from "react";
import "./TodoListPage.css";
import ProjectDescription from "../components/ProjectDescription/ProjectDescription";

const getLocalItem = () => {
  let list = localStorage.getItem("todoList");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
function TodoListPage() {
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
      <Header />
      <ProjectDescription
        description={
          "Beskrivelse: Dette er det første prosjektet jeg har lagd. Det er en todo-liste der svaret blir lagret i local storage"
        }
        goal={"Mål: Lære meg react og bruke local storage."}
        todo={
          "TODO: Fikse på designet og gjøre de slik at man kan endre på task-ene."
        }
      />
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
            <li className="task-container" key={index}>
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
export default TodoListPage;
