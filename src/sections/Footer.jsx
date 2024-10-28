import React from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="p-20 pt-7 pb-3 border-t border-gray-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-gray-400 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy policy</p>
      </div>
      <div className="flex gap-4">
        <div className="social-icon cursor-pointer">
          <a href="https://github.com/itsantu" target="_blank">
            <FaGithub className="text-white-500 w-6 h-6" />
          </a>
        </div>
        <div className="social-icon cursor-pointer">
          <FaTwitter className="text-white-500 w-6 h-6" />
        </div>
        <div className="social-icon cursor-pointer">
          <FaInstagram className="text-white-500 w-6 h-6" />
        </div>
      </div>
      <p className="text-gray-400">© 2024 Antu. All rights reserved.</p>
    </section>
  );
};

export default Footer;
