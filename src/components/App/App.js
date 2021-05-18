import React from "react";

import { Popup } from "../Popup/Popup";

import styles from "./App.module.css";

function App() {
  const [openPopup, setOpenPopup] = React.useState(true);

  return (
    <div className={styles.wrapper}>
      {openPopup && <Popup setOpenPopup={setOpenPopup} />}
    </div>
  );
}

export default App;
