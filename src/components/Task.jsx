import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Task.module.css";

const Task = ({
  id,
  description,
  status,
  openModal,
  setTaskId,
  handleDragStart,
  handleDragEnd,
}) => {
  const statusColor = {
    TODO: styles.toDo,
    DOING: styles.doing,
    DONE: styles.done,
  };

  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, id)}
      onDragEnd={handleDragEnd}
      onClick={() => {
        openModal();
        setTaskId(id);
      }}
      className={`${styles.container} ${statusColor[status]}`}>
      <p>{description}</p>
      <FontAwesomeIcon
        icon={faBookmark}
        size={"lg"}
        color="#eed09d"
        className={styles.icon}
      />
    </div>
  );
};

export default Task;
