import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import rightIcon from "../../assests/right.gif";
import wrongIcon from "../../assests/wrong2.gif";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectQuestionCounter,
  selectRoundProgress,
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
  const round = useSelector(selectRoundProgress);
  const correctButton = useSelector(selectCorrectButton);
  const [correct, setCorrect] = React.useState(4);
  const [incorrect1, setIncorrect1] = React.useState(false);
  const [incorrect2, setIncorrect2] = React.useState(false);
  const [incorrect3, setIncorrect3] = React.useState(false);
  const [incorrect4, setIncorrect4] = React.useState(false);
  const delayedCounter = setTimeout(dispatch(incrementQuestionCounter()), 3000);

  // if(0 !== correctButton[round]) {setIncorrect1(true)} - after timeout setIncorrect1(false)
  //   setCorrect(correctButton[round]) - after timeout setCorrect(4)
  const handleAnswer1 = () => {
    setCorrect(correctButton[round]);
    if (0 === correctButton[round]) {
      dispatch(incrementScore());
      delayedCounter();
    } else {
      setIncorrect1(true);
      delayedCounter();
      setIncorrect1(false);
    }
    setCorrect(4);
  };

  const handleAnswer2 = () => {
    setCorrect(correctButton[round]);
    if (1 === correctButton[round]) {
      dispatch(incrementScore());
      delayedCounter();
    } else {
      setIncorrect2(true);
      delayedCounter();
      setIncorrect2(false);
    }
    setCorrect(4);
  };

  const handleAnswer3 = () => {
    setCorrect(correctButton[round]);
    if (2 === correctButton[round]) {
      dispatch(incrementScore());
      delayedCounter();
    } else {
      setIncorrect3(true);
      delayedCounter();
      setIncorrect3(false);
    }
    setCorrect(4);
  };

  const handleAnswer4 = () => {
    setCorrect(correctButton[round]);
    if (3 === correctButton[round]) {
      dispatch(incrementScore());
      delayedCounter();
    } else {
      setIncorrect4(true);
      delayedCounter();
      setIncorrect4(false);
    }
    setCorrect(4);
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
