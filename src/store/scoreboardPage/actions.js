import { apiUrl } from "../../config/constants";
import axios from "axios";

import { FETCH_SCOREBOARD, POST_SCORE } from "./types";

export const fetchScoreboard = (scoreboard) => ({
  type: FETCH_SCOREBOARD,
  payload: scoreboard,
});

export const scorePostSuccess = (score) => ({
  type: POST_SCORE,
  payload: score,
});

export const fetchAllScores = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/quiz/scoreboard`);
      console.log("response= ", response);

      dispatch(fetchScoreboard(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const postScore = (username, score) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/quiz/gameover`, {
        username,
        score,
      });
      console.log(response.data);
      dispatch(scorePostSuccess(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
