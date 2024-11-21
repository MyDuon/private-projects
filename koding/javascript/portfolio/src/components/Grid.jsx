import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import BasicCard from "./Card";

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
        <Grid size={4}>
          <BasicCard name={"Streaming"}>streaming</BasicCard>
        </Grid>
        <Grid size={4}>
          <BasicCard name={"Calculator"}>calculator</BasicCard>
        </Grid>
        <Grid size={4}>
          <BasicCard name={"Tic Tac Toe"}>tic tac toe</BasicCard>
        </Grid>
        <Grid size={4}>
          <BasicCard name={"Todo-list"}>todo list</BasicCard>
        </Grid>
        <Grid size={4}>
          <BasicCard name={"Test"}>test</BasicCard>
        </Grid>
        <Grid size={4}>
          <BasicCard name={"Test2"}>test2</BasicCard>
        </Grid>
      </Grid>
    </Box>
  );
}
