import { combineReducers } from "redux";
import question from "./question/reducer";
import homePage from "./homePage/reducer";
import gamePage from "./gamePage/reducer";

export default combineReducers({
  question,
  homePage,
  gamePage,
});
