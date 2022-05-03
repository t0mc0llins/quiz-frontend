import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllScores } from "../../store/scoreboardPage/actions";
import { selectScoreboard } from "../../store/scoreboardPage/selectors";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./style.css";

export default function ScoreboardPage() {
  const dispatch = useDispatch();
  const scoreboard = useSelector(selectScoreboard);

  console.log("scoreboard= ", scoreboard);

  useEffect(() => {
    dispatch(fetchAllScores());
  }, [dispatch]);

  return (
    <TableContainer>
      <Table>
        <TableHead>HIGH SCORES</TableHead>
        <TableBody>
          {scoreboard.map((item) => (
            <TableRow>
              <TableCell>{item.username}</TableCell>
              <TableCell>{item.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
