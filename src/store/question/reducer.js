import { fetched_four_movies } from "./types";

const initialState = {
  fourMovies: [],
};

export default function questionSliceReducer(state = initialState, action) {
  switch (action.type) {
    case fetched_four_movies: {
      return {
        ...state,
        fourMovies: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
