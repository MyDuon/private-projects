import "./App.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("0");
  const operation = ["+", "-", "*", "/", "."];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var tmp = 0;

  const updateCalc = (value) => {
    if (
      (value === "0" && calc === "0") ||
      (operation.includes(value) && calc === "0")
    ) {
      return;
    } else if (calc === "0" && numbers.includes(value)) {
      setCalc(eval(value));
      return;
    }
    setCalc(calc + value);
  };

  const calculate = (calculation) => {
    if (
      calculation.endsWith("+") ||
      calculation.endsWith("-") ||
      calculation.endsWith("*") ||
      calculation.endsWith("/")
    ) {
      var test = calculation.slice(0, -1);
      console.log(test);
      tmp = eval(test);
      setCalc(tmp);
      return;
    }
    tmp = eval(calculation);
    setCalc(tmp);
  };

  const reset = () => {
    setCalc("0");
  };

  return (
    <>
      <div className="calculator-wrapper">
        <div className="test">
          <div className="screen">
            <h1>{calc}</h1>
          </div>
          <div className="buttons">
            <Stack className="first-row" direction="row" spacing={1}>
              <Button variant="contained" onClick={() => updateCalc("7")}>
                <h1 className="test">7</h1>
              </Button>
              <Button
                className="test"
                variant="contained"
                onClick={() => updateCalc("8")}
              >
                <h1>8</h1>
              </Button>
              <Button variant="contained" onClick={() => updateCalc("9")}>
                <h1>9</h1>
              </Button>
              <Button variant="contained" onClick={() => updateCalc("0")}>
                <h1>0</h1>
              </Button>
              <Button variant="contained" onClick={() => updateCalc("+")}>
                <h1>+</h1>
              </Button>
              <Button variant="contained" onClick={() => updateCalc("-")}>
                <h1>-</h1>
              </Button>
            </Stack>
            <br />
            <Stack className="second-row" direction="row" spacing={1}>
              <Button variant="contained" onClick={() => updateCalc("4")}>
                <h1>4</h1>
              </Button>
              <Button variant="contained" onClick={() => updateCalc("5")}>
                <h1>5</h1>
              </Button>
              <Button variant="contained" onClick={() => updateCalc("6")}>
                <h1>6</h1>
              </Button>
              <Button variant="contained" onClick={() => updateCalc("*")}>
                <h1>*</h1>
              </Button>
              <Button variant="contained" onClick={() => updateCalc("/")}>
                <h1>/</h1>
              </Button>
            </Stack>
            <br />
            <Stack className="third-row" direction="row" spacing={1}>
              <Button variant="contained" onClick={() => updateCalc("1")}>
                <h1>1</h1>
              </Button>
              <Button variant="contained" onClick={() => updateCalc("2")}>
                <h1>2</h1>
              </Button>
              <Button variant="contained" onClick={() => updateCalc("3")}>
                <h1>3</h1>
              </Button>
              <Button variant="contained" onClick={() => calculate(calc)}>
                <h1>=</h1>
              </Button>
              <Button
                className="clear-entry"
                onClick={() => reset()}
                variant="contained"
              >
                <h1>CE</h1>
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
