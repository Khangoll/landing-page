import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Aboutme from "./components/Aboutme";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
// import Home from "./components/Home";
const App = () => {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Aboutme />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
