import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Question from "../../components/Question";
import AnswerButton from "../../components/AnswerButton";

export default function QuestionPage() {
  return (
    <Container fixed maxwidth="lg">
      <Typography
        sx={{
          p: 3,
          color: "primary.main",
          fontFamily: `'Happy Monkey', cursive`,
        }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Movie Quiz
      </Typography>
      <Box
        sx={{
          //   width: 1,
          height: "fit-content",
          backgroundColor: "rgb(74 72 72 / 42%)",
          color: "white",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          p: 2,
        }}
      >
        <Question />
      </Box>

      <Box
        sx={{
          //   width: 1,
          height: "fit-content",
          color: "white",
          pt: 2,
        }}
      >
        <AnswerButton />
      </Box>
    </Container>
  );
}
