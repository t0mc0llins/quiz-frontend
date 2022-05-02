import { increment_question_counter } from "./types";

const initialState = {
  counter: 1,
};

export default function gameSliceReducer(state = initialState, action) {
  switch (action.type) {
    case increment_question_counter: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    default: {
      return state;
    }
  }
}
