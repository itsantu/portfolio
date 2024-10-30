import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const RouterButton = ({ link, linkText, targetBlank = false }) => {
  return (
    <div className="mt-8 grid gap-2">
      <motion.div
        className="relative inline-block min-w-36 h-11 md:min-w-[180px] md:h-[50px]"
        whileHover="hover"
      >
        <motion.div
          className="absolute inset-0 bg-white border-2 border-gray-950"
          variants={{
            hover: { x: 6, y: 8 },
          }}
          transition={{ duration: 0.2 }}
        />
        <Link to={`/projects/${link}`}>
          <motion.button
            className="relative z-10 px-4 py-2 bg-black text-sm md:text-lg text-white w-full h-full"
            variants={{
              hover: { x: -6 },
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {linkText}
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default RouterButton;
