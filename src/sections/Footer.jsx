import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="p-20 pt-7 pb-3 border-t border-gray-400 flex justify-between items-center flex-wrap gap-5">
      <div className="flex gap-4">
        <div className="social-icon cursor-pointer">
          <a href="https://github.com/itsantu" target="_blank">
            <FaGithub className="text-white-500 w-6 h-6" />
          </a>
        </div>
        <div className="social-icon cursor-pointer">
          <a href="https://x.com/AntuMallick87?t=Jbc6iFx2PWxCRSFhQ3EMnA&s=08">
            <FaTwitter className="text-white-500 w-6 h-6" />
          </a>
        </div>
        <div className="social-icon cursor-pointer">
          <a href="https://linkedin.com/in/antu-mallick">
            <FaLinkedin className="text-white-500 w-6 h-6" />
          </a>
        </div>
        <div className="social-icon cursor-pointer">
          <a href="https://www.instagram.com/antu.87_/">
            <FaInstagram className="text-white-500 w-6 h-6" />
          </a>
        </div>
      </div>
      <p className="text-[12px] md:text-lg text-gray-700">© 2024 Antu. All rights reserved.</p>
    </section>
  );
};

export default Footer;
