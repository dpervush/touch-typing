import { FETCH_TEXT, PRESS_RIGHT_KEY, RESET, SET_WRONG_LETTER } from "../types";

const initialState = {
  text: "",
  currentIndex: 0,
  wrongIndex: null,
  wrongCount: 0,
};

export const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case PRESS_RIGHT_KEY:
      return {
        ...state,
        currentIndex: ++state.currentIndex,
      };
    case SET_WRONG_LETTER:
      return {
        ...state,
        wrongCount:
          action.payload !== state.wrongIndex
            ? ++state.wrongCount
            : state.wrongCount,
        wrongIndex: action.payload,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
