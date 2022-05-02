import { combineReducers } from "redux";
import question from "./question/reducer";
import homepage from "./homePage/reducer";
import gamePage from "./gamePage/reducer";

export default combineReducers({
  question,
  gamePage,
  homepage,
});
