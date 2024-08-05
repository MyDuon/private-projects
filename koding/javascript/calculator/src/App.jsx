import "./App.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <>
      <div className="calculator">
        <div className="screen">128940</div>
        <div className="buttons">
          <Stack className="first-row" direction="row" spacing={1}>
            <Button variant="contained">7</Button>
            <Button variant="contained">8</Button>
            <Button variant="contained">9</Button>
            <Button variant="contained">+</Button>
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
