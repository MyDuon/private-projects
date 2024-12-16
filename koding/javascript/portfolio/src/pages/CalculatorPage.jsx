import Header from "../components/Header/Header";
import { useState } from "react";
import "./CalculatorPage.css";

function CalculatorPage() {
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
      <Header />
      <br />
      <h1 className="calculator-header">Calculator</h1>
      <div className="calculator-wrapper">
        <div className="test">
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
              <Button variant="contained" onClick={() => calculate(calc)}>
                =
              </Button>
              <Button
                className="clear-entry"
                onClick={() => reset()}
                variant="contained"
              >
                CE
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}
export default CalculatorPage;
