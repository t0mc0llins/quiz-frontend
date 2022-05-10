import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllScores } from "../../store/scoreboardPage/actions";
import { selectScoreboard } from "../../store/scoreboardPage/selectors";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

import "./style.css";
import { Link } from "@mui/material";

export default function ScoreboardPage() {
  const dispatch = useDispatch();
  const scoreboard = useSelector(selectScoreboard);

  useEffect(() => {
    dispatch(fetchAllScores());
  }, []);

  return (
    <Container className="table-container">
      <Box mb={7} className="title">
        HIGH SCORES{" "}
      </Box>
      <TableContainer>
        <Table size="small">
          <TableHead className="table-head" />
          <TableBody>
            {scoreboard.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="table-cell">{item.username}</TableCell>
                <TableCell className="table-cell">{item.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="buttons-container">
        <Box className="button-scoreboard">
          <Link className="play-again-button" href="/game">
            Play again
          </Link>
        </Box>
        <Box className="button-scoreboard">
          <Link className="play-again-button" href="/">
            Home Page
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
