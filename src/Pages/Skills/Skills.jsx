import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { videoSource } from "../../components/Hero/heroSlice";
import StarCanvas from "../../components/StarsBackground/StarsBackground";

const Skills = () => {
  const navigate = useNavigate();
  const source = useSelector(videoSource);

  return (
    <div className="w-full min-h-screen fixed overflow-hidden">
      <StarCanvas />
      <div className="w-full min-h-screen h-full flex justify-center items-center absolute top-0 left-0">
        <motion.video
          initial={{ y: "-50vh" }}
          exit={{ y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
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
              onClick={() => navigate("/")}
              className="absolute top-0 left-0 p-4 bg-white flex justify-center items-center w-20 h-4 z-50"
            >
              Home
            </button>
          </div>
        </div>
        <div className="text flex justify-center items-start w-ful h-full">
          <h1 className="text-4xl font-semibold text-white">INI MENU SKILLS</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
