import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { StatisticsCard } from "./StatisticsCard/StatisticsCard";
import styles from "./Statistics.module.css";
import { setAccuarcy, setSpeed } from "../../redux/actions";

export const Statistics = () => {
  const { text, wrongCount, currentIndex } = useSelector(({ text }) => text);
  const { speed, accuracy } = useSelector(({ stat }) => stat);

  const dispatch = useDispatch();

  const [seconds, setSeconds] = React.useState(1);

  const textLength = text.length > 0 ? text.length : 1;

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(setSpeed(Math.round((currentIndex / seconds) * 60)));
      setSeconds(seconds + 1);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [seconds]);

  React.useEffect(() => {
    setSeconds(1);
    dispatch(setSpeed(0));
  }, [text]);

  React.useEffect(() => {
    dispatch(setAccuarcy((100 - (wrongCount / textLength) * 100).toFixed(1)));
  }, [wrongCount, textLength]);

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
