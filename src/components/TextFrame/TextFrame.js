import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCurrentIndex, setWrongLetter } from "../../redux/actions";

import { Loader } from "../common/Loader/Loader";

import styles from "./TextFrame.module.css";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

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
      const className = cx({
        char: true,
        correctChar: index === currentIndex,
        incorrectChar: index === currentIndex && index === wrongIndex,
        passChar: index < currentIndex,
      });

      return (
        <span key={`${char}_${index}`} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className={styles.text}>
      <div className={styles.container}>
        <div className={styles.body}>{!text ? <Loader /> : renderText()}</div>
      </div>
    </div>
  );
};
