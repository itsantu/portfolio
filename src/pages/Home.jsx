import React from "react";
import Navbar from "../sections/Navbar";
import HeroSection from "../sections/Hero";
import Skill from "../sections/Skill";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import ScrollToTopButton from "../components/Buttons/ScrollToTopButton";

const Home = () => {
  return (
    <div >
      <Navbar />
      <HeroSection />
      <Skill />
      <Projects />
      {/* <Works/> */}
      <Contact />
      <ScrollToTopButton/>
    </div>
  );
};

export default Home;
