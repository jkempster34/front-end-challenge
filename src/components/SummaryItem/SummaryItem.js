import React from "react";
import styles from "./SummaryItem.module.scss";
import { formatFigure } from "../../utils/amountUtils";

const SummaryItem = (props) => {
  const { title, amount, units } = props;
  return (
    <div className={styles.summaryItem}>
      <div>
        <p className={styles.title}>{`${title}:`}</p>
        <p className={styles.figure}>{formatFigure(amount, units)}</p>
      </div>
    </div>
  );
};

export default SummaryItem;
