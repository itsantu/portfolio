import React, { useEffect } from "react";
import { ProjectList } from "../constants";
import { CiShare1 } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import Features from "../components/ProjectPage/Features";
import TechStack from "../components/ProjectPage/TechStack";
import ScrollToTop from "../components/ScrollToTop";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProjectView = () => {
  const { projectId } = useParams();
  const {
    id,
    name,
    date,
    secondaryImage,
    description,
    githubLink,
    techStack,
    features,
  } = ProjectList[projectId - 1];

  return (
    <>
    <ScrollToTop/>
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
          <div className="mb-6">
            <h1 className="text-4xl font-semibold">{name}</h1>
            <p className="text-sm text-gray-400">{date}</p>
          </div>

          <div className="mb-10">
            <p className="text-gray-500">{description}</p>
          </div>

          <TechStack techStack={techStack} />

          <Features features={features} />

          <hr className="w-full border-t-2 border-gray-400 mt-8 mb-4" />

          <div className="w-full py-6 px-4 my-6 md:py-10 md:px-0">
            <div className="w-full bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl py-12 px-8 rounded-[30px]">
              <h2 className="text-white text-3xl font-extrabold mb-2">
                What's your next Project Idea?
              </h2>
              <p className="text-base text-gray-400 mb-8">
                Empowering Your Vision with Innovative Solutions.
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
        </div>
      </section>
    </>
  );
};

export default ProjectView;
