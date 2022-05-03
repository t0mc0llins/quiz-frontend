import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

export default function RowAndColumnSpacing(props) {
  return (
    <Box sx={{ mt: 4, mb: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Button
            // onClick={props.click}
            color="secondary"
            xs={6}
            sx={{ p: 6, width: 1, borderRadius: "15px" }}
            variant="contained"
            size="large"
          >
            <Typography
              sx={{ fontFamily: `'Happy Monkey', cursive` }}
              variant="h5"
            >
              {props.ans1}
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            // onClick={props.click}
            color="secondary"
            xs={6}
            sx={{ p: 6, width: 1, borderRadius: "15px" }}
            variant="contained"
            size="large"
          >
            <Typography
              sx={{ fontFamily: `'Happy Monkey', cursive` }}
              variant="h5"
            >
              {props.ans2}
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            // onClick={props.click}
            color="secondary"
            xs={6}
            sx={{ p: 6, width: 1, borderRadius: "15px" }}
            variant="contained"
            size="large"
          >
            <Typography
              sx={{ fontFamily: `'Happy Monkey', cursive` }}
              variant="h5"
            >
              {props.ans3}
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            // onClick={props.click}
            color="secondary"
            xs={6}
            sx={{ p: 6, width: 1, borderRadius: "15px" }}
            variant="contained"
            size="large"
          >
            <Typography
              sx={{ fontFamily: `'Happy Monkey', cursive` }}
              variant="h5"
            >
              {props.ans4}
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
