import React, { useEffect } from "react";
import { ProjectList } from "../constants";
import { CiShare1 } from "react-icons/ci";
import { useParams } from "react-router-dom";
import Features from "../components/ProjectPage/Features";
import TechStack from "../components/ProjectPage/TechStack";
import ScrollToTop from "../components/ScrollToTop";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ProjectDiscuss from "../components/ProjectPage/ProjectDiscuss";

const ProjectView = () => {
  const { projectId } = useParams();
  const {
    id,
    name,
    date,
    secondaryImage,
    description,
    liveLink,
    githubLink,
    techStack,
    features,
  } = ProjectList[projectId - 1];

  return (
    <>
      <ScrollToTop />
      <section>
        <div className="w-full md:w-4/5 lg:w-2/3 max-w-[600px] mx-auto py-4 px-4">
          <div className="my-6 ">
            <button
              className="text-sm text-gray-500 cursor-pointer "
              onClick={() => history.back()}
            >
              ← Bact to Projects
            </button>
          </div>
          <div className="mb-10 ">
            <LazyLoadImage
              src={secondaryImage}
              alt="project"
              effect="blur"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-semibold">{name}</h1>
              <p className="text-sm text-gray-400">{date}</p>
            </div>
            <div className="hover:bg-gray-300 p-1 rounded-full duration-100">
              <a href={liveLink} target="_blank" rel="noreferrer" className="text-xl ">
                <CiShare1 />
              </a>
            </div>
          </div>

          <div className="mb-10">
            <p className="text-gray-500">{description}</p>
          </div>

          <TechStack techStack={techStack} />

          <Features features={features} />

          <hr className="w-full border-t-2 border-gray-400 mt-8 mb-4" />

          <ProjectDiscuss />
        </div>
      </section>
    </>
  );
};

export default ProjectView;
