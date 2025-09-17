import React, { useState } from "react";
import styles from "./Todosection.module.css";

function Todosection({ onAdd }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleClick = () => {
    onAdd(name, date);
    setName("");
    setDate("");
  };

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <input
          type="text"
          placeholder="Enter Todo here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.col}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className={styles.col}>
        <button type="button" onClick={handleClick} className={styles.addButton}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Todosection;
