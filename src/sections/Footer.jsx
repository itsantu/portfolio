import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="p-20 pt-7 pb-3 border-t border-gray-400 flex justify-center items-center flex-wrap gap-5">
    <div className="flex flex-col items-center gap-3">

    {/* Social Links */}
      <div className="flex gap-4 mb-6">
        <div className="social-icon cursor-pointer">
          <a href="https://github.com/itsantu" target="_blank">
            <FaGithub className="text-gray-500 hover:text-gray-800 duration-100 w-6 h-6" />
          </a>
        </div>
        <div className="social-icon cursor-pointer">
          <a href="https://x.com/AntuMallick87?t=Jbc6iFx2PWxCRSFhQ3EMnA&s=08">
            <FaTwitter className="text-gray-500 hover:text-gray-800 duration-100 w-6 h-6" />
          </a>
        </div>
        <div className="social-icon cursor-pointer">
          <a href="https://linkedin.com/in/antu-mallick">
            <FaLinkedin className="text-gray-500 hover:text-gray-800 duration-100 w-6 h-6" />
          </a>
        </div>
        <div className="social-icon cursor-pointer">
          <a href="https://www.instagram.com/antu.87_/">
            <FaInstagram className="text-gray-500 hover:text-gray-800 duration-100 w-6 h-6" />
          </a>
        </div>
      </div>
      <p className="text-[.8rem] md:text-sm pb-8 text-gray-700">© 2024 Antu. All rights reserved.</p>
    </div>
    </section>
  );
};

export default Footer;
