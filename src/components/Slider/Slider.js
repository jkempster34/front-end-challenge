import React from "react";
import styles from "./Slider.module.scss";

const Slider = (props) => {
  const { title, from, to } = props;
  return (
    <div className={styles.sliderContainer}>
      <p className={`${styles.text} ${styles.header}`}>{`${title}:`}</p>
      <input className={styles.slider} type="range" min="1" max="100" />
      <div className={styles.optionsContainer}>
        <p className={`${styles.text} ${styles.option}`}>{from}</p>
        <p className={`${styles.text} ${styles.option}`}>{to}</p>
      </div>
    </div>
  );
};

export default Slider;
