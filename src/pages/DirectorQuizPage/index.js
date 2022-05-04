import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectQuestionCounter } from "../../store/game/selectors";
import { generateDirectorQuestions } from "../../store/question/actions";
import {
  selectRightAnswers,
  selectShuffledQuestions,
  selectWrongAnswers,
} from "../../store/question/selector";
import QuestionPage from "../QuestionPage";

export default function DirectorQuizPage() {
  const dispatch = useDispatch();
  const wrongAnswers = useSelector(selectWrongAnswers);
  const shuffledQuestions = useSelector(selectShuffledQuestions);
  const rightAnswers = useSelector(selectRightAnswers);
  const questionNumber = useSelector(selectQuestionCounter);

  useEffect(() => {
    dispatch(generateDirectorQuestions);
  }, []);

  return wrongAnswers.length === 0 ||
    rightAnswers.length === 0 ||
    shuffledQuestions.length === 0 ? (
    "loading"
  ) : (
    <QuestionPage
      title={`Who directed ${rightAnswers[questionNumber - 1].title}?`}
    />
  );
}
