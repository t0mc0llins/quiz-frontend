import { Typography } from "@mui/material";
import React from "react";

export default function Question() {
  return (
    <Typography
      sx={{ fontFamily: `'Happy Monkey', cursive` }}
      variant="h3"
      gutterBottom
      component="div"
    >
      What was the first movie in the Marvel Cinematic Universe?
    </Typography>
  );
}
