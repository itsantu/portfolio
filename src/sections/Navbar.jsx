import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down, hide navbar
        setShowNavbar(false);
      } else {
        // if scroll up, show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <motion.nav
    initial={{ opacity: 0 }}
    animate={{ opacity: showNavbar? .9: 0 }}
    transition={{ duration: 1 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-4/5 md:w-[50%] mx-auto bg-slate-200 z-50 rounded-3xl shadow-lg opacity-10 hover:bg-slate-100 hover:shadow-2xl hover:scale-105 duration-300 transition-all transform ${
        showNavbar ? 'translate-y-0' : '-translate-y-28'
      }`}
    >
      <div className="container mx-auto px-2 py-1 flex justify-between items-center">
        <div className="text-[0.8rem] md:text-[1rem] font-bold font-felixti">
        <img src='android-chrome-192x192.png' alt='Antu Mallick Logo' className='h-8 w-8 md:w-10 md:h-10 inline-block mr-2' />
        <a href='#hero'>Antu Mallick</a>
        </div>
        <ul className="flex space-x-4">
          <li className="text-sm md:text-lg cursor-pointer p-1 md:px-3 md:py-2 rounded-full hover:bg-slate-300 duration-150"><a href='#works'>Works</a></li>
          <li className="text-sm md:text-lg cursor-pointer p-1 md:px-3 md:py-2 rounded-full hover:bg-slate-300 duration-150"><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
