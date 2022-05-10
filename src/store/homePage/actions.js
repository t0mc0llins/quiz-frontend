import { apiKey } from "../../config/constants";

import axios from "axios";

import { FETCH_MOVIES } from "./types";

export const fetchMovies = (movies) => ({
  type: FETCH_MOVIES,
  payload: movies,
});

export const fetchAllMovies = () => {
  return async (dispatch, getState) => {
    try {
      const page = Math.floor(Math.random() * 10) + 1;
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`
      );

      dispatch(fetchMovies(response.data.results));
    } catch (e) {
      console.log(e.message);
    }
  };
};
