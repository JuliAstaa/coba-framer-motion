import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Project from "./Pages/Projects/Project";
import Contact from "./Pages/Contact/Contact";
import Skills from "./Pages/Skills/Skills";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <main className="bg-[#030014] w-full min-h-screen overflow-hidden relative">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
};

export default App;
