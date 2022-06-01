import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/index.js";
import Cards from "./components/cards/index.js";
import "./App.css";
import Home from "./pages/Home/index.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
