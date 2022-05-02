import axios from "axios";
import { apiKey } from "../../config/constants";
import { fetched_four_movies, generate_year_questions } from "./types";

function fetchedFourMovies(movies) {
  return {
    type: fetched_four_movies,
    payload: movies,
  };
}

export async function fetchFourMovies(dispatch, getState) {
  // dispatch(appLoading());
  try {
    const page = Math.floor(Math.random() * 10) + 1;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`
    );
    const roundLength = 4;
    const movies = response.data.results;
    let randomNumbers = [];
    while (randomNumbers.length < roundLength) {
      let r = Math.floor(Math.random() * 10) + 1;
      if (randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
    }
    let randomMovies = [];
    for (let i = 0; randomNumbers.length > i; i++) {
      randomMovies.push(movies[randomNumbers[i] - 1]);
    }
    dispatch(fetchedFourMovies(randomMovies));
    // dispatch(appDoneLoading());
  } catch (error) {
    console.log(error.message);
    // dispatch(setMessage("danger", true, error.message));
  }
  // dispatch(appDoneLoading());
}

export function generateYearQuestions(movies) {
  let rightAnswers = [];
  let wrongAnswers = [[], [], [], []];

  for (let i = 0; movies.length > i; i++) {
    rightAnswers.push({
      year: parseInt(movies[i].release_date.substring(0, 4)),
      poster: movies[i].poster_path,
      title: movies[i].title,
    });
    while (wrongAnswers[i].length < 3) {
      let change = Math.floor(Math.random() * 30) + 1;
      let answer = rightAnswers[i].year - 15 + change;
      if (wrongAnswers[i].indexOf(answer) === -1) wrongAnswers[i].push(answer);
    }
  }
  const answers = { rightAnswers, wrongAnswers };
  return {
    type: generate_year_questions,
    payload: answers,
  };
}
