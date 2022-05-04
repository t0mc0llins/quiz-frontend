import { useState, useEffect, useRef } from "react";
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
  const questionNumber = useSelector(selectQuestionCounter);
  const shuffledQuestions = useSelector(selectShuffledQuestions);
  const dispatch = useDispatch();
  const correctButton = useSelector(selectCorrectButton);

  const [timerState, setTimerState] = useState(null);
  const [timePassed, setTimePassed] = useState(0);
  const timeRef = useRef(timePassed);
  timeRef.current = timePassed;

  const [buttonsState, setButtonState] = useState([
    { id: 0, correct: false },
    { id: 1, correct: false },
    { id: 2, correct: false },
    { id: 3, correct: false },
  ]);

  // after user clicks => true
  // when we load the next question => false
  const [answered, setAnswered] = useState(false);

  const createInterval = () => {
    const timer = setInterval(() => {
      setTimePassed(timeRef.current + 1);
    }, 1000);

    setTimerState(timer);
  };

  useEffect(() => {
    createInterval();
  }, []);

  useEffect(() => {
    if (timeRef.current === 10) {
      console.log("Reset timer! next question");
      clearInterval(timerState);
      updateButtonState();
      // now time is up!
      // we need to set a timeout to let users check out the answers

      // setTimeout(() => {
      //   dispatch(incrementQuestionCounter());
      //   console.log("Delayed for 3 second.");
      // }, "1000");

      // when timeout is finished =>

      // 1. Reset buttonState + answered.
      setButtonState();
      // 2. Load next question
      // 3. Restart interval (10 secs)
    }
  }, [timeRef.current]);

  // console.log("correct", correctButton);

  const updateButtonState = () => {
    const updatedButtonState = buttonsState.map((b) => ({
      ...b,
      correct: b.id === correctButton[questionNumber - 1],
    }));
    setButtonState(updatedButtonState);
    setAnswered(true);
  };

  const handleClick = (buttonNr) => {
    // know which option was selected
    // check if it's the correct one
    const isCorrectAnswer = correctButton[questionNumber - 1] === buttonNr; // [0-3]
    // update all answers state + set answered to true
    updateButtonState();

    // if correct answer => increase score
    if (isCorrectAnswer) dispatch(incrementScore());
    dispatch(incrementQuestionCounter());
  };

  return (
    <Box sx={{ mt: 4, mb: 2 }}>
      <div>Timer: {10 - timePassed}</div>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {[0, 1, 2, 3].map((i) => (
          <Grid item xs={6}>
            <Button
              onClick={() => {
                handleClick(i);
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
                  {shuffledQuestions[questionNumber - 1][i]}
                </div>
                <div>
                  {answered &&
                    (buttonsState[i].correct ? (
                      <img
                        className="icons"
                        sx={{ height: "100px!important" }}
                        src={rightIcon}
                        alt="loading..."
                      />
                    ) : (
                      <img
                        className="icons"
                        sx={{ height: "100px!important" }}
                        src={wrongIcon}
                        alt="loading..."
                      />
                    ))}
                </div>
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
