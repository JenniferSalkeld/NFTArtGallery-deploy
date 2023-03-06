import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Pinned from "./Pinned";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pins" element={<Pinned />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
