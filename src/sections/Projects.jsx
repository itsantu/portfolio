import React, { useRef } from "react";
import "./Projects.css";
import Two from "/images/weatherapp.webp";

import Three from "/images/helloworldsocial.webp"
import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "../components/ImageContainer/ImageContainer";

import { ProjectList } from "../constants";

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0,0.1, 1], ["0%","0%", "-105%"]);

  return (
    <div className="h-[400vh]" ref={targetRef} id="works">
      <div className="h-screen sticky top-0 flex flex-col pt-16 md:pt-12 overflow-hidden">
        <h1 className="text-4xl text-center font-semibold text-gray-800 mb-4">
          Projects
        </h1>
        <motion.div className="flex gap-2 p-2 md:p-4 scroll-smooth" style={{ x }}>
          <ImageContainer projectDesc={ProjectList[0]}/>
          <ImageContainer projectDesc={ProjectList[1]} />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
