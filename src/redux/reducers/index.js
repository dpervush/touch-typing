import { combineReducers } from "redux";
import { statisticsReducer } from "./statisticsReducer";

import { textReducer } from "./textReducer";

export const rootReducer = combineReducers({
  text: textReducer,
  stat: statisticsReducer,
});
