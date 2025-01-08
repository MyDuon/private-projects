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

  const remove = (calc) => {
    if (calc.length > 1) {
      var tmp = calc.slice(0, -1);
      setCalc(tmp);
    } else {
      reset();
    }
  };
  return (
    <>
      <Header />
      <div className="calculator-container">
        <h1 className="calculator-header">Calculator</h1>
        <div className="calculator-margin-wrapper">
          <div className="number-field">{calc}</div>
          <div className="calculator-grid">
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("7")}
            >
              7
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("8")}
            >
              8
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("9")}
            >
              9
            </button>
            <button
              type="button"
              className="button"
              onClick={() => remove(calc)}
            >
              DEL
            </button>
            <button type="button" className="button" onClick={() => reset()}>
              CE
            </button>

            <button
              type="button"
              className="button"
              onClick={() => updateCalc("4")}
            >
              4
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("5")}
            >
              5
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("6")}
            >
              6
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("-")}
            >
              -
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("*")}
            >
              *
            </button>

            <button
              type="button"
              className="button"
              onClick={() => updateCalc("1")}
            >
              1
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("2")}
            >
              2
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("3")}
            >
              3
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("/")}
            >
              /
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("+")}
            >
              +
            </button>

            <button
              type="button"
              className="button"
              onClick={() => updateCalc("0")}
            >
              0
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc(".")}
            >
              .
            </button>
            <button
              type="button"
              className="button"
              onClick={() => calculate(calc)}
            >
              =
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("(")}
            >
              (
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc(")")}
            >
              )
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CalculatorPage;
