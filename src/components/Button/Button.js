import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  const { title, selected, icon, iconDescription } = props;
  return (
    <button className={`${selected ? styles.active : styles.inactive}`}>
      <img className={styles.input} src={icon} alt={iconDescription} />
      <p className={`${selected ? styles.activeTitle : ""}`}>{title}</p>
    </button>
  );
};

export default Button;
