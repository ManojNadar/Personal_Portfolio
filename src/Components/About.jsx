import React from "react";
import "../Styles/About.css";

import profile from "../../public/assets/images/manoj-profile.JPG";

const About = () => {
  return (
    <div id="about" className="aboutContainer">
      <div className="leftAboutContainer">
        <div>
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="rightAboutContainer">
        <p>
          <span className="aboutMe">About Me - </span>
          MERN Stack developer with 6 months full stack course. Enjoys working
          with React.js, HTML, CSS, JavaScript, Node.js Experience in web
          framework like Express. Comfortable with Library like React.js &
          <span style={{ color: "blue", fontWeight: "bold" }}>
            &nbsp; React-Native(Mobile Apps)
          </span>
          . Constantly seeking for new challenges and opportunities.
        </p>
      </div>
    </div>
  );
};

export default About;
