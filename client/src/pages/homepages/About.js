import React from "react";
import { FaGithub } from "react-icons/fa6";
import { projectDetails } from "../../constants";
import SocialHandles from "../../components/social-handles";

const About = () => {
  return (
    <div className="bg-black min-h-screen pt-28 pb-10 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className=" bg-white bg-opacity-85 py-5 pb-1 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-black">
            {projectDetails.projectTitle}
          </h1>
        </div>

        <div className="p-8">
          <p className="text-gray-600 mb-6">{projectDetails.projectBio}</p>

          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {projectDetails.projectTools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default About;
