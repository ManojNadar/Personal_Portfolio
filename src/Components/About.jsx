import React from "react";
import "../Styles/About.css";

const About = () => {
  return (
    <div id="about" className="aboutContainer">
      <div className="leftAboutContainer">
        <img
          src="https://i.pinimg.com/1200x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
          alt=""
        />
      </div>
      <div className="rightAboutContainer">
        <p>
          <span className="aboutMe">About Me </span>
          Looking for an opportunity to work as a web developer with a skillset
          of ReactJS, Javascript, NodeJS,Rest API, MongoDB, CSS, HTML5. I'm
          Having a four years of experience in other platform. Now I like to
          completely get into the Web Development.
        </p>
      </div>
    </div>
  );
};

export default About;
