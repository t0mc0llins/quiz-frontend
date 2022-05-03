import { combineReducers } from "redux";
import question from "./question/reducer";
import homePage from "./homePage/reducer";
import gamePage from "./gamePage/reducer";
import game from "./game/reducer";
import scoreboardPage from "./scoreboardPage/reducer";

export default combineReducers({
  question,
  homePage,
  gamePage,
  game,
  scoreboardPage,
});
