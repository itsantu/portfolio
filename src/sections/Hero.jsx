// HeroSection.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImage from "/images/profile_picture.jpg";
import { motion } from "framer-motion";
import ContactMeButton from "../components/Buttons/ContactMeButton";

const HeroSection = () => {
  return (
    <section className="h-screen px-4 py-3" id="hero">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center justify-center h-full bg-gradient-to-b from-white to-slate-300 text-center rounded-3xl p-4 pt-[10vh]"
      >
        {/* Title Animation */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl tracking-widest text-gray-900 leading-tight font-felixti"
        >
          <span className="text-gray-600">HEY,</span> <br />
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex flex-col md:flex-row items-center justify-center gap-2 md:text-8xl"
          >
            <span className="text-6xl md:text-8xl">ANTU</span>
            <motion.img
              src={profileImage}
              alt="Profile"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-28 h-28 md:w-36 md:h-36 rounded-full shadow-md"
            />
            <span className="text-gray-600 mb-4">HERE</span>
          </motion.span>
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-4xl md:text-7xl tracking-widest text-gray-900 leading-tight font-felixti"
        >
          <span className="text-4xl md:text-8xl mb-2 inline-block">FULL STACK</span> <br />
          <span className="text-gray-600">DEVELOPER</span>
        </motion.h2>

        {/* Button Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <ContactMeButton linkText="Contact Me ↗" link="#contact" />
        </motion.div>

        {/* Social Icons Animation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute flex flex-col items-center justify-center gap-5 right-2 mt-8"
        >
          <a
            href="https://github.com/itsantu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl text-gray-700 hover:text-gray-600" />
          </a>
          <a
            href="https://linkedin.com/in/antu-mallick"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl text-gray-700 hover:text-gray-600" />
          </a>
          <a
            href="https://x.com/AntuMallick87?t=Jbc6iFx2PWxCRSFhQ3EMnA&s=08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-3xl text-gray-700 hover:text-gray-600" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
