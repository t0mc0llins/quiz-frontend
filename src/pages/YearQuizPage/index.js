import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRoundProgress } from "../../store/game/selectors";
import { generateYearQuestions } from "../../store/question/actions";
import {
  selectRightAnswers,
  selectShuffledQuestions,
  selectWrongAnswers,
} from "../../store/question/selector";
import QuestionPage from "../QuestionPage";

export default function YearQuizPage() {
  const dispatch = useDispatch();
  const wrongAnswers = useSelector(selectWrongAnswers);
  const shuffledQuestions = useSelector(selectShuffledQuestions);
  const rightAnswers = useSelector(selectRightAnswers);
  const roundProgress = useSelector(selectRoundProgress);

  useEffect(() => {
    dispatch(generateYearQuestions);
  }, []);

  return wrongAnswers.length === 0 ||
    rightAnswers.length === 0 ||
    shuffledQuestions.length === 0 ? (
    "loading"
  ) : (
    <QuestionPage
      title={`In what year was ${
        rightAnswers[roundProgress !== 0 ? roundProgress - 1 : 3].title
      }
    released?`}
    />
  );
}
