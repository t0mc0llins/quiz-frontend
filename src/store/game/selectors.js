export const selectQuestionCounter = (reduxState) => reduxState.game.counter;
export const selectScore = (reduxState) => reduxState.game.score;
export const selectRoundProgress = (reduxState) => {
  return reduxState.game.counter % 4;
};
export const selectRoundOver = (reduxState) => {
  return reduxState.game.counter === 5 || 9 ? true : false;
};
export const selectGameOver = (reduxState) => {
  return reduxState.game.counter === 13 ? true : false;
};
