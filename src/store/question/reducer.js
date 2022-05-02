import { fetched_four_movies, generate_year_questions } from "./types";

const initialState = {
  fourMovies: [],
  yearRightAnswers: [],
  yearWrongAnswers: [],
};

export default function questionSliceReducer(state = initialState, action) {
  switch (action.type) {
    case fetched_four_movies: {
      return {
        ...state,
        fourMovies: [...action.payload],
      };
    }
    case generate_year_questions: {
      return {
        ...state,
        yearRightAnswers: action.payload.rightAnswers,
        yearWrongAnswers: action.payload.wrongAnswers,
      };
    }
    default: {
      return state;
    }
  }
}
