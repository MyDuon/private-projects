import HomePage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";
import MovieAppPage from "./pages/MovieAppPage";
import TicTacToePage from "./pages/TicTacToePage";
import TodoListPage from "./pages/TodoListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />{" "}
          {/*Kan legge til errorelement attributt senere */}
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/streaming" element={<MovieAppPage />} />
          <Route path="/tictactoe" element={<TicTacToePage />} />
          <Route path="/todolist" element={<TodoListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
