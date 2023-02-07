import React from "react";
import Task from "./Task";
import styles from "../styles/TableColumn.module.css";

const TableColumn = ({
  data,
  title,
  status,
  openModal,
  setTaskId,
  draggedItem,
  handleDragStart,
  handleDragEnd,
  handleDragOver,
  handleDrop,
}) => {
  return (
    <div
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, status)}
      className={draggedItem ? styles.dragContainer : styles.container}>
      <h3 className={styles.title}>{title === "TODO" ? "TO DO" : title}</h3>
      <div className={styles.contentContainer}>
        {data.map(
          ({ id, description, status }, index) =>
            status === title && (
              <Task
                key={id || index.toString()}
                id={id}
                description={description}
                status={status}
                openModal={openModal}
                setTaskId={setTaskId}
                handleDragStart={handleDragStart}
                handleDragEnd={handleDragEnd}
              />
            )
        )}
      </div>
    </div>
  );
};

export default TableColumn;
