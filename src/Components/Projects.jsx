import React from "react";
import "../Styles/Projects.css";
import Slider from "../Data";

const Projects = () => {
  return (
    <div>
      <div id="projects" className="projectContainer">
        <h2 className="projectHeader">Projects</h2>
        <Slider />
      </div>
    </div>
  );
};

export default Projects;
