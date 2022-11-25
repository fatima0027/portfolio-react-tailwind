import React from "react";
import { tech } from "../data/tech";

const Experience = () => {
 

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-8 text-center py-8 px-8 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-lg hover:scale-105 duration-500 py-2 dark:bg-gray-900 rounded-lg`}
            >
              <img src={src} alt="" className="w-7 mx-auto py-2" />
              <p className="mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
