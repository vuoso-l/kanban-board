import React from "react";
import TableColumn from "./TableColumn";
import { STATUS } from "../Constants";
import styles from "../styles/Table.module.css";

const Table = ({
  data,
  openModal,
  setTaskId,
  draggedItem,
  handleDragStart,
  handleDragEnd,
  handleDragOver,
  handleDrop,
}) => {
  return (
    <div className={styles.container}>
      {STATUS.map((item, index) => (
        <TableColumn
          key={index.toString()}
          data={data}
          title={item}
          status={item}
          openModal={openModal}
          setTaskId={setTaskId}
          draggedItem={draggedItem}
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
        />
      ))}
    </div>
  );
};

export default Table;
