import { apiUrtlListPopularMovie, apiUrlPoster } from "../../config/constants";

import axios from "axios";

import { FETCH_MOVIES, FETCH_POSTER } from "./types";

export const fetchMovies = (movies) => ({
  type: FETCH_MOVIES,
  payload: movies,
});
export const fetchPoster = (poster) => ({
  type: FETCH_POSTER,
  payload: poster,
});
