import { apiUrl } from "../../config/constants";
import axios from "axios";

import { FETCH_SCOREBOARD } from "./types";

export const fetchScoreboard = (scoreboard) => ({
  type: FETCH_SCOREBOARD,
  payload: scoreboard,
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
