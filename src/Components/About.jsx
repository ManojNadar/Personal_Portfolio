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
          <span className="aboutMe">About Me - </span>
          MERN Stack developer with 6 months full stack course. Enjoys working
          with React.js, HTML, CSS, JavaScript, Node.js Experience in web
          framework like Express. Comfortable with Library like React.js &
          <span style={{ color: "blue", fontWeight: "bold" }}>
            React-Native(Mobile Apps)
          </span>
          . Constantly seeking for new challenges and opportunities.
        </p>
      </div>
    </div>
  );
};

export default About;
