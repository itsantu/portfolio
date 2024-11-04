import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const RouterButton = ({ link, linkText, targetBlank = false }) => {
  return (
    <div className="mt-[4vh] md:mt-[2rem] grid gap-2">
      <motion.div
        className="relative inline-block min-w-32 h-11 md:min-w-[180px] md:h-[50px]"
        whileHover="hover"
      >
        <motion.div
          className="absolute inset-0 bg-transparent border-2 border-gray-950"
          variants={{
            hover: { x: 6, y: 8 },
          }}
          transition={{ duration: 0.2 }}
        />
        {targetBlank ? (
          <a href={link} target="_blank" rel="noreferrer">
            <motion.button
              className="relative z-10 px-4 py-2 bg-gray-700 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-600 text-sm md:text-lg text-white w-full h-full duration-150"
              variants={{
                hover: { x: -6 },
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {linkText}
            </motion.button>
          </a>
        ) : (
          <Link to={`/projects/${link}`}>
            <motion.button
              className="relative z-10 px-2 md:px-4 py-2 bg-black text-[12px] md:text-lg text-white w-full h-full"
              variants={{
                hover: { x: -6 },
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {linkText}
            </motion.button>
          </Link>
        )}
      </motion.div>
    </div>
  );
};

export default RouterButton;
