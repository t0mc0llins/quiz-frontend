import {
  apiUrtlListPopularMovie,
  apiUrlPoster,
  apiKey,
} from "../../config/constants";

import axios from "axios";

import { FETCH_MOVIES, FETCH_POSTER } from "./types";

export const fetchMovies = (movies) => ({
  type: FETCH_MOVIES,
  payload: movies,
});
// export const fetchPoster = (poster) => ({
//   type: FETCH_POSTER,
//   payload: poster,
// });

export const fetchAllMovies = () => {
  return async (dispatch, getState) => {
    try {
      const page = Math.floor(Math.random() * 10) + 1;
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`
      );
      console.log("response= ", response);

      dispatch(fetchMovies(response.data.results));
    } catch (e) {
      console.log(e.message);
    }
  };
};
