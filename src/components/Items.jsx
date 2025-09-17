import React from "react";
import styles from "./Items.module.css";
import { MdDelete } from "react-icons/md";

function Items({ todoname, tododate, onDelete }) {
  return (
    <div className={styles.row}>
      <div className={`${styles.col} ${styles.nameCol}`}>{todoname}</div>
      <div className={styles.col}>{tododate}</div>
      <div className={styles.col}>
        <button
          type="button"
          onClick={onDelete}
          className={styles.deleteButton}
        >
          <MdDelete size={30}/>
        </button>
      </div>
    </div>
  );
}

export default Items;
