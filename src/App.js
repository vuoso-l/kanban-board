import React, { useState } from "react";
import ChangeStatus from "./components/ChangeStatus";
import DeleteTask from "./components/DeleteTask";
import Modal from "./components/Modal";
import Table from "./components/Table";
import TaskForm from "./components/TaskForm";
import styles from "./styles/App.module.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [openModalOptions, setOpenModalOptions] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [taskId, setTaskId] = useState("");
  const [draggedItem, setDraggedItem] = useState(false);

  const handleDragStart = (e, id) => {
    setDraggedItem(true);
    e.dataTransfer.setData("text", id);
    setTaskId(id);
  };

  const openModalOpt = () => setOpenModalOptions(true);

  const closeModalOpt = () => setOpenModalOptions(false);

  const handleDragEnd = () => setDraggedItem(false);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    setTaskId(e.dataTransfer.getData("text"));
    handleStatus(status);
    setDraggedItem(false);
  };

  const createTask = (id, description, status) => {
    setTasks([...tasks, { id, description, status }]);
  };

  const editTask = (id, description) => {
    const editedTask = tasks.find((item) => item.id === id);
    setTasks([
      { ...editedTask, description },
      ...tasks.filter(({ id }) => id !== taskId),
    ]);
    closeModalOpt();
  };

  const handleStatus = (e) => {
    const status = e;
    const task = tasks.find(({ id }) => id === taskId);

    setTasks([{ ...task, status }, ...tasks.filter(({ id }) => id !== taskId)]);
    openModalOptions && closeModalOpt();
  };

  const handleDelete = () => {
    const newTasks = tasks.filter((item) => item.id !== taskId);
    setTasks(newTasks);
    setOpenModalDelete(false);
    closeModalOpt();
  };

  return (
    <>
      <header>
        <h1 className={styles.headerTitle}>Tablero Kanban</h1>
        <h2 className={styles.subHeader}>Challenge Frontend - Andreani</h2>
      </header>
      <main>
        <TaskForm handleTask={createTask} submitBtn="Crear" />
        <Modal isOpen={openModalOptions} closeModal={closeModalOpt}>
          <TaskForm
            handleTask={editTask}
            taskId={taskId}
            submitBtn="Modificar"
          />
          <ChangeStatus handleStatus={handleStatus} />
          <DeleteTask
            handleDelete={handleDelete}
            openModal={openModalDelete}
            setOpenModal={setOpenModalDelete}
          />
        </Modal>
        <Table
          data={tasks}
          openModal={openModalOpt}
          setTaskId={setTaskId}
          draggedItem={draggedItem}
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
        />
      </main>
      <footer>
        <h3>Gracias!! Lucas Vuoso</h3>
        <div className={styles.social}>
          <h5>vuosolucas@gmail.com</h5>
          <a href="https://portfolio-vuoso-lucas.vercel.app/">Portfolio</a>
          <a href="https://www.linkedin.com/in/vuoso-l/">Linkedin</a>
          <a href="https://github.com/vuoso-l/">Github</a>
        </div>
      </footer>
    </>
  );
}

export default App;
