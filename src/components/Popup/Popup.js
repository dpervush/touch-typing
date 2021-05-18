import React from "react";
import { Button } from "../Button/Button";
import styles from "./Popup.module.css";

export const Popup = ({ setOpenPopup }) => {
  const handleClick = () => {
    setOpenPopup(false);
  };

  return (
    <div className={styles.popup}>
      <div className={styles.content}>
        <h2 className={styles.title}>Приготовься печатать. Поехали!</h2>
        <Button text="Начать печатать" handleClick={handleClick} />
      </div>
    </div>
  );
};
