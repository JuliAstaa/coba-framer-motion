import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { setPosition, positionValue, videoSource } from "./heroSlice";
import StarCanvas from "../StarsBackground/StarsBackground";

const Hero = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const position = useSelector(positionValue);
  const source = useSelector(videoSource);

  const handleAbout = () => {
    dispatch(setPosition({ x: "-50%", scale: "150%" }));
    navigate("/about");
  };
  const handleProject = () => {
    dispatch(setPosition({ y: "50vh", scale: "125%" }));
    navigate("/project");
  };
  const handleContact = () => {
    dispatch(setPosition({ x: "50%", scale: "150%" }));
    navigate("/contact");
  };
  const handleSkills = () => {
    dispatch(setPosition({ y: "-50vh", scale: "125%" }));
    navigate("/skills");
  };

  return (
    <div className="fixed min-h-screen w-full overflow-hidden z-50">
      <StarCanvas />

      <div className="w-full min-h-screen flex justify-center items-center absolute top-0 left-0">
        <motion.video
          initial={{ scale: "100%" }}
          animate={{ y: 0, x: 0 }}
          exit={position}
          transition={{
            ease: "easeInOut",
            duration: 0.8,
          }}
          autoPlay
          loop
          aria-label="blackhole"
          muted
          className="fixed"
        >
          <source src={source} />
        </motion.video>
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="button">
          <div className="p-4 flex gap-2 ">
            <button
              onClick={handleAbout}
              className=" bg-white flex justify-center items-center w-20 h-8 z-50"
            >
              About
            </button>
            <button
              onClick={handleProject}
              className=" bg-white flex justify-center items-center w-20 h-8 z-50"
            >
              Project
            </button>
            <button
              onClick={handleContact}
              className=" bg-white flex justify-center items-center w-20 h-8 z-50"
            >
              Contact
            </button>
            <button
              onClick={handleSkills}
              className=" bg-white flex justify-center items-center w-20 h-8 z-50"
            >
              Skills
            </button>
          </div>
        </div>
        <div className="text flex justify-center items-start w-ful h-full">
          <h1 className="text-4xl font-semibold text-white">
            INI MENU DASHBOARD
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
