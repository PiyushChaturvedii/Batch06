import "./TaskCard.css";
import styles from "./TaskCard.module.css"

export const TaskCard = ({ task, handleDelete, info }) => {
  return (
    <div className="taskcard">
      <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
        <span  id={styles.random}>
          {task.id} - {task.name}
        </span>
        <button onClick={() => handleDelete(task.id)} className="delete">
          Delete
        </button>
      </li>
    </div>
  );
};
