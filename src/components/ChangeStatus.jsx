import React from "react";
import { STATUS } from "../Constants";
import styles from "../styles/ChangeStatus.module.css";

const ChangeStatus = ({ handleStatus }) => {
  return (
    <select
      className={styles.select}
      value=""
      onChange={(e) => handleStatus(e.target.value)}>
      <option className={styles.optionDisabled} value="" disabled>
        Cambiar status
      </option>
      {STATUS.map((item) => (
        <option className={styles.option} key={item} value={item}>
          {item === "TODO" ? "TO DO" : item}
        </option>
      ))}
    </select>
  );
};

export default ChangeStatus;
