import React from "react";
import { useSelector } from "react-redux";

import { StatisticsCard } from "./StatisticsCard/StatisticsCard";
import styles from "./Statistics.module.css";

export const Statistics = () => {
  const { text, wrongCount, currentIndex } = useSelector(({ text }) => text);

  const textLength = text.length > 0 ? text.length : 1;
  const accuracy = (100 - (wrongCount / textLength) * 100).toFixed(1);

  // let seconds = React.useRef();
  // let speed = React.useRef();

  // seconds.current = 0;
  // React.useEffect(() => {
  //   const timerId = setInterval(() => {
  //     seconds.current++;
  //     console.log(currentIndex, seconds.current);
  //     speed.current = (currentIndex / seconds.current) * 60;
  //   }, 1000);

  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, [currentIndex]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <StatisticsCard title="Скорость" value={0} measure="зн/мин" />
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
