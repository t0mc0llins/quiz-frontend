import { set_shuffled_questions, set_questions } from "./types";

const initialState = {
  rightAnswers: [],
  wrongAnswers: [],
  shuffledQuestions: [],
};

export default function questionSliceReducer(state = initialState, action) {
  switch (action.type) {
    case set_questions: {
      return {
        ...state,
        rightAnswers: action.payload.rightAnswers,
        wrongAnswers: action.payload.wrongAnswers,
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
