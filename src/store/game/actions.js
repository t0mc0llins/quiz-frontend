import { increment_question_counter } from "./types";

export function incrementQuestionCounter() {
  return {
    type: increment_question_counter,
  };
}
