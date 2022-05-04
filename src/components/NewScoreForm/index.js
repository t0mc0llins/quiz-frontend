import { TextField, Box, Typography } from "@mui/material";
import { useState } from "react";
import "./style.css";

export default function NewScoreForm() {
  const [name, setName] = useState("");

  //   need to get score-data from state?(or as a props from prev-page)

  const submit = (event) => {
    event.preventDefault();
    console.log("name= ", name);
    // need to dispatch name and score to db
    // need to redirect to scoreboard
  };
  return (
    <Box className="form-page">
      <form onSubmit={submit}>
        <Typography>Your score 78</Typography>
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
