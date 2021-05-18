import React from "react";

import { Popup } from "../Popup/Popup";
import { TextFrame } from "../TextFrame/TextFrame";

import styles from "./App.module.css";

function App() {
  const [openPopup, setOpenPopup] = React.useState(true);

  return (
    <div className={styles.wrapper}>
      {openPopup && <Popup setOpenPopup={setOpenPopup} />}
      <TextFrame />
    </div>
  );
}

export default App;
