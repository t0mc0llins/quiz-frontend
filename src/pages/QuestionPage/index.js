import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { useSelector } from "react-redux";
import AnswerButton from "../../components/AnswerButton";
import { selectQuestionCounter, selectScore } from "../../store/game/selectors";
import { selectRightAnswers } from "../../store/question/selector";

export default function QuestionPage(props) {
  const score = useSelector(selectScore);
  const questionNumber = useSelector(selectQuestionCounter);
  const rightAnswers = useSelector(selectRightAnswers);

  return (
    <div>
      <Box sx={{ mt: 3, display: "flex", justifyContent: "space-around" }}>
        <Typography
          sx={{
            textAlign: "left",
            mb: 1,
            color: "black",
            fontWeight: "bold",
            fontFamily: `'Happy Monkey', cursive`,
          }}
          variant="h5"
          gutterBottom
          component="div"
        >
          Your Score : {score}
        </Typography>
        <Typography
          sx={{
            textAlign: "right",
            mb: 1,
            color: "black",
            fontWeight: "bold",
            fontFamily: `'Happy Monkey', cursive`,
          }}
          variant="h5"
          gutterBottom
          component="div"
        >
          Question {questionNumber} of 12
        </Typography>
      </Box>
      <Container
        sx={{
          mt: 3,
          p: 2,
          borderRadius: "20px",
          background: "gray",
          height: 1,
          width: 1,
          userSelect: "none",
          justifyContent: "center",
          backgroundImage: `url("https://img.freepik.com/free-vector/background-seamless-pattern-vector-with-cute-memphis_53876-105506.jpg?t=st=1651568714~exp=1651569314~hmac=48d3518156d3f1f235fe7e9a69ea5fd042d7846e2ff2a6e2cd3eb69d8289330f&w=1380")`,
        }}
      >
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
            {props.title}
          </Typography>
        </Box>

        <Box
          component="img"
          sx={{
            mt: 3,
            height: 350,
            borderRadius: "10px",
          }}
          alt="Movie"
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${
            rightAnswers[questionNumber - 1].poster
          }`}
        />

        <AnswerButton
          handleAnswer1={props.handleAnswer1}
          handleAnswer2={props.handleAnswer2}
          handleAnswer3={props.handleAnswer3}
          handleAnswer4={props.handleAnswer4}
        />
      </Container>
    </div>
  );
}
