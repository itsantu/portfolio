// HeroSection.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImage from "/images/profile_picture.jpg";
// import profileImage from "/images/profile_pic.jpg";
import { motion } from "framer-motion";
import ContactMeButton from "../components/ContactMeButton";

const HeroSection = () => {
  return (
    <section className="h-screen px-4 py-3" id="hero">
      <div className="relative flex flex-col items-center justify-center h-full bg-gradient-to-b from-white to-slate-300 text-center rounded-3xl p-4 pt-[10vh]">
        <h1 className="text-6xl md:text-7xl  tracking-widest text-gray-900 leading-tight font-felixti">
          <span className="text-gray-600">HEY,</span> <br />
          <span className="relative flex flex-col md:flex-row items-center justify-center gap-2  md:text-8xl">
            <span>ANTU</span>
            <img
              src={profileImage}
              alt="Profile"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full shadow-md "
            />
            <span className="text-gray-600">HERE</span>
          </span>
        </h1>
        <h2 className="text-4xl md:text-7xl tracking-widest text-gray-900 leading-tight font-felixti">
          <span className="md:text-8xl">FULL STACK</span> <br />
          <span className="text-gray-600">DEVELOPER</span>
        </h2>
        
        <ContactMeButton linkText="Contact Me ↗" link="#contact"/>

        {/* Social Icons */}
        <div className="absolute flex flex-col items-center justify-center gap-5 right-2 mt-8">
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

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
