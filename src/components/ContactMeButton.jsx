import React from "react";
import { motion } from "framer-motion";

const ContactMeButton = ({ link, linkText, targetBlank = false }) => {
  return (
    <div
      style={{
        marginTop: "2rem",
        // display: "grid",
        // gap: "0.8rem",
      }}
    >
      <motion.div className="btn-div" whileHover="hover">
        <motion.div
          className="bg-btn"
          variants={{
            hover: { x: 6, y: 8 }, // bg-btn moves to the right
          }}
          transition={{ duration: 0.2 }}
        />
        <a href={link} target={targetBlank ? "_blank" : null}>
          <motion.button
            className="btn-btn"
            variants={{
              hover: { x: -6 }, // button moves to the left
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
