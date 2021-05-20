import { SET_SPEED, SET_ACCURACY } from "../types";

const initialState = {
  speed: 0,
  accuracy: 100,
};

export const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPEED:
      return {
        ...state,
        speed: action.payload,
      };
    case SET_ACCURACY:
      return {
        ...state,
        accuracy: action.payload,
      };
    default:
      return state;
  }
};
