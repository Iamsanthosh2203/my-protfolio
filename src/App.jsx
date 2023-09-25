import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import AboutPage from "./pages/AboutPage";
import WorksPages from "./pages/WorksPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works" element={<WorksPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
