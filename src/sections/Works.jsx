import { FaBootstrap, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";

export default function Works() {
  const projects = [
    {
      title: "Hello World Social",
      image: "/images/helloworld.png",
      link: "https://helloworldsocial.netlify.app",
      technologies: [SiTailwindcss, FaReact, FaNodeJs, SiExpress, SiMongodb],
    },
    {
      title: "Weather App",
      image: "/images/weatherapp.png",
      link: "https://itsantu.github.io/Weather/",
      technologies: [SiJavascript],
    },
  ];

  return (
    <section
      className="py-16 bg-gradient-to-b from-white to-gray-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          My Selected Works
        </h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-1 md:p-3 rounded-lg shadow-lg overflow-hidden transition-transform "
            >
              <div className="relative h-60 md:h-80 overflow-hidden rounded-xl shadow-md hover:shadow-2xl  duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:opacity-75 hover:scale-105  duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 border-blue-600 hover:text-blue-800 hover:border-blue-800 border-2  px-2 py-1 rounded-md transition-colors duration-300"
                  >
                    Live Link
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  {project.technologies.map((Icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-2xl mb-6">To explore some ongoing stuff</p>
          <a
            href="https://github.com/itsantu"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-block p-2 border-2 border-black rounded-lg hover:bg-black hover:text-white hover:scale-110 transition duration-300"
          >
            <div className="flex items-center gap-2">
              <FaGithub className="text-2xl" />
              <p className="text-xl font-semibold">Visit Github</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
