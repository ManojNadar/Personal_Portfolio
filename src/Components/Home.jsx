import React from "react";
import "../Styles/Home.css";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import profile from "../../public/assets/images/manoj-profile.JPG";

const Home = () => {
  return (
    <div id="home" className="homeContainer">
      <div className="leftHomeSection">
        <div className="innerLeftHome">
          <h2 className="hello">Hello I am</h2>
          <h2 className="manoj">Manoj Nadar</h2>
          <h3 className="fullStack">Full Stack Developer</h3>
        </div>
        <div className="socialIcons">
          <a
            href="https://www.instagram.com/ar_mano_03/"
            className="insta"
            target="_blank"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/manoj-nadar-70b459276/"
            className="linked"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/ManojNadar"
            target="_blank"
            className="git"
          >
            <AiOutlineGithub />
          </a>
          <a
            href="https://wa.me/9699858369"
            target="_blank"
            className="whatsapp"
          >
            <AiOutlineWhatsApp />
          </a>
        </div>
      </div>
      <div className="rightHomeSection">
        <div>
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
