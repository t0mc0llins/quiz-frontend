import React from "react";
import { useState, useEffect, useRef } from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/gamePage/selectors";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate, Redirect } from "react-router-dom";
import { formControlUnstyledClasses } from "@mui/base";

const options = {
  0: { link: "/actor", text: "Actors" },
  1: { link: "/year", text: "Year" },
  2: { link: "/director", text: "Director" },
  3: { link: "/odd", text: "Odd" },
};

const SpinningWheel = () => {
  const canvasRef = useRef();
  const categories = useSelector(selectCategories);
  const navigate = useNavigate();

  const [state, setState] = useState({
    radius: 75, // PIXELS
    rotate: 0, // DEGREES
    easeOut: 0, // SECONDS
    angle: 0, // RADIANS
    top: null, // INDEX
    offset: null, // RADIANS
    net: null, // RADIANS
    result: null, // INDEX
    spinning: false,
  });

  const renderWheel = () => {
    // determine number/size of sectors that need to created
    let numOptions = categories.length;
    let arcSize = (2 * Math.PI) / numOptions;
    // get index of starting position of selector
    const start = topPosition(numOptions, arcSize);
    setState({
      ...state,
      top: start.top,
      offset: start.offset,
      angle: arcSize,
    });

    // dynamically generate sectors from state list
    let angle = 0;
    for (let i = 0; i < numOptions; i++) {
      let text = categories[i];
      renderSector(i + 1, text, angle, arcSize, getColor());
      angle += arcSize;
    }
  };

  const topPosition = (num, angle) => {
    // set starting index and angle offset based on list length
    // works upto 9 options
    let topSpot = null;
    let degreesOff = null;
    if (num === 9) {
      topSpot = 7;
      degreesOff = Math.PI / 2 - angle * 2;
    } else if (num === 8) {
      topSpot = 6;
      degreesOff = 0;
    } else if (num <= 7 && num > 4) {
      topSpot = num - 1;
      degreesOff = Math.PI / 2 - angle;
    } else if (num === 4) {
      topSpot = num - 1;
      degreesOff = 0;
    } else if (num <= 3) {
      topSpot = num;
      degreesOff = Math.PI / 2;
    }
    return { top: topSpot - 1, offset: degreesOff };
  };

  const renderSector = (index, text, start, arc, color) => {
    // create canvas arc for each list element
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let radius = state.radius;
    let startAngle = start;
    let endAngle = start + arc;
    let angle = index * arc;
    let baseSize = radius * 3.33;
    let textRadius = baseSize - 150;

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, false);
    ctx.lineWidth = radius * 2;
    ctx.strokeStyle = color;

    ctx.font = "17px Arial";
    ctx.fillStyle = "black";
    ctx.stroke();

    ctx.save();
    ctx.translate(
      baseSize + Math.cos(angle - arc / 2) * textRadius,
      baseSize + Math.sin(angle - arc / 2) * textRadius
    );
    ctx.rotate(angle - arc / 2 + Math.PI / 2);
    ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
    ctx.restore();
  };

  const getColor = () => {
    // randomly generate rbg values for wheel sectors
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},0.4)`;
  };

  const spin = () => {
    // set random spin degree and ease out time
    // set state variables to initiate animation
    let randomSpin = Math.floor(Math.random() * 900) + 500;

    setState({
      ...state,
      rotate: randomSpin,
      easeOut: 2,
      spinning: true,
    });
  };
  useEffect(() => {
    if (state.spinning) {
      setTimeout(() => {
        const results = getResult(state.rotate);
        setState({
          ...state,
          spinning: false,
          net: results.netRotation,
          result: results.result,
        });
      }, 2000);
    }
  }, [state]);

  const reset = () => {
    // reset wheel and result
    setState({
      ...state,
      rotate: 0,
      easeOut: 0,
      result: null,
      spinning: false,
    });
  };
  const getResult = (spin) => {
    // find net rotation and add to offset angle
    // repeat substraction of inner angle amount from total distance traversed
    // use count as an index to find value of result from state list
    const { angle, top, offset } = state;
    let netRotation = ((spin % 360) * Math.PI) / 180; // RADIANS
    let travel = netRotation + offset;
    let count = top + 1;
    let limit = 10;

    while (travel > 0) {
      travel = travel - angle;
      count--;
      limit = limit - 1;
    }
    let result;
    if (count >= 0) {
      result = count;
    } else {
      result = categories.length + count;
    }

    // set state variable to display result
    return { net: netRotation, result: result };
  };

  useEffect(() => {
    if (canvasRef.current && categories) {
      renderWheel();
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigate(options[state.result].link);
    }, 1000);
  }, [state.result]);

  let reddirectedLink =
    state.result !== null ? (
      <Link
        style={{ padding: "10px", textDecoration: "none" }}
        to={options[state.result].link}
      >
        {options[state.result].text}
      </Link>
    ) : null;

  return (
    <div>
      {" "}
      <Typography
        sx={{ p: 2, fontFamily: `'Happy Monkey', cursive`, color: "white" }}
        variant="h2"
        component="h2"
      >
        Spin the Wheel
      </Typography>
      <Box className="Wheel">
        <Box>
          <span id="selector">&#9660;</span>
          <canvas
            id="wheel"
            width="500"
            height="500"
            ref={canvasRef}
            style={{
              margin: 0,
              letterSpacing: 2,
              fontFamily: "Happy Monkey ",
              fontSize: 7,
              color: "white",
              height: 750,
              WebkitTransform: `rotate(${state.rotate}deg)`,
              WebkitTransition: `-webkit-transform ${state.easeOut}s ease-out`,
            }}
          />
        </Box>
        {state.spinning ? (
          <Button
            color="secondary"
            xs={6}
            sx={{
              p: 2,
              width: "250px",
              borderRadius: "15px",
              textAlign: "center",
              fontFamily: "Happy Monkey",
              letterSpacing: 5,
            }}
            variant="contained"
            onClick={() => reset()}
          >
            reset
          </Button>
        ) : (
          <Button
            color="secondary"
            xs={6}
            sx={{
              p: 2,
              width: "250px",
              borderRadius: "15px",
              textAlign: "center",
              fontFamily: "Happy Monkey",
              letterSpacing: 5,
            }}
            variant="contained"
            onClick={() => spin()}
          >
            spin
          </Button>
        )}
        <Box className="display" style={{ zIndex: 10 }}>
          <Typography id="readout">
            {" "}
            <span id="result">{reddirectedLink}</span>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
export default SpinningWheel;
