// HeroSection.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImage from "/images/profile_picture.jpg";
import { motion } from "framer-motion";
import ContactMeButton from "../components/Buttons/ContactMeButton";
import RouterButton from "../components/Buttons/RouterButton";

const HeroSection = () => {
  return (
    <section className="h-screen px-4 py-3" id="hero">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center justify-center h-full bg-gradient-to-br   from-white to-slate-400 shadow-2xl text-center rounded-3xl p-4 pt-[10vh]"
      >
        {/* Title Animation */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className=" tracking-widest text-gray-900 leading-tight font-felixti"
        >
          <span className="text-[2.8rem] md:text-6xl text-gray-500">HEY,</span> <br />
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex flex-col md:flex-row items-center justify-center gap-2 md:text-8xl"
          >
            <span className="text-6xl md:text-8xl">ANTU</span>
            <motion.img
              src={profileImage}
              alt="Antu Mallick Profile Picture"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-36 h-36 md:w-36 md:h-36 rounded-full shadow-xl hover:shadow-2xl duration-200 hover:scale-110"
            />
            <span className="text-4xl md:text-8xl text-gray-500 mb-4 md:mb-0">HERE</span>
          </motion.span>
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-4xl md:text-7xl tracking-widest text-gray-900 leading-tight font-felixti"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent text-[2.7rem] md:text-8xl mb-2 inline-block">FULL STACK</span> <br />
          <span className="text-gray-500">DEVELOPER</span>
        </motion.h2>

        {/* Button Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center gap-4"
        >
          <RouterButton linkText="View Resume ↗" link="https://drive.google.com/file/d/1KscP_DLloFoF95w6k2LlXqlOaON84ZKu/view?usp=sharing" targetBlank={true} />
          <ContactMeButton linkText="Contact Me ↗" link="#contact" />
        </motion.div>

        {/* Social Icons Animation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute flex md:flex-col items-center justify-center gap-3 md:gap-5 bottom-3 md:right-2 mt-8"
        >
          <a
            href="https://github.com/itsantu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-[1.7rem] md:text-3xl text-white hover:text-gray-700 duration-100 hover:scale-110" />
          </a>
          <a
            href="https://linkedin.com/in/antu-mallick"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-[1.7rem] md:text-3xl text-white hover:text-gray-700 duration-100 hover:scale-110" />
          </a>
          <a
            href="https://x.com/AntuMallick87?t=Jbc6iFx2PWxCRSFhQ3EMnA&s=08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-[1.7rem] md:text-3xl text-white hover:text-gray-700 duration-100 hover:scale-110" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
