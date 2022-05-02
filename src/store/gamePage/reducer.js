import { FETCH_CATEGORIES } from "./types";

const initialState = {
  categories: ["Swen", "Vasileios", "Thom"],
};

export default function gamePageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}
