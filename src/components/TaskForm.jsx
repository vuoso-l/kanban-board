import React, { useState } from "react";
import styles from "../styles/TaskForm.module.css";

const TaskForm = ({ handleTask, submitBtn, taskId }) => {
  const [description, setDescription] = useState("");
  const [idNumber, setIdNumber] = useState(0);

  const handleChange = (e) => setDescription(e.target.value);

  const handleReset = () => setDescription("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitBtn === "Crear") {
      setIdNumber(idNumber + 1);
      handleTask(`description-${idNumber}`, description, "TODO");
    } else {
      handleTask(taskId, description);
    }
    setDescription("");
  };

  return (
    <div className={styles.container}>
      {submitBtn === "Crear" && <h3 className={styles.task}>Agregar tarea</h3>}
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputText}
          type="text"
          name="description"
          placeholder={
            submitBtn === "Crear"
              ? "Nombre / Descripción"
              : "Cambiar descripción"
          }
          onChange={handleChange}
          value={description}></input>
        {description !== "" && (
          <div className={styles.btnContainer}>
            <input
              className={styles.btnSubmit}
              type="submit"
              value={submitBtn}></input>

            <input
              className={styles.btnReset}
              type="reset"
              value="Cancelar"
              onClick={handleReset}></input>
          </div>
        )}
      </form>
    </div>
  );
};

export default TaskForm;
