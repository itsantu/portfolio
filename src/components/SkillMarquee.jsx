import React from 'react';
import Marquee from 'react-fast-marquee';
import { SkillList } from '../constants';

const SkillMarquee = () => {
  

  return (
    <div className="py-10">
      <Marquee gradient gradientWidth={50} gradientColor='white' speed={50} pauseOnHover autoFill>
        {SkillList.map((logo, index) => (
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
