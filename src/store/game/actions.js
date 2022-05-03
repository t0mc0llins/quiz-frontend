import { increment_question_counter, increment_score } from "./types";

export function incrementQuestionCounter() {
  return {
    type: increment_question_counter,
  };
}

export function incrementScore() {
  return {
    type: increment_score,
  };
}
