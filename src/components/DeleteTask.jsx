import React from "react";
import Modal from "./Modal";
import styles from "../styles/Delete.module.css";

const DeleteTask = ({ handleDelete, openModal, setOpenModal }) => {
  return (
    <>
      <button
        className={styles.btnOpenDelete}
        onClick={() => setOpenModal(true)}>
        Eliminar tarea
      </button>
      <Modal isOpen={openModal} closeModal={() => setOpenModal(false)}>
        <h3 className={styles.modalTitle}>
          Estás por eliminar la tarea, ¿Deseás continuar?
        </h3>
        <div className={styles.modalContainer}>
          <button className={styles.btnDelete} onClick={handleDelete}>
            Sí, eliminar
          </button>
          <button
            className={styles.btnReturn}
            onClick={() => setOpenModal(false)}>
            No, volver
          </button>
        </div>
      </Modal>
    </>
  );
};

export default DeleteTask;
