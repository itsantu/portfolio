import React from "react";

const TechStack = ({techStack}) => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold">Tech Stack</h2>
      <ul className=" list-inside text-gray-500">
        {techStack.map((tech) => (
          <li key={tech.name} className="flex items-center my-2">
            <span className="text-xl text-blue-400 font-semibold">- </span>
            <a
              href={tech.link}
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-gray-800 font-semibold underline decoration-blue-500 hover:decoration-yellow-500"
            >
              {tech.name}
            </a>
            <span className="text-xs font-normal text-gray-400 ml-2">
              (for {tech.purpose})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;
