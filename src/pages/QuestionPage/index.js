import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Question from "../../components/Question";
import AnswerButton from "../../components/AnswerButton";

export default function QuestionPage() {
  return (
    <Container
      sx={{
        mt: 5,
        p: 2,
        borderRadius: "20px",
        background: "white",
      }}
      fixed
    >
      <Typography
        sx={{ m: 4, color: "primary.main", fontWeight: "400" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        MOVIE QUIZ
      </Typography>
      <Box sx={{ height: "fit-content", p: 2 }}>
        <Question />
      </Box>

      <Box
        sx={{
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
