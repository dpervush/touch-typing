import {
  FETCH_TEXT,
  PRESS_RIGHT_KEY,
  SET_WRONG_LETTER,
  RESET,
  SET_SPEED,
  SET_ACCURACY,
} from "../types";

export const fetchText = () => (dispatch) => {
  fetch("https://baconipsum.com/api/?type=meat-and-filler&sentences=1")
    .then((res) => res.json())
    .then((data) => dispatch({ type: FETCH_TEXT, payload: data[0] }));
};

export const incrementCurrentIndex = () => ({ type: PRESS_RIGHT_KEY });

export const setWrongLetter = (index) => ({
  type: SET_WRONG_LETTER,
  payload: index,
});

export const setSpeed = (speed) => ({
  type: SET_SPEED,
  payload: speed,
});

export const setAccuarcy = (accuracy) => ({
  type: SET_ACCURACY,
  payload: accuracy,
});

export const resetStatistics = () => ({
  type: RESET,
});
