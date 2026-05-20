import Home from "./components/Home/Home";
import "./App.css";
import Projects from "./components/Projects/Projects";
import ProjectOne from "./components/Projects/ProjectOne";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/view" element={<ProjectOne />} />
      </Routes>
    </BrowserRouter>
  );
}