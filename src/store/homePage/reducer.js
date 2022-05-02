import { FETCH_MOVIES, FETCH_POSTER } from "./types";

const initialState = { allMovies: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, allMovies: [...action.payload] };
    default: {
      return state;
    }
  }
}
