import React, { useEffect, useState } from "react";
import Navbar from "../sections/Navbar";
import HeroSection from "../sections/Hero";
import Skill from "../sections/Skill";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import ScrollToTopButton from "../components/Buttons/ScrollToTopButton";
import loadingGif from "/animation/Coffee_cup.gif";
import { motion } from "framer-motion";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadFontsAndImages = async () => {
      setIsLoading(true);

      // Wait for fonts to load
      await document.fonts.ready;

      // Preload images
      const images = ["/images/profile_picture.jpg", "android-chrome-192x192.png"];
      await Promise.all(
        images.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
          });
        })
      );

      // setTimeout(() => {
        setIsLoading(false);
      // }, 1000);
    };

    loadFontsAndImages();
  }, []);

  if (isLoading) {
    return (
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-white z-50"
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-2 justify-center"
        >
          <img src={loadingGif} alt="Loading animation" className="w-16 h-16" />
          <div className="text-gray-800 text-sm md:text-lg font-semibold">
            Get your tea, and relax...
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Skill />
      <Projects />
      <Contact />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
