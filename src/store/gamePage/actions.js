import axios from "axios";
import { apiUrl } from "../../config/constants";

import { FETCH_CATEGORIES } from "./types";

export const FETCH_QUESTION = "FETCH_QUESTION";
export const FETCH_USER_ANSWER = "FETCH_USER_ANSWER";

export const fetchCategories = (categories) => ({
  type: FETCH_CATEGORIES,
  payload: categories,
});

export const getQuestions = (id) => ({
  type: FETCH_QUESTION,
  payload: id,
});

export const getUserAnswer = (id) => ({
  type: FETCH_USER_ANSWER,
  payload: id,
});

export const categoriesFetch = (id) => {
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

//get list of products
export const generateRandomQuestions = (id) => {
  return async (dispatch, getState) => {
    try {
      const products = await axios.get(`${apiUrl}/quiz/question/${id}`);
      dispatch(getQuestions(products.data));
    } catch (e) {
      console.error(e.message);
    }
  };
};
