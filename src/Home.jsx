import React, { useContext } from "react";
import Header from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import About from "./Components/About/About.jsx";
import { colorTemContext } from "./context/TemColorContext";
import Skills  from "./Components/Skills/Skills";
import Testimonials from "./Components/Testimonials/Testimonials";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Contact/Contact";
export const Home = () => {
  const { colors } = useContext(colorTemContext);
  return (
    <div className={`${colors.backColor + "b"}`}>
      <Navbar />
      <Header />
      <div className={`${colors.backColor + "a"}`}>
        <About />
      </div>
      <Skills/>
      <div className={`${colors.backColor + "a"} pb-5`}>
    <Portfolio/>  
      </div>
    <Testimonials/>
    <div className={`${colors.backColor + "a"} pt-5 mt-5 pb-5`}>
    <Contact />  
      </div>
    </div>
  );
};
