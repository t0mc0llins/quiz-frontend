import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovies } from "../../store/homePage/actions";
import { selectMovies } from "../../store/homePage/selectors";
import { ImageList, ImageListItem, Container, Button } from "@mui/material";
import { apiUrlPoster } from "../../config/constants";
import "./style.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const listOfMovies = useSelector(selectMovies);

  console.log("listOfMovies= ", listOfMovies);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);
  return (
    <>
      {/* <h1>Welcome to Movie Quiz</h1> */}
      <ImageList variant="quilted" cols={4} rowHeight={195}>
        {listOfMovies.map((item) => (
          <ImageListItem key={item.id}>
            <img
              alt={item.title}
              loading="lazy"
              src={`${apiUrlPoster}${item.backdrop_path}`}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Button className="home-page-button">Start Game</Button>
    </>
  );
}
