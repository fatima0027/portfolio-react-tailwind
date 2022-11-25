import React from "react";
import { projects } from "../data/projects";
const Portfolio = () => {

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 sm:px-0">
          {projects.map((project) => (
            <article className="flex flex-col rounded-lg dark:bg-gray-900 shadow-lg">
              <div className="flex flex-col flex-1 p-6">
                <a rel="noopener noreferrer" href={project.url} target="_blank" title={project.title} className="text-xs tracking-wider uppercase hover:underline dark:text-blue-700">{project.category}</a>
                <h3 className="py-2 text-lg font-semibold leading-snug">{project.title}</h3>
                 <p className="flex-1 text-sm py-2 text-gray-300 justify-content-md-start">
                  {project.desc}
                </p>
                { project.skills && (
                  <ul className="flex flex-wrap justify-content-center">
                    {project.skills.map((item) => (
                      <li className="m-auto font-semibold text-gray-400 text-sm p-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
