import { TextField, Box, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postScore } from "../../store/scoreboardPage/actions";
import { selectScore } from "../../store/game/selectors";
import "./style.css";

export default function NewScoreForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  //need to get score-data from state?(or as a props from prev-page)
  const score = useSelector(selectScore);
  console.log(score);
  const submit = (event) => {
    event.preventDefault();
    console.log("name= ", name);
    // need to dispatch name and score to db
    // need to redirect to scoreboard
    dispatch(postScore(name, score));
    setName(" ");
  };
  return (
    <Box className="form-page">
      <form className="content" onSubmit={submit}>
        <Typography>Your score {score}</Typography>
        <TextField
          required
          value={name}
          label="Enter name"
          onChange={(e) => setName(e.target.value)}
        ></TextField>
      </form>
    </Box>
  );
}
