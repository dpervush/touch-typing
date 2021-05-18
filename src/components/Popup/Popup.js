import React from "react";
import styles from "./Popup.module.css";

export const Popup = ({ setOpenPopup }) => {
  const handleClick = () => {
    setOpenPopup(false);
  };

  return (
    <div className={styles.popup}>
      <div className={styles.content}>
        <h2 className={styles.title}>Приготовься печатать. Поехали!</h2>
        <button className={styles.button} onClick={handleClick}>
          Начать печатать
        </button>
      </div>
    </div>
  );
};
