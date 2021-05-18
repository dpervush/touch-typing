import React from "react";

import { StatisticsCard } from "./StatisticsCard/StatisticsCard";
import styles from "./Statistics.module.css";

export const Statistics = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <StatisticsCard title="Скорость" value="108" measure="зн/мин" />
          <StatisticsCard title="Точность" value="100" measure="%" />
          <StatisticsCard title="Ошибки" value="2" measure="" />
        </div>
      </div>
    </div>
  );
};
