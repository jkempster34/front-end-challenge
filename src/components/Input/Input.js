import React from "react";
import styles from "./Input.module.scss";

const Input = (props) => {
  const { unit, title, onChange } = props;
  return (
    <div>
      <input className={styles.input} type="number" onChange={onChange}></input>
      <p className={styles.unit}>{unit || ""}</p>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Input;
