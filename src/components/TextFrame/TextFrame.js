import React from "react";

import { Loader } from "../common/Loader/Loader";

import styles from "./TextFrame.module.css";

export const TextFrame = () => {
  const [text, setText] = React.useState(null);

  React.useEffect(() => {
    fetch("https://baconipsum.com/api/?type=meat-and-filler&sentences=10")
      .then((res) => res.json())
      .then((data) => setText(data));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.body}>{text || <Loader />}</div>
      </div>
    </div>
  );
};
