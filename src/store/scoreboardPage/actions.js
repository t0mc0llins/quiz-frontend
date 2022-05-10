import { apiUrl } from "../../config/constants";
import axios from "axios";

import { FETCH_SCOREBOARD, POST_SCORE } from "./types";

export const fetchScoreboard = (scoreboard) => ({
  type: FETCH_SCOREBOARD,
  payload: scoreboard,
});

export const scorePostSuccess = (userScore) => ({
  type: POST_SCORE,
  payload: userScore,
});

export const fetchAllScores = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/quiz/scoreboard`);
      dispatch(fetchScoreboard(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const postScore = (username, score) => {
  return async (dispatch, getState) => {
    try {
      await axios.post(`${apiUrl}/quiz/gameover`, {
        username,
        score,
      });
      const userScore = { username: username, score: score };
      dispatch(scorePostSuccess(userScore));
    } catch (e) {
      console.log(e.message);
    }
  };
};
