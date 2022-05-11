import { FETCH_QUESTION, FETCH_USER_ANSWER } from "./actions";
import { FETCH_CATEGORIES } from "./types";

const initialState = {
  categories: ["Actor", "Year", "Director", "Odd one out"],
};

export default function gamePageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case FETCH_QUESTION:
      return { ...state.questions, questions: action.payload };

    case FETCH_USER_ANSWER:
      return { ...state, ...state.userAnswer, userAnswer: action.payload };

    default:
      return state;
  }
}

// questions: {
//   id: 2,
//   question:
//     "What does Annie get a job as in the 2007 movie The Nanny Diaries?",
//   hint: null,
//   createdAt: "2022-05-02T10:15:23.071Z",
//   updatedAt: "2022-05-02T10:15:23.071Z",
//   categoryId: 1,
//   answers: [
//     {
//       id: 5,
//       answer: "A Nanny",
//       correct: true,
//       createdAt: "2022-05-02T10:15:23.167Z",
//       updatedAt: "2022-05-02T10:15:23.167Z",
//       questionId: 2,
//     },
//     {
//       id: 6,
//       answer: "Elijah",
//       correct: false,
//       createdAt: "2022-05-02T10:15:23.167Z",
//       updatedAt: "2022-05-02T10:15:23.167Z",
//       questionId: 2,
//     },
//     {
//       id: 7,
//       answer: "Charlotte",
//       correct: false,
//       createdAt: "2022-05-02T10:15:23.167Z",
//       updatedAt: "2022-05-02T10:15:23.167Z",
//       questionId: 2,
//     },
//     {
//       id: 8,
//       answer: "Ava",
//       correct: false,
//       createdAt: "2022-05-02T10:15:23.167Z",
//       updatedAt: "2022-05-02T10:15:23.167Z",
//       questionId: 2,
//     },
//   ],
// },
// userAnswer: [],
// categories: [],
