export const selectFourMovies = (reduxState) => reduxState.question.fourMovies;
export const selectRightAnswers = (reduxState) =>
  reduxState.question.rightAnswers;
export const selectWrongAnswers = (reduxState) =>
  reduxState.question.wrongAnswers;
export const selectShuffledQuestions = (reduxState) =>
  reduxState.question.shuffledQuestions;
export const selectCorrectButton = (reduxState) => {
  let buttons = [];
  for (let i = 0; reduxState.question.rightAnswers.length > i; i++) {
    let button = reduxState.question.shuffledQuestions[i].indexOf(
      reduxState.question.rightAnswers[i].value
    );
    buttons.push(button);
  }
  return buttons;
};
