import HomePage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";
import StreamingPage from "./pages/StreamingPage";
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
          <Route path="/streaming" element={<StreamingPage />} />
          <Route path="/tictactoe" element={<TicTacToePage />} />
          <Route path="/todolist" element={<TodoListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
