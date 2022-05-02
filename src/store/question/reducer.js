import { fetched_four_movies } from "./types";

const initialState = {
  movies: [],
};

export default function questionSliceReducer(state = initialState, action) {
  switch (action.type) {
    case fetched_four_movies: {
      return {
        ...state,
        movies: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
