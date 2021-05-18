import React from "react";

import { Popup } from "../Popup/Popup";
import { Statistics } from "../Statistics/Statistics";
import { TextFrame } from "../TextFrame/TextFrame";
import { Button } from "../Button/Button";

import styles from "./App.module.css";
import { useDispatch } from "react-redux";
import { fetchText, resetStatistics } from "../../redux/actions";

function App() {
  const [openPopup, setOpenPopup] = React.useState(true);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchText());
  }, []);

  const handleRestartClick = (event) => {
    event.target.blur();
    dispatch(resetStatistics());
    dispatch(fetchText());
  };

  return (
    <div className={styles.wrapper}>
      {openPopup ? (
        <Popup setOpenPopup={setOpenPopup} />
      ) : (
        <>
          <Statistics />
          <TextFrame />
        </>
      )}
      <div className={styles.restart}>
        <Button text="Начать заново" handleClick={handleRestartClick} />
      </div>
    </div>
  );
}

export default App;
