import React from "react";

import { Statistics } from "../Statistics/Statistics";
import { TextFrame } from "../TextFrame/TextFrame";
import { Button } from "../Button/Button";

import styles from "../App/App.module.css";

export const Main = ({ handleRestartClick }) => {
  return (
    <>
      <Statistics />
      <TextFrame />
      <div className={styles.restart}>
        <Button text="Начать заново" handleClick={handleRestartClick} />
      </div>
    </>
  );
};
