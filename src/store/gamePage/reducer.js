import { FETCH_QUESTION, FETCH_USER_ANSWER } from "./actions";
import { FETCH_CATEGORIES } from "./types";

const initialState = {
  categories: ["Actor", "Year", "Director", "Odd one out"],
};

export default function gamePageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case FETCH_QUESTION:
      return { ...state.questions, questions: action.payload };

    case FETCH_USER_ANSWER:
      return { ...state, ...state.userAnswer, userAnswer: action.payload };

    default:
      return state;
  }
}
