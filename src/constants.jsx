import { desc } from "framer-motion/client";
import { FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import { TiWeatherCloudy } from "react-icons/ti";

export const SkillList = [
    { icon: <FaBootstrap />, alt: 'Bootstrap' },
    { icon: <SiTailwindcss />, alt: 'Tailwind CSS' },
    { icon: <SiJavascript />, alt: 'JavaScript' },
    { icon: <FaReact />, alt: 'React' },
    { icon: <SiRedux />, alt: 'Redux' },
    { icon: <FaNodeJs />, alt: 'Node.js' },
    { icon: <SiMongodb />, alt: 'MongoDB' },
    { icon: <SiExpress />, alt: 'Express.js' },
    { icon: <SiFirebase />, alt: 'Firebase' }
]

export const ProjectList = [
  {
    id: 1,
    name: "Hello World Social",
    description: "A Social Media Platform",
    shortDescription: ["Share your images with us.", "Engage with each other through Likes and Comments."],
    primaryImage: "/images/helloworldsocial.webp",

    liveLink: "https://helloworldsocial.netlify.app/",
    githubLink: null,

    techStack: [
      { name: "React", icon: <FaReact /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "NodeJS", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    id: 1,
    name: "Weather App",
    description: "A Weather App",
    shortDescription: ["Check Realtime weather.", "Complete mobile Responsive."],
    primaryImage: "/images/weatherapp.webp",

    liveLink: "https://itsantu.github.io/Weather/",
    githubLink: "https://github.com/itsantu/Weather",

    techStack: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Weather API", icon: <TiWeatherCloudy/> },
    ],
  },
];
