import React from "react";
import { motion } from "framer-motion";
import ContactMeButton from "../Buttons/ContactMeButton";
import RouterButton from "../Buttons/RouterButton";

const ImageContainer = ({ projectDesc }) => {
  const {
    id,
    name,
    primaryImage,
    shortDescription,
    liveLink,
    techStack,
  } = projectDesc;

  return (
    <motion.div
      className="w-[100vw] flex-none border-r-2 border-gray-400"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: .3 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center overflow-hidden p-10">
        <img
          className="w-full md:w-2/5 h-auto max-w-full object-cover border-[5px] shadow-2xl rounded-2xl hover:scale-105 duration-300"
          src={primaryImage}
          alt="alt text goes here"
        />

        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-4 p-2 md:p-4">
          <h2 className="text-xl md:text-4xl tracking-widest font-bold font-felixti">{name}</h2>

          <div className="mt-4">
            <ul className="list-disc pl-4">
              {shortDescription.map((desc, index) => (
                <li key={index} className="text-sm md:text-lg">
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

            <RouterButton link={id} linkText="Explore Project ↗" />
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
