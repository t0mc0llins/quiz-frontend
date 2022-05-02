import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

export default function QuestionButtons() {
  return (
    <Box sx={{ mt: 5 }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Button
            color="secondary"
            xs={6}
            sx={{ p: 6, width: 1 }}
            variant="contained"
            size="large"
          >
            <Typography
              sx={{ fontFamily: `'Happy Monkey', cursive` }}
              variant="h5"
            >
              Gaffer
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            color="secondary"
            xs={6}
            sx={{ p: 6, width: 1 }}
            variant="contained"
            size="large"
          >
            <Typography
              sx={{ fontFamily: `'Happy Monkey', cursive` }}
              variant="h5"
            >
              Splicer
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            color="secondary"
            xs={6}
            sx={{ p: 6, width: 1 }}
            variant="contained"
            size="large"
          >
            <Typography
              sx={{ fontFamily: `'Happy Monkey', cursive` }}
              variant="h5"
            >
              Best boy
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            color="secondary"
            xs={6}
            sx={{ p: 6, width: 1 }}
            variant="contained"
            size="large"
          >
            <Typography
              sx={{ fontFamily: `'Happy Monkey', cursive` }}
              variant="h5"
            >
              Key Grip
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
