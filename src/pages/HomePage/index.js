import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovies } from "../../store/homePage/actions";
import { selectMovies } from "../../store/homePage/selectors";
import {
  ImageList,
  ImageListItem,
  Container,
  Link,
  Typography,
  Box,
} from "@mui/material";
import { apiUrlPoster } from "../../config/constants";
import "./style.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const listOfMovies = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);
  return (
    <>
      <Container className="overlay"></Container>
      <Box className="title-box">
        <Typography className="line home-page-title" variant="h1">
          Welcome to the Movie Quiz
        </Typography>
        <Box className="home-page-buttons">
          <Link href="/game" className="home-page-button">
            Start Game
          </Link>
          <Link href="/scoreboard" className="home-page-button">
            Scoreboard
          </Link>
        </Box>
      </Box>
      <ImageList
        className="image-list-container"
        variant="quilted"
        cols={4}
        rowHeight={191}
      >
        {listOfMovies.map((item) => (
          <ImageListItem className="image-list-item" key={item.id}>
            <img
              alt={item.title}
              loading="lazy"
              src={`${apiUrlPoster}${item.backdrop_path}`}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
