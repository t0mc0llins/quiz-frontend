import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovies } from "../../store/homePage/actions";
import { selectMovies } from "../../store/homePage/selectors";
import { ImageList, ImageListItem } from "@mui/material";

export default function HomePage() {
  const dispatch = useDispatch();
  const listOfMovies = useSelector(selectMovies);

  console.log("listOfMovies= ", listOfMovies);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>Welcome to Movie Quiz</h1>
        <ImageList variant="quilted" cols={10} rowHeight={121}></ImageList>
      </div>
    </>
  );
}
