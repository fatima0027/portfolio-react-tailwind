import React from "react";
import { HiChevronRight } from "react-icons/hi";
import HeroImage from "../assets/coding.svg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-6xl font-bold text-white">
            Fatima S.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          <span className="font-bold">
            Senior Full-Stack Developer
            </span>
            <p className="text-gray-600 py-2 max-w-md">
              <span>
                React JS | Next JS | Node JS | React Native | Typescript | Javascript | Android | iOS | Project Manager
              </span>
            </p>
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiChevronRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full sm:px-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
