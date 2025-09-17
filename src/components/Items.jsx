import React from "react";
import styles from "./Items.module.css";

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
          Delete
        </button>
      </div>
    </div>
  );
}

export default Items;
