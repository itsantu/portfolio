import React from "react";
import { CiShare1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { RiJavaLine } from "react-icons/ri";

const ProjectDiscuss = () => {
  return (
    <div className="w-full py-6 my-6 md:py-10">
      <div className="w-full bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl py-12 px-8 rounded-[30px]">
        <h2 className="text-white text-3xl font-extrabold mb-2">
          What's your next Project Idea?
        </h2>
        <p className="text-base text-gray-400 mb-8 md:inline-flex items-center gap-2">
          Building Solutions with Code and a Huge Cup of Chai!
          <span className="text-2xl">
            <RiJavaLine />
          </span>
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-gray-300"
        >
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 text-sm font-semibold rounded hover:bg-gray-300 duration-150 ease-in">
            Share with me
            <span>
              <CiShare1 />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDiscuss;
