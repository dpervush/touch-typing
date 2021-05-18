import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCurrentIndex, setWrongLetter } from "../../redux/actions";

import { Loader } from "../common/Loader/Loader";

import styles from "./TextFrame.module.css";

export const TextFrame = () => {
  const { text, currentIndex, wrongIndex } = useSelector(({ text }) => text);
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.key === text[currentIndex]) {
      dispatch(incrementCurrentIndex());
    } else {
      dispatch(setWrongLetter(currentIndex));
    }
  };

  React.useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [text, currentIndex]);

  const renderText = () => {
    return text.split("").map((char, index) => {
      if (index === currentIndex) {
        if (wrongIndex === currentIndex) {
          return (
            <span key={`${char}_${index}`} className={styles.incorrectChar}>
              {char}
            </span>
          );
        }
        return (
          <span key={`${char}_${index}`} className={styles.correctChar}>
            {char}
          </span>
        );
      } else {
        return char;
      }
    });
  };

  return (
    <div className={styles.text}>
      <div className={styles.container}>
        <div className={styles.background}>{renderText()}</div>
        <div className={styles.body}>{text || <Loader />}</div>
      </div>
    </div>
  );
};
