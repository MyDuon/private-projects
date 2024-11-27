import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MainPage from "./pages/MainPage";
import Calculator_page from "./pages/Calculator-page";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/calculator" element={<Calculator_page />} />
      </Routes>
    </>
  );
}

export default App;
