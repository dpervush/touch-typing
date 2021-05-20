import React from "react";
import styles from "./StatisticsCard.module.css";

export const StatisticsCard = React.memo(({ title, value, measure }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.result}>
        <span className={styles.value}>{value}</span> {measure}
      </div>
    </div>
  );
});
