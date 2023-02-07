import React from "react";
import styles from "../styles/Modal.module.css";

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <div
      className={`${styles.container} ${isOpen && styles.isOpen}`}
      onClick={closeModal}>
      <div className={styles.modal} onClick={handleModalContainerClick}>
        <button className={styles.close} onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
