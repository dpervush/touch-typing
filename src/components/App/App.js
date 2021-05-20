import React from "react";

import { Popup } from "../Popup/Popup";

import styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchText, resetStatistics } from "../../redux/actions";
import { Results } from "../Results/Results";
import { Main } from "../Main/Main";

function App() {
  const [openPopup, setOpenPopup] = React.useState(true);

  const isFinish = useSelector(({ text }) => text.finish);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchText());
  }, []);

  const handleRestartClick = (event) => {
    event.target.blur();
    dispatch(resetStatistics());
    dispatch(fetchText());
  };

  const chooseBlockToRender = () => {
    if (openPopup) {
      return <Popup setOpenPopup={setOpenPopup} />;
    } else if (isFinish) {
      return isFinish && <Results handleClick={handleRestartClick} />;
    } else {
      return <Main handleRestartClick={handleRestartClick} />;
    }
  };

  return <div className={styles.wrapper}>{chooseBlockToRender()}</div>;
}

export default App;
