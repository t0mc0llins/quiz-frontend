import axios from "axios";
import { apiKey } from "../../config/constants";
import { shuffleAnswers } from "../../config/functions";
import {
  fetched_four_movies,
  set_shuffled_questions,
  set_year_questions,
} from "./types";

function fetchedFourMovies(movies) {
  return {
    type: fetched_four_movies,
    payload: movies,
  };
}

function setYearQuestions(answers) {
  return {
    type: set_year_questions,
    payload: answers,
  };
}

function setShuffledQuestions(answers) {
  return {
    type: set_shuffled_questions,
    payload: answers,
  };
}

async function fetchFourMovies() {
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
    return randomMovies;
    // dispatch(appDoneLoading());
  } catch (error) {
    console.log(error.message);
    // dispatch(setMessage("danger", true, error.message));
  }
  // dispatch(appDoneLoading());
}

export async function generateYearQuestions(dispatch, getState) {
  // dispatch(appLoading());
  try {
    const randomMovies = await fetchFourMovies();

    let rightAnswers = [];
    let wrongAnswers = [[], [], [], []];

    for (let i = 0; randomMovies.length > i; i++) {
      rightAnswers.push({
        year: parseInt(randomMovies[i].release_date.substring(0, 4)),
        poster: randomMovies[i].poster_path,
        title: randomMovies[i].title,
      });
      while (wrongAnswers[i].length < 3) {
        let change = Math.floor(Math.random() * 30) + 1;
        let answer = rightAnswers[i].year - 15 + change;
        if (answer <= 2022 && wrongAnswers[i].indexOf(answer) === -1)
          wrongAnswers[i].push(answer);
      }
    }
    const answers = { rightAnswers, wrongAnswers };
    dispatch(setYearQuestions(answers));
    const rightAnswerYears = rightAnswers.map((a) => {
      return a.year;
    });

    const random = shuffleAnswers(wrongAnswers, rightAnswerYears);
    console.log(random);
    dispatch(setShuffledQuestions(random));
  } catch (error) {
    console.log(error.message);
    // dispatch(setMessage("danger", true, error.message));
  }
}
