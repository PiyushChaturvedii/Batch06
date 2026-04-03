import { TaskCard } from "./TaskCard";
import { useState } from "react";

import { BoxCard } from "./BoxCard";
import "./TaskList.css";

export const TaskList = ({ tasks, setTasks }) => {
  
  const [show, setShow] = useState(true);
  
  const style = {
    color: "#3020bc",
    border: "2px solid",
    borderColor: show ? "green" : "red",
    borderRadius: "5px",
    padding: "20px",
  };
  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="tasklist">
      <h1 style={style}>Task List</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
         {show ? "Hide" : "Show"}
        </button>
        {show &&
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              handleDelete={handleDelete}
            />
          ))}
      </ul>
      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor </p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          maxime libero perferendis doloribus ducimus distinctio sit sunt esse
          velit voluptate provident adipisci, reprehenderit in doloremque quos
          consequuntur est quia quis!
        </p>
      </BoxCard>
      <BoxCard result="warning">
        <p className="title">Lorem ipsum dolor </p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          maxime libero perferendis doloribus ducimus distinctio sit sunt esse
          velit voluptate provident adipisci, reprehenderit in doloremque quos
          consequuntur est quia quis!
        </p>
      </BoxCard>
      <BoxCard result="alert">
        <p className="title">Lorem ipsum dolor </p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          maxime libero perferendis doloribus ducimus distinctio sit sunt esse
          velit voluptate provident adipisci, reprehenderit in doloremque quos
          consequuntur est quia quis!
        </p>
      </BoxCard>
    </div>
  );
};
