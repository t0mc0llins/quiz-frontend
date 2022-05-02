import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFourMovies,
  generateYearQuestions,
} from "../../store/question/actions";
import { selectFourMovies } from "../../store/question/selector";

export default function QuizApi() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFourMovies);
  }, []);

  const movies = useSelector(selectFourMovies);

  useEffect(() => {
    dispatch(generateYearQuestions(movies));
  }, [movies]);

  return <Button variant="contained">Contained</Button>;
}
