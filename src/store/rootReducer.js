import { combineReducers } from "redux";

import question from "./question/reducer";
import gamePage from "./gamePage/reducer";
export default combineReducers({
  question,
  gamePage,
});
