import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
const App = () => {
  return (
    <>
      <div className="header-app">
        <Header />
      </div>
      <div className="main">
        <Home />
      </div>
      <div className="submain">
        <Skills />
      </div>
      <div className="submain">
        <Projects />
      </div>
      <div className="submain">
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default App;
