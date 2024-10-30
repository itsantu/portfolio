// ScrollToTopButton.jsx
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle button visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <motion.button
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        // transition={{  }}
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-3 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-600 transition"
      >
        <IoIosArrowUp />
      </motion.button>
    )
  );
};

export default ScrollToTopButton;
