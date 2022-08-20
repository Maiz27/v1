import React, { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Projects } from "./pages/projects/Projects";
import { About } from "./pages/about/About";
import { Navbar } from "./components/navBar/Navbar";
import { Skills } from "./components/skills/Skills";
import { Experience } from "./components/experience/Experience";
import { Education } from "./components/education/Education";

export const App = () => {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <>
      <Navbar active={activeNav} />

      <Routes>
        <Route path="/" element={<Home setActive={setActiveNav} />} />
        <Route path="/about" element={<About setActive={setActiveNav} />}>
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
        </Route>
        <Route
          path="/projects"
          element={<Projects setActive={setActiveNav} />}
        />
        {/* <Route path="/project/:projectId" element={<Projects />} /> */}
      </Routes>
    </>
  );
};
