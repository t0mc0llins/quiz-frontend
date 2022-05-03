export const selectFourMovies = (reduxState) => reduxState.question.fourMovies;
export const selectRightAnswers = (reduxState) =>
  reduxState.question.rightAnswers;
export const selectWrongAnswers = (reduxState) =>
  reduxState.question.wrongAnswers;
export const selectShuffledQuestions = (reduxState) =>
  reduxState.question.shuffledQuestions;
