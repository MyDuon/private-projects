import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import BasicCard from "./Card/Card";
import calculator from "../resources/calculator.png";
import movie from "../resources/movie-app.png";
import tictactoe from "../resources/tic-tac-toe.png";
import todoList from "../resources/todo-list.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <BasicCard name={"Streaming"} link="/streaming" url={movie}>
            streaming
          </BasicCard>
        </Grid>
        <Grid size={6}>
          <BasicCard name={"Calculator"} link="/calculator" url={calculator}>
            {/*url={calculator}*/}
            calculator
          </BasicCard>
        </Grid>
        <Grid size={6}>
          <BasicCard name={"Tic Tac Toe"} link="/tictactoe" url={tictactoe}>
            tic tac toe
          </BasicCard>
        </Grid>
        <Grid size={6}>
          <BasicCard name={"Todo-list"} link="/todolist" url={todoList}>
            todo list
          </BasicCard>
        </Grid>
      </Grid>
    </Box>
  );
}
