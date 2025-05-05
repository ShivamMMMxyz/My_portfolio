import React from "react";
import StarsCanvas from "./components/StarsCanvas";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <StarsCanvas />

      <Navbar />

      <section id="home" className="section">
        <Home />
      </section>

      <section id="about" className="section">
        <About />
      </section>

      <section id="project" className="section">
        <Projects />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  );
}

export default App;
