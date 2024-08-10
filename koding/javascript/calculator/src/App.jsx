import "./App.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";

function App() {
  const [number, SetNumber] = useState(0);

  const [number2, SetNumber2] = useState(0);

  return (
    <>
      <div className="calculator">
        <div className="screen">{number}</div>
        <div className="buttons">
          <Stack className="first-row" direction="row" spacing={1}>
            <Button variant="contained" onClick={() => console.log("TEST!")}>
              7
            </Button>
            <Button variant="contained">8</Button>
            <Button variant="contained">9</Button>
            <Button variant="contained" onClick={() => SetNumber(number + 1)}>
              +
            </Button>
            <Button variant="contained">-</Button>
          </Stack>
          <br />
          <Stack className="second-row" direction="row" spacing={1}>
            <Button variant="contained">4</Button>
            <Button variant="contained">5</Button>
            <Button variant="contained">6</Button>
            <Button variant="contained">*</Button>
            <Button variant="contained">/</Button>
          </Stack>
          <br />
          <Stack className="third-row" direction="row" spacing={1}>
            <Button variant="contained">1</Button>
            <Button variant="contained">2</Button>
            <Button variant="contained">3</Button>
            <Button variant="contained">=</Button>
            <Button className="clear-entry" variant="contained">
              CE
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
}

export default App;
