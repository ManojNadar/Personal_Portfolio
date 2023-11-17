import React from "react";
import "../Styles/Projects.css";
import projects from "../Data";

const Projects = () => {
  return (
    <div className="projectContainer">
      <h2 className="projectHeader">Projects</h2>
      <div id="projects" className="projectMainContainer">
        <div className="slider">
          {projects.map((item) => (
            <div key={item.id} className="imageContainer">
              <img src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
