import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFourMovies } from "../../store/question/actions";
import { selectFourMovies } from "../../store/question/selector";

export default function QuizApi() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFourMovies);
  }, []);

  const movies = useSelector(selectFourMovies);
  console.log(movies);
}
