import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateYearQuestions } from "../../store/question/actions";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { selectQuestionCounter, selectScore } from "../../store/game/selectors";
import {
  selectShuffledQuestions,
  selectRightAnswers,
  selectWrongAnswers,
} from "../../store/question/selector";
import {
  incrementQuestionCounter,
  incrementScore,
} from "../../store/game/actions";

export default function YearQuiz() {
  const dispatch = useDispatch();
  const score = useSelector(selectScore);
  const questionNumber = useSelector(selectQuestionCounter);
  const rightAnswers = useSelector(selectRightAnswers);
  const wrongAnswers = useSelector(selectWrongAnswers);
  const shuffledQuestions = useSelector(selectShuffledQuestions);


  useEffect(() => {
    dispatch(generateYearQuestions);
  }, []);

  const handleAnswer1 = () => {
    if (
      shuffledQuestions[questionNumber - 1][0] ===
      rightAnswers[questionNumber - 1].year
    ) {
      dispatch(incrementScore());
    }
    dispatch(incrementQuestionCounter());
  };

  const handleAnswer2 = () => {
    if (
      shuffledQuestions[questionNumber - 1][1] ===
      rightAnswers[questionNumber - 1].year
    ) {
      dispatch(incrementScore());
    }
    dispatch(incrementQuestionCounter());
  };

  const handleAnswer3 = () => {
    if (
      shuffledQuestions[questionNumber - 1][2] ===
      rightAnswers[questionNumber - 1].year
    ) {
      dispatch(incrementScore());
    }
    dispatch(incrementQuestionCounter());
  };

  const handleAnswer4 = () => {
    if (
      shuffledQuestions[questionNumber - 1][3] ===
      rightAnswers[questionNumber - 1].year
    ) {
      dispatch(incrementScore());
    }
    dispatch(incrementQuestionCounter());
  };

  return wrongAnswers.length === 0 || shuffledQuestions.length === 0 ? (
    "loading"
  ) : (
    <Box sx={{ mt: 5 }}>
      <Box>
        <Typography variant="h3" pb={10}>
          In what year did {rightAnswers[questionNumber - 1].title} get
          released?
        </Typography>
        <Box>
          <img
            style={{ height: 500 }}
            alt="movie"
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${
              rightAnswers[questionNumber - 1].poster
            }`}
          />
        </Box>
      </Box>
      <Grid
        p={5}
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <Button
            color="secondary"
            xs={6}
            sx={{ p: 6, width: 1 }}
            variant="contained"
            size="large"
            onClick={handleAnswer1}
          >
            <Typography
              sx={{ fontFamily: `'Happy Monkey', cursive` }}
              variant="h5"
            >
              {shuffledQuestions[questionNumber - 1][0]}
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            color="secondary"
            xs={6}
            sx={{ p: 6, width: 1 }}
            variant="contained"
            size="large"
            onClick={handleAnswer2}
          >
            <Typography
              sx={{ fontFamily: `'Happy Monkey', cursive` }}
              variant="h5"
            >
              {shuffledQuestions[questionNumber - 1][1]}
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            color="secondary"
            xs={6}
            sx={{ p: 6, width: 1 }}
            variant="contained"
            size="large"
            onClick={handleAnswer3}
          >
            <Typography
              sx={{ fontFamily: `'Happy Monkey', cursive` }}
              variant="h5"
            >
              {shuffledQuestions[questionNumber - 1][2]}
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            color="secondary"
            xs={6}
            sx={{ p: 6, width: 1 }}
            variant="contained"
            size="large"
            onClick={handleAnswer4}
          >
            <Typography
              sx={{ fontFamily: `'Happy Monkey', cursive` }}
              variant="h5"
            >
              {shuffledQuestions[questionNumber - 1][3]}
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Typography gutterBottom variant="h4">
        Question number: {questionNumber}
      </Typography>
      <Typography variant="h4">Score: {score}</Typography>
    </Box>
  );
}
