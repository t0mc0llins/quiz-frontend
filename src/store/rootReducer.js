import { combineReducers } from "redux";

import question from "./question/reducer";
import homePage from "./homePage/reducer";

export default combineReducers({
  question,
  homePage,
});
