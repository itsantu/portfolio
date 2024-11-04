import React from "react";
import { motion } from "framer-motion";

const ContactMeButton = ({ link, linkText, targetBlank = false }) => {
  return (
    <div>
      <motion.div
        className="relative inline-block min-w-32 h-11 md:min-w-[180px] md:h-[50px] mt-[4vh] md:mt-[2rem]"
        whileHover="hover"
      >
        <motion.div
          className="absolute inset-0 bg-black text-white  border-gray-950"
          variants={{
            hover: { x: 6, y: 8 }, 
          }}
          transition={{ duration: 0.2 }}
        />
        <a href={link} target={targetBlank ? "_blank" : null}>
          <motion.button
            className="relative z-10 px-4 py-2 bg-white border-[1px] text-[14px] md:text-lg border-black w-full h-full"
            variants={{
              hover: { x: -6 }, 
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {linkText}
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
};

export default ContactMeButton;
