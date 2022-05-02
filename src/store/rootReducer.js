import { combineReducers } from "redux";

import question from "./question/reducer";
import homepage from "./homePage/reducer";

export default combineReducers({
  question,
  homepage,
});
