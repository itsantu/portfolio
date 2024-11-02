import { desc } from "framer-motion/client";
import {
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaCloudUploadAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import { TiWeatherCloudy } from "react-icons/ti";
import { IoCloud } from "react-icons/io5";

export const SkillList = [
  { icon: <FaBootstrap />, alt: "Bootstrap" },
  { icon: <SiTailwindcss />, alt: "Tailwind CSS" },
  { icon: <SiJavascript />, alt: "JavaScript" },
  { icon: <FaReact />, alt: "React" },
  { icon: <SiRedux />, alt: "Redux" },
  { icon: <FaNodeJs />, alt: "Node.js" },
  { icon: <SiMongodb />, alt: "MongoDB" },
  { icon: <SiExpress />, alt: "Express.js" },
  { icon: <SiFirebase />, alt: "Firebase" },
];

export const ProjectList = [
  {
    id: 1,
    name: "Hello World Social",
    date: "May 2024",
    description: "\"Hello World Social\" is a MERN-stack platform where users can share and interact through image posts. Authenticated users can explore others' content, like posts, and switch between dark and light themes. Email verification ensures secure access, and each user has control over their content with options to edit or delete. Featuring JWT-based authentication, React Context API for efficient state management, and image hosting via Cloudinary, Hello World Social provides a smooth, interactive experience focused on user privacy and engagement.",
    shortDescription: [
      "Share your images with us.",
      "Engage with each other through Likes and Comments.",
    ],
    primaryImage: "/images/helloworldsocial.webp",
    secondaryImage: "/images/HelloWorldPrimary.webp",

    liveLink: "https://helloworldsocial.netlify.app/",
    githubLink: null,

    techStack: [
      {
        name: "React",
        icon: <FaReact />,
        purpose: "Frontend Framework",
        link: "https://reactjs.org/",
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss />,
        purpose: "CSS Framework",
        link: "https://tailwindcss.com/",
      },
      {
        name: "Multer",
        icon: <FaCloudUploadAlt />,
        purpose: "Image Upload Middleware",
        link: "https://github.com/expressjs/multer",
      },
      {
        name: "Cloudinary",
        icon: <IoCloud />,
        purpose: "Image Hosting and Delivery",
        link: "https://cloudinary.com/",
      },
      {
        name: "NodeJS",
        icon: <FaNodeJs />,
        purpose: "Backend JavaScript Runtime",
        link: "https://nodejs.org/",
      },
      {
        name: "Express",
        icon: <SiExpress />,
        purpose: "Backend Framework",
        link: "https://expressjs.com/",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        purpose: "Database",
        link: "https://www.mongodb.com/",
      },
    ],

    features: [
      {
        name: "User Authentication",
        description: "Seamless User Authentication and authorization with email verification for Sign up and Forgot password process.",
        imgSource: "/images/signup.webp",
      },
      {
        name: "Image Upload",
        description: "Upload your images with Multer and Cloudinary",
        imgSource: "/images/upload.webp",
      },
      {
        name: "Like and Comment",
        description: "Engage with other users via Likes and Comments",
        imgSource: "/images/Comments.webp",
      },
      {
        name: "Dark Mode",
        description: "Toggle between Light and Dark Mode for a better user experience.",
        imgSource: "/images/Hello_dark.webp",
      },
    ],
  },
  {
    id: 2,
    name: "Weather App",
    description: "A responsive weather website providing live weather updates for any location, including temperature, wind speed, humidity, and pressure. The design is optimized for all devices and includes a dark mode toggle for comfortable viewing. Simple, informative, and user-friendly.",
    shortDescription: [
      "Check Realtime weather.",
      "Complete mobile Responsive.",
    ],
    primaryImage: "/images/weather.webp",
    secondaryImage: "/images/weather_primary.webp",

    liveLink: "https://itsantu.github.io/Weather/",
    githubLink: "https://github.com/itsantu/Weather",

    techStack: [
      { name: "JavaScript", icon: <SiJavascript />, purpose: "User interaction", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Weather API", icon: <TiWeatherCloudy />, purpose: "Weather Data", link: "https://openweathermap.org/api" },
    ],

    features: [
      {
        name: "Realtime Weather",
        description: "Get live weather updates for any location.",
        imgSource: "/images/weather.webp",
      },
      {
        name: "Responsive Design",
        description: "Optimized for all devices and screen sizes.",
        imgSource: "/images/weather_responsive.jpg",
      },
      {
        name: "Dark Mode",
        description: "Toggle between Light and Dark Mode for a better user experience.",
        imgSource: "/images/weather_dark.webp",
      },
    ],
  },
];
