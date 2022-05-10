import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postScore } from "../../store/scoreboardPage/actions";
import { selectScore } from "../../store/game/selectors";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function NewScoreForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [waiting, setWaiting] = useState(false);

  const score = useSelector(selectScore);
  const submit = (event) => {
    event.preventDefault();
    dispatch(postScore(name, score));
    setName("");
    setWaiting(true);
    setTimeout(() => navigate("/scoreboard"), 1000);
  };
  return (
    <div className="content">
      <Typography
        sx={{
          paddingTop: "20",
          fontFamily: `'Happy Monkey', cursive`,
        }}
        variant="h2"
        component="h2"
      >
        Enter Your Name
      </Typography>
      <form className="child" onSubmit={submit}>
        <Typography
          variant="h3"
          sx={{ p: 2, fontFamily: `'Happy Monkey', cursive` }}
        >
          Your score: {score}
        </Typography>
        <TextField
          sx={{
            fontSize: "26px",
            fontFamily: `'Happy Monkey', cursive`,
          }}
          required
          value={name}
          label="Enter name"
          onChange={(e) => setName(e.target.value)}
        ></TextField>
      </form>
      {waiting ? <p>Loading...</p> : <></>}
    </div>
  );
}
