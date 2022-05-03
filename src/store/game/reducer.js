import { increment_question_counter, increment_score } from "./types";

const initialState = {
  counter: 1,
  score: 0,
};

export default function gameSliceReducer(state = initialState, action) {
  switch (action.type) {
    case increment_question_counter: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case increment_score: {
      return {
        ...state,
        score: state.score + 1,
      };
    }
    default: {
      return state;
    }
  }
}
