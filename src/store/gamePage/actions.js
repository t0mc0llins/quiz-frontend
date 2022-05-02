import axios from "axios";
import { apiUrl } from "../../config/constants";

import { FETCH_CATEGORIES } from "./types";

export const fetchCategories = (categories) => ({
  type: FETCH_CATEGORIES,
  payload: categories,
});

export const categoriesFetch = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/quiz/category`);
      dispatch(fetchCategories(response.data));
      console.log("res", response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};
