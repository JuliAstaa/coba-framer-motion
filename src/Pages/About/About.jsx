import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import StarCanvas from "../../components/StarsBackground/StarsBackground";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full min-h-screen relative overflow-hidden">
      <StarCanvas />
      <div className="w-full min-h-screen flex justify-center items-center">
        <motion.video
          initial={{ x: "-50%" }}
          exit={{ x: 0 }}
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
          <source src="/blackhole.webm" />
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
          <h1 className="text-4xl font-semibold text-white">INI MENU ABOUT</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
