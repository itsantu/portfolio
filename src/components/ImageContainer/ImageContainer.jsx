import React from "react";
import { motion } from "framer-motion";
import ContactMeButton from "../ContactMeButton";
import RouterButton from "../Buttons/RouterButton";
import { FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import { li } from "framer-motion/client";

const ImageContainer = ({ projectDesc }) => {
  const {
    name,
    primaryImage,
    description,
    shortDescription,
    liveLink,
    techStack,
  } = projectDesc;

  return (
    <motion.div
      className="w-[100vw] flex-none border-r-2 border-gray-400"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center overflow-hidden p-10">
        <img
          className="w-2/5 h-auto max-w-full object-cover border-[5px] shadow-2xl rounded-2xl"
          src={primaryImage}
          alt="alt text goes here"
        />

        <div className="w-1/2 ml-4 p-4">
          <h2 className="text-4xl font-bold font-felixti">{name}</h2>

          <div className="mt-4">
            <ul className="list-disc pl-4">
              {shortDescription.map((desc, index) => (
                <li key={index} className="text-lg">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex items-center gap-4">
            <ContactMeButton
              linkText="Live Link ↗"
              link={liveLink}
              targetBlank={true}
            />

            <RouterButton link="#" linkText="Explore Project ↗" />
          </div>

          <hr className="w-full border-t-2 border-gray-400 mt-8" />

          {/*Tech Stack*/}
          <div className="mt-4">
            <ul className="flex gap-4 mt-4 flex-wrap">
              {techStack.map((tech, index) => (
                <li key={index} className="flex items-center gap-2 text-base">
                  {tech.icon}
                  <span className="font-semibold">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageContainer;
