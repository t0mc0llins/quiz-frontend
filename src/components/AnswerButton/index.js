import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import logo from "../../assests/logo.gif";
import { useSelector } from "react-redux";
import { selectQuestionCounter } from "../../store/game/selectors";
import { selectShuffledQuestions } from "../../store/question/selector";

export default function RowAndColumnSpacing(props) {
  const [button, setButton] = React.useState(false);
  const questionNumber = useSelector(selectQuestionCounter);
  const shuffledQuestions = useSelector(selectShuffledQuestions);

  return (
    <Box sx={{ mt: 4, mb: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              props.handleAnswer1();
            }}
            color="secondary"
            xs={6}
            sx={{ width: 1, borderRadius: "15px" }}
            variant="contained"
            size="large"
          >
            <Typography
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
                    sx={{ height: "100px!important" }}
                    src={logo}
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
              props.handleAnswer2();
            }}
            color="secondary"
            xs={6}
            sx={{ p: 6, width: 1, borderRadius: "15px" }}
            variant="contained"
            size="large"
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
            onClick={() => {
              props.handleAnswer3();
            }}
            color="secondary"
            xs={6}
            sx={{ p: 6, width: 1, borderRadius: "15px" }}
            variant="contained"
            size="large"
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
            onClick={() => {
              props.andleAnswer4();
            }}
            color="secondary"
            xs={6}
            sx={{ p: 6, width: 1, borderRadius: "15px" }}
            variant="contained"
            size="large"
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
    </Box>
  );
}
