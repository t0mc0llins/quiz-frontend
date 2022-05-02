import { FETCH_CATEGORIES } from "./types";

const initialState = [];

export default function gamePageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
