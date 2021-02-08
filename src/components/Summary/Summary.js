import React from "react";
import SummaryItem from "../SummaryItem/SummaryItem";
import styles from "./Summary.module.scss";

const Summary = (props) => {
  const { officeArea } = props;

  return (
    <div className={styles.summaryContainer}>
      <div className={styles.itemContainer}>
        <SummaryItem title="Space required" amount={officeArea} units="sqm" />
        <SummaryItem title="Fit-out cost" amount={100000} units="pound" />
        <SummaryItem
          title="Potential space saving"
          amount={officeArea.toString()}
          units="sqm"
        />
      </div>
      <ul className={styles.summaryList}>
        <li>Key benefit statements shown here</li>
        <li>Key benefit statements shown here</li>
        <li>Key benefit statements shown here</li>
        <li>Key benefit statements shown here</li>
      </ul>
    </div>
  );
};

export default Summary;
