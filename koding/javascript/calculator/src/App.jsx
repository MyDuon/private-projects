import "./App.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [calc, setCalc] = useState("0");

  const updateCalc = (value) => {
    if (
      (value === "0" && calc === "0") ||
      (operation.includes(value) && calc === "0") ||
      (operation.includes(value) && operation.includes(calc.slice(-1)))
    ) {
      return;
    } else if (calc === "0" && numbers.includes(value)) {
      //   setCalc(slice eval(calc + value));
    }
    setCalc(calc + value);
  };

  const calculate = () => {
    const result = eval(calc);
    console.log(result);
  };

  const operation = ["+", "-", "*", "/", "."];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <>
      <div className="calculator">
        <div className="screen">{calc}</div>
        <div className="buttons">
          <Stack className="first-row" direction="row" spacing={1}>
            <Button variant="contained" onClick={() => updateCalc("7")}>
              7
            </Button>
            <Button variant="contained" onClick={() => updateCalc("8")}>
              8
            </Button>
            <Button variant="contained" onClick={() => updateCalc("9")}>
              9
            </Button>
            <Button variant="contained" onClick={() => updateCalc("0")}>
              0
            </Button>
            <Button variant="contained" onClick={() => updateCalc("+")}>
              +
            </Button>
            <Button variant="contained" onClick={() => updateCalc("-")}>
              -
            </Button>
          </Stack>
          <br />
          <Stack className="second-row" direction="row" spacing={1}>
            <Button variant="contained" onClick={() => updateCalc("4")}>
              4
            </Button>
            <Button variant="contained" onClick={() => updateCalc("5")}>
              5
            </Button>
            <Button variant="contained" onClick={() => updateCalc("6")}>
              6
            </Button>
            <Button variant="contained" onClick={() => updateCalc("*")}>
              *
            </Button>
            <Button variant="contained" onClick={() => updateCalc("/")}>
              /
            </Button>
          </Stack>
          <br />
          <Stack className="third-row" direction="row" spacing={1}>
            <Button variant="contained" onClick={() => updateCalc("1")}>
              1
            </Button>
            <Button variant="contained" onClick={() => updateCalc("2")}>
              2
            </Button>
            <Button variant="contained" onClick={() => updateCalc("3")}>
              3
            </Button>
            <Button variant="contained" onClick={() => calculate()}>
              =
            </Button>
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
