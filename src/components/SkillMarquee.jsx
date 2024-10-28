import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaBootstrap, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiRedux, SiMongodb, SiExpress, SiFirebase } from 'react-icons/si';

const SkillMarquee = () => {
  const techLogos = [
    { icon: <FaBootstrap />, alt: 'Bootstrap' },
    { icon: <SiTailwindcss />, alt: 'Tailwind CSS' },
    { icon: <SiJavascript />, alt: 'JavaScript' },
    { icon: <FaReact />, alt: 'React' },
    { icon: <SiRedux />, alt: 'Redux' },
    { icon: <FaNodeJs />, alt: 'Node.js' },
    { icon: <SiMongodb />, alt: 'MongoDB' },
    { icon: <SiExpress />, alt: 'Express.js' },
    { icon: <SiFirebase />, alt: 'Firebase' }
  ];

  return (
    <div className="py-10">
      <Marquee gradient gradientWidth={100} gradientColor='white' speed={50} pauseOnHover autoFill>
        {techLogos.map((logo, index) => (
          <div key={index} className="mx-4 md:mx-8 text-4xl md:text-7xl text-gray-700 hover:text-black duration-150">
            {logo.icon}
            <p className="text-sm text-gray-600 mt-2">{logo.alt}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillMarquee;
