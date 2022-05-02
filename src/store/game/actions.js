import { increment_question_counter } from "./types";

function incrementQuestionCounter() {
  return {
    type: increment_question_counter,
  };
}
