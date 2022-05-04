import axios from "axios";
import { actors } from "../../config/actors";
import { apiKey } from "../../config/constants";
import { directors } from "../../config/directors";
import { shuffleAnswers } from "../../config/functions";
import { set_shuffled_questions, set_questions } from "./types";

function setQuestions(answers) {
  return {
    type: set_questions,
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

async function fetchFourCasts() {
  // dispatch(appLoading());
  try {
    const roundLength = 4;
    let randomNumbers = [];
    while (randomNumbers.length < roundLength) {
      let r = Math.floor(Math.random() * 500) + 1;
      if (randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
    }
    let castLists = [];
    let movieDetails = [];
    for (let i = 0; randomNumbers.length > i; i++) {
      const responseCast = await axios.get(
        `https://api.themoviedb.org/3/movie/${randomNumbers[i]}/credits?api_key=${apiKey}&language=en-US`
      );
      const responseDetails = await axios.get(
        `https://api.themoviedb.org/3/movie/${randomNumbers[i]}?api_key=${apiKey}&language=en-US`
      );
      const cast = responseCast.data.cast;
      const details = responseDetails.data;
      castLists.push(cast);
      movieDetails.push(details);
    }
    return { casts: castLists, details: movieDetails };
    // dispatch(appDoneLoading());
  } catch (error) {
    console.log(error.message);
    // dispatch(setMessage("danger", true, error.message));
  }
  // dispatch(appDoneLoading());
}

async function fetchFourCrews() {
  // dispatch(appLoading());
  try {
    const roundLength = 4;
    let randomNumbers = [];
    while (randomNumbers.length < roundLength) {
      let r = Math.floor(Math.random() * 500) + 1;
      if (randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
    }
    let castLists = [];
    let movieDetails = [];
    for (let i = 0; randomNumbers.length > i; i++) {
      const responseCast = await axios.get(
        `https://api.themoviedb.org/3/movie/${randomNumbers[i]}/credits?api_key=${apiKey}&language=en-US`
      );
      const responseDetails = await axios.get(
        `https://api.themoviedb.org/3/movie/${randomNumbers[i]}?api_key=${apiKey}&language=en-US`
      );
      const cast = responseCast.data.crew;
      const details = responseDetails.data;
      castLists.push(cast);
      movieDetails.push(details);
    }
    return { casts: castLists, details: movieDetails };
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
        value: parseInt(randomMovies[i].release_date.substring(0, 4)),
        poster: randomMovies[i].poster_path,
        title: randomMovies[i].title,
      });
      while (wrongAnswers[i].length < 3) {
        let change = Math.floor(Math.random() * 30) + 1;
        let answer = rightAnswers[i].value - 15 + change;
        if (
          answer <= 2022 &&
          wrongAnswers[i].indexOf(answer) === -1 &&
          rightAnswers[i].value !== answer
        )
          wrongAnswers[i].push(answer);
      }
    }
    const answers = { rightAnswers, wrongAnswers };
    dispatch(setQuestions(answers));
    const rightAnswerYears = rightAnswers.map((a) => {
      return a.value;
    });

    const random = shuffleAnswers(wrongAnswers, rightAnswerYears);
    dispatch(setShuffledQuestions(random));
  } catch (error) {
    console.log(error.message);
    // dispatch(setMessage("danger", true, error.message));
  }
}

export async function generateActorQuestions(dispatch, getState) {
  // dispatch(appLoading());
  try {
    const response = await fetchFourCasts();
    const casts = response.casts;
    const details = response.details;

    let rightAnswers = [];
    let wrongAnswers = [[], [], [], []];

    for (let i = 0; casts.length > i; i++) {
      rightAnswers.push({
        value: casts[i][Math.floor(Math.random() * 5)].name.toLowerCase(),
        poster: details[i].poster_path,
        title: details[i].title,
      });
      let castNames = casts[i].map((c) => {
        return c.name.toLowerCase();
      });
      while (wrongAnswers[i].length < 3) {
        let answer = actors[Math.floor(Math.random() * 500)].name;
        if (
          castNames.indexOf(answer.toLowerCase()) === -1 && i !== 0
            ? wrongAnswers[i].indexOf(answer.toLowerCase()) === -1
            : true
        )
          wrongAnswers[i].push(answer.toLowerCase());
      }
    }
    const answers = { rightAnswers, wrongAnswers };
    dispatch(setQuestions(answers));
    const rightAnswerNames = rightAnswers.map((a) => {
      return a.value;
    });

    const random = shuffleAnswers(wrongAnswers, rightAnswerNames);
    dispatch(setShuffledQuestions(random));
  } catch (error) {
    console.log(error.message);
    // dispatch(setMessage("danger", true, error.message));
  }
}

export async function generateOddOneQuestions(dispatch, getState) {
  // dispatch(appLoading());
  try {
    const response = await fetchFourCasts();
    const casts = response.casts;
    const details = response.details;

    let rightAnswers = [];
    let wrongAnswers = [[], [], [], []];

    for (let i = 0; casts.length > i; i++) {
      rightAnswers.push({
        value: actors[Math.floor(Math.random() * 500)].name.toLowerCase(),
        poster: details[i].poster_path,
        title: details[i].title,
      });
      while (wrongAnswers[i].length < 3) {
        let answer = casts[i][Math.floor(Math.random() * 10)].name;
        if (
          rightAnswers[i].value !== answer.toLowerCase() && i !== 0
            ? wrongAnswers[i].indexOf(answer.toLowerCase()) === -1
            : true
        )
          wrongAnswers[i].push(answer.toLowerCase());
      }
    }
    const answers = { rightAnswers, wrongAnswers };
    dispatch(setQuestions(answers));
    const rightAnswerNames = rightAnswers.map((a) => {
      return a.value;
    });

    const random = shuffleAnswers(wrongAnswers, rightAnswerNames);
    dispatch(setShuffledQuestions(random));
  } catch (error) {
    console.log(error.message);
    // dispatch(setMessage("danger", true, error.message));
  }
}

export async function generateDirectorQuestions(dispatch, getState) {
  // dispatch(appLoading());
  try {
    const response = await fetchFourCrews();
    const casts = response.casts;
    const details = response.details;

    let rightAnswers = [];
    let wrongAnswers = [[], [], [], []];

    for (let i = 0; casts.length > i; i++) {
      let director = casts[i].find((c) => c.job === "Director");
      rightAnswers.push({
        value: director.name.toLowerCase(),
        poster: details[i].poster_path,
        title: details[i].title,
      });
      let directorNames = directors.map((d) => {
        return d.director.toLowerCase();
      });
      while (wrongAnswers[i].length < 3) {
        let answer = directorNames[Math.floor(Math.random() * 146)];
        if (
          answer !== "n/a" && rightAnswers[i].value !== answer && i !== 0
            ? wrongAnswers[i].indexOf(answer) === -1
            : true
        )
          wrongAnswers[i].push(answer);
      }
    }
    const answers = { rightAnswers, wrongAnswers };
    dispatch(setQuestions(answers));
    const rightAnswerNames = rightAnswers.map((a) => {
      return a.value;
    });

    const random = shuffleAnswers(wrongAnswers, rightAnswerNames);
    dispatch(setShuffledQuestions(random));
  } catch (error) {
    console.log(error.message);
    // dispatch(setMessage("danger", true, error.message));
  }
}
