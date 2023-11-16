import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div id="home" className="homeContainer">
      <div className="leftHomeSection">
        <h1 className="hello">Hello Iam</h1>
        <h2 className="manoj">Manoj Nadar</h2>
        <h3 className="fullStack">Full Stack Developer</h3>
      </div>
      <div className="rightHomeSection">
        <img
          src="https://i.pinimg.com/1200x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
