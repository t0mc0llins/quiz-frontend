import {
  fetched_four_movies,
  set_shuffled_questions,
  set_year_questions,
} from "./types";

const initialState = {
  fourMovies: [],
  yearRightAnswers: [],
  yearWrongAnswers: [],
  shuffledQuestions: [],
};

export default function questionSliceReducer(state = initialState, action) {
  switch (action.type) {
    case fetched_four_movies: {
      return {
        ...state,
        fourMovies: [...action.payload],
      };
    }
    case set_year_questions: {
      return {
        ...state,
        yearRightAnswers: action.payload.rightAnswers,
        yearWrongAnswers: action.payload.wrongAnswers,
      };
    }
    case set_shuffled_questions: {
      return {
        ...state,
        shuffledQuestions: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
