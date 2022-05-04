export const selectQuestionCounter = (reduxState) => reduxState.game.counter;
export const selectScore = (reduxState) => reduxState.game.score;
export const selectCounterOffset = (reduxState) => {
  if (reduxState.game.counter - 4 <= 0) {
    return 0;
  } else if (reduxState.game.counter - 8 <= 0) {
    return 4;
  } else {
    return 8;
  }
};
