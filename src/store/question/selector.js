export const selectFourMovies = (reduxState) => reduxState.question.fourMovies;
export const selectYearRightAnswers = (reduxState) =>
  reduxState.question.yearRightAnswers;
export const selectOnlyYearRightAnswers = (reduxState) => {
  const years = reduxState.question.yearRightAnswers.map((a) => {
    return a.year;
  });
  return years;
};
export const selectYearWrongAnswers = (reduxState) =>
  reduxState.question.yearWrongAnswers;
export const selectShuffledQuestions = (reduxState) =>
  reduxState.question.shuffledQuestions;
