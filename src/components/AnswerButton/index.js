import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import rightIcon from "../../assests/right.gif";
import wrongIcon from "../../assests/wrong2.gif";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCounterOffset,
  selectQuestionCounter,
} from "../../store/game/selectors";
import {
  selectCorrectButton,
  selectRightAnswers,
  selectShuffledQuestions,
} from "../../store/question/selector";
import {
  incrementQuestionCounter,
  incrementScore,
} from "../../store/game/actions";

export default function RowAndColumnSpacing() {
  const [button, setButton] = React.useState(false);
  const questionNumber = useSelector(selectQuestionCounter);
  const shuffledQuestions = useSelector(selectShuffledQuestions);
  const dispatch = useDispatch();
  const rightAnswers = useSelector(selectRightAnswers);
  const offset = useSelector(selectCounterOffset);
  const correct = useSelector(selectCorrectButton);

  // if(buttonId === correct[questionNumber-offset-1]) {
  //   setCorrect} else {sendCorrect image to buttonId === correct[questionNumber-offset-1]}

  const handleAnswer1 = () => {
    if (
      shuffledQuestions[questionNumber - 1][0] ===
      rightAnswers[questionNumber - 1].value
    ) {
      dispatch(incrementScore());
      dispatch(incrementQuestionCounter());
    } else {
      dispatch(incrementQuestionCounter());
    }
  };

  const handleAnswer2 = () => {
    if (
      shuffledQuestions[questionNumber - 1][1] ===
      rightAnswers[questionNumber - 1].value
    ) {
      dispatch(incrementScore());
      dispatch(incrementQuestionCounter());
    } else {
      dispatch(incrementQuestionCounter());
    }
  };

  const handleAnswer3 = () => {
    if (
      shuffledQuestions[questionNumber - 1][2] ===
      rightAnswers[questionNumber - 1].value
    ) {
      dispatch(incrementScore());
      dispatch(incrementQuestionCounter());
    } else {
      dispatch(incrementQuestionCounter());
    }
  };

  const handleAnswer4 = () => {
    if (
      shuffledQuestions[questionNumber - 1][3] ===
      rightAnswers[questionNumber - 1].value
    ) {
      dispatch(incrementScore());
      dispatch(incrementQuestionCounter());
    } else {
      dispatch(incrementQuestionCounter());
    }
  };

  return (
    <Box sx={{ mt: 4, mb: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setButton(true);
              handleAnswer1();
            }}
            color="secondary"
            xs={6}
            sx={{ width: 1, height: "130px", borderRadius: "15px" }}
            variant="contained"
            size="large"
          >
            <Typography
              className="main-button"
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: `'Happy Monkey', cursive`,
              }}
              variant="h5"
            >
              <div sx={{ alignItems: "center", display: "flex" }}>
                {shuffledQuestions[questionNumber - 1][0]}
              </div>
              <div>
                {button ? (
                  <img
                    className="icons"
                    sx={{ height: "100px!important" }}
                    src={rightIcon}
                    alt="loading..."
                  />
                ) : (
                  ""
                )}
              </div>
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setButton(true);
              handleAnswer2();
            }}
            color="secondary"
            xs={6}
            sx={{ width: 1, height: "130px", borderRadius: "15px" }}
            variant="contained"
            size="large"
          >
            <Typography
              className="main-button"
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: `'Happy Monkey', cursive`,
              }}
              variant="h5"
            >
              <div sx={{ alignItems: "center", display: "flex" }}>
                {shuffledQuestions[questionNumber - 1][1]}
              </div>
              <div>
                {button ? (
                  <img className="icons" src={wrongIcon} alt="loading..." />
                ) : (
                  ""
                )}
              </div>
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setButton(true);
              handleAnswer3();
            }}
            color="secondary"
            xs={6}
            sx={{ width: 1, height: "130px", borderRadius: "15px" }}
            variant="contained"
            size="large"
          >
            <Typography
              className="main-button"
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: `'Happy Monkey', cursive`,
              }}
              variant="h5"
            >
              <div sx={{ alignItems: "center", display: "flex" }}>
                {shuffledQuestions[questionNumber - 1][2]}
              </div>
              <div>
                {button ? (
                  <img
                    className="icons"
                    sx={{ height: "100px!important" }}
                    src={wrongIcon}
                    alt="loading..."
                  />
                ) : (
                  ""
                )}
              </div>
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setButton(true);
              handleAnswer4();
            }}
            color="secondary"
            xs={6}
            sx={{ width: 1, height: "130px", borderRadius: "15px" }}
            variant="contained"
            size="large"
          >
            <Typography
              className="main-button"
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: `'Happy Monkey', cursive`,
              }}
              variant="h5"
            >
              <div sx={{ alignItems: "center", display: "flex" }}>
                {shuffledQuestions[questionNumber - 1][3]}
              </div>
              <div>
                {button ? (
                  <img className="icons" src={wrongIcon} alt="loading..." />
                ) : (
                  ""
                )}
              </div>
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
