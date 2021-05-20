import React from "react";
import { useSelector } from "react-redux";

import { StatisticsCard } from "./StatisticsCard/StatisticsCard";
import styles from "./Statistics.module.css";

export const Statistics = () => {
  const { text, wrongCount, currentIndex } = useSelector(({ text }) => text);

  const [seconds, setSeconds] = React.useState(1);
  const [speed, setSpeed] = React.useState(0);

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setSpeed(Math.round((currentIndex / seconds) * 60));
      setSeconds(seconds + 1);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [seconds]);

  React.useEffect(() => {
    setSeconds(1);
    setSpeed(0);
  }, [text]);

  const textLength = text.length > 0 ? text.length : 1;
  const accuracy = (100 - (wrongCount / textLength) * 100).toFixed(1);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <StatisticsCard title="Скорость" value={speed} measure="зн/мин" />
          <StatisticsCard
            title="Точность"
            value={accuracy || 100}
            measure="%"
          />
          <StatisticsCard title="Ошибки" value={wrongCount} measure="" />
        </div>
      </div>
    </div>
  );
};
