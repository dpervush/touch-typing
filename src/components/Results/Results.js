import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { StatisticsCard } from "../Statistics/StatisticsCard/StatisticsCard";

import styles from "../Popup/Popup.module.css";
import stylesResults from "./Results.module.css";

export const Results = ({ handleClick }) => {
  const { speed, accuracy } = useSelector(({ stat }) => stat);

  return (
    <div className={styles.popup}>
      <div className={styles.content}>
        <h2 className={styles.title}>Хорошая работа! Вот ваши результаты</h2>
        <div className={stylesResults.body}>
          <StatisticsCard title="Скорость" value={speed} measure="зн/мин" />
          <StatisticsCard title="Точность" value={accuracy} measure="%" />
        </div>
        <Button text="Попробовать еще раз" handleClick={handleClick} />
      </div>
    </div>
  );
};
