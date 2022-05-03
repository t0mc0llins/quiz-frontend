import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import rightIcon from "../../assests/right.gif";
import wrongIcon from "../../assests/wrong2.gif";
import "./styles.css";

export default function RowAndColumnSpacing(props) {
  const [button, setButton] = React.useState(false);
  return (
    <Box sx={{ mt: 4, mb: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setButton(true);
            }}
            color="secondary"
            xs={6}
            sx={{ width: 1, height: "130px", borderRadius: "15px" }}
            variant="contained"
            size="large"
          >
            <Typography
              className="main-button"
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: `'Happy Monkey', cursive`,
              }}
              variant="h5"
            >
              <div sx={{ alignItems: "center", display: "flex" }}>
                {props.ans1}
              </div>
              <div>
                {button ? (
                  <img
                    className="icons"
                    sx={{ height: "100px!important" }}
                    src={rightIcon}
                    alt="loading..."
                  />
                ) : (
                  ""
                )}
              </div>
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setButton(true);
            }}
            color="secondary"
            xs={6}
            sx={{ width: 1, height: "130px", borderRadius: "15px" }}
            variant="contained"
            size="large"
          >
            <Typography
              className="main-button"
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: `'Happy Monkey', cursive`,
              }}
              variant="h5"
            >
              <div sx={{ alignItems: "center", display: "flex" }}>
                {props.ans1}
              </div>
              <div>
                {button ? (
                  <img className="icons" src={wrongIcon} alt="loading..." />
                ) : (
                  ""
                )}
              </div>
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setButton(true);
            }}
            color="secondary"
            xs={6}
            sx={{ width: 1, height: "130px", borderRadius: "15px" }}
            variant="contained"
            size="large"
          >
            <Typography
              className="main-button"
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: `'Happy Monkey', cursive`,
              }}
              variant="h5"
            >
              <div sx={{ alignItems: "center", display: "flex" }}>
                {props.ans1}
              </div>
              <div>
                {button ? (
                  <img
                    className="icons"
                    sx={{ height: "100px!important" }}
                    src={wrongIcon}
                    alt="loading..."
                  />
                ) : (
                  ""
                )}
              </div>
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={() => {
              setButton(true);
            }}
            color="secondary"
            xs={6}
            sx={{ width: 1, height: "130px", borderRadius: "15px" }}
            variant="contained"
            size="large"
          >
            <Typography
              className="main-button"
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: `'Happy Monkey', cursive`,
              }}
              variant="h5"
            >
              <div sx={{ alignItems: "center", display: "flex" }}>
                {props.ans1}
              </div>
              <div>
                {button ? (
                  <img className="icons" src={wrongIcon} alt="loading..." />
                ) : (
                  ""
                )}
              </div>
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
