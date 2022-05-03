import React, { useEffect } from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectQuestions } from "../../store/gamePage/selectors";
import {
  generateRandomQuestions,
  getUserAnswer,
} from "../../store/gamePage/actions";
import AnswerButton from "../../components/AnswerButton";

export default function QuestionPage() {
  const questions = useSelector(selectQuestions);
  const dispatch = useDispatch();
  console.log(questions?.question);

  useEffect(() => {}, [questions, dispatch]);
  return (
    <Container
      sx={{
        mt: 3,
        p: 2,
        borderRadius: "20px",
        background: "gray",
        height: 1,
        width: 1,
        justifyContent: "center",
        backgroundImage: `url("https://img.freepik.com/free-vector/background-seamless-pattern-vector-with-cute-memphis_53876-105506.jpg?t=st=1651568714~exp=1651569314~hmac=48d3518156d3f1f235fe7e9a69ea5fd042d7846e2ff2a6e2cd3eb69d8289330f&w=1380")`,
      }}
    >
      {/* <Typography
        sx={{ m: 2, color: "primary.main", fontWeight: "400" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        MOVIE QUIZ
      </Typography> */}
      <Box sx={{ mt: 2, height: "100%" }}>
        <Typography
          sx={{
            color: "#613538",
            fontFamily: `'Happy Monkey', cursive`,
            fontWeight: "bold",
          }}
          variant="h3"
          gutterBottom
          component="div"
        >
          {questions?.question}
          {/* What was the first movie in the Marvel Cinematic Universe? */}
        </Typography>
      </Box>

      <Box
        component="img"
        sx={{
          mt: 3,
          height: 350,
          borderRadius: "10px",
        }}
        alt="The house from the offer."
        src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg"
      />

      <AnswerButton
        ans1="ANSWER1"
        ans2="ANSWER1"
        ans3="ANSWER1"
        ans4="ANSWER1"
      />
    </Container>
  );
}
