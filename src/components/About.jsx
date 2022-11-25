import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-200 border-gray-500">
            About
          </p>
        </div>
        <p className="mt-20 text-gray-300">
          I am Senior Full-Stack Developer with 11+ years of working experience in Web and Mobile development. 
          I have worked on various mobile apps and websites that millions of people use.
          My focus is not just on writing the code but on making your application go live. 
          I always practice the Scrum/Agile approach with my clients. 
          That means I will provide well-tested features with every milestone which will help head to the successful product step by step.
        </p>
        <br />
        <p className="text-gray-300">
        I have ability to work well with minimal supervision. Demonstrated analytical and problem solving skills with an emphasis on the information systems lifecycle, analysis and design. 
        Always able to meet deadlines in a dynamic fast-paced atmosphere and to work both independently and as part of a team. 
        </p>
      </div>
    </div>
  );
};

export default About;
