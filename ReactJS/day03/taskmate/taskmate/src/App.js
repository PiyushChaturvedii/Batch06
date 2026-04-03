import { useState } from "react";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 2345, name: "Milk", completed: true },
    { id: 2346, name: "Tea", completed: true },
    { id: 2347, name: "Watch Lectures", completed: false },
    { id: 2348, name: "Pratics React", completed: false },
  ]);
  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "completed" : "incomplete"}
            >
              <span>
                {task.id} - {task.name}
              </span>
              <button onClick={() => handleDelete(task.id)} className="delete">
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
