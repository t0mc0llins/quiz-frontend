import axios from "axios";
import { apiUrl } from "../../config/constants";

import { FETCH_CATEGORIES } from "./types";

export const fetchCategories = (categories) => ({
  type: FETCH_CATEGORIES,
  payload: categories,
});

export const categoriesFetch = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/quiz/category/${id}`);
      dispatch(fetchCategories(response.data));
    } catch (err) {
      console.log(err.message);
    }
  };
};
