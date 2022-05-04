export const selectQuestionCounter = (reduxState) => reduxState.game.counter;
export const selectScore = (reduxState) => reduxState.game.score;
export const selectRoundProgress = (reduxState) => {
  return (reduxState.game.counter % 4) - 1;
};
