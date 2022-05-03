import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateYearQuestions } from "../../store/question/actions";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { selectQuestionCounter } from "../../store/game/selectors";
import { selectYearRightAnswers } from "../../store/question/selector";

export default function YearQuiz() {
  const dispatch = useDispatch();
  const questionNumber = useSelector(selectQuestionCounter);
  const rightAnswers = useSelector(selectYearRightAnswers);
  // const wrongAnswers = fd;

  useEffect(() => {
    dispatch(generateYearQuestions);
  }, []);

  return (
    <Box sx={{ mt: 5 }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Button
            color="secondary"
            xs={6}
            sx={{ p: 6, width: 1 }}
            variant="contained"
            size="large"
          >
            <Typography
              sx={{ fontFamily: `'Happy Monkey', cursive` }}
              variant="h5"
            >
              Gaffer
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
          >
            <Typography
              sx={{ fontFamily: `'Happy Monkey', cursive` }}
              variant="h5"
            >
              Splicer
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
          >
            <Typography
              sx={{ fontFamily: `'Happy Monkey', cursive` }}
              variant="h5"
            >
              Best boy
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
          >
            <Typography
              sx={{ fontFamily: `'Happy Monkey', cursive` }}
              variant="h5"
            >
              Key Grip
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Typography>{questionNumber}</Typography>
    </Box>
  );
}
