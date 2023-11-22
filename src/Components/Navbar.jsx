import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-scroll";
import { FiAlignCenter } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <Link
        offset={-50}
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        className="logo"
      >
        MAN.DEV
      </Link>
      <div className="navigations">
        <Link offset={-50} spy={true} smooth={true} duration={500} to="about">
          About
        </Link>
        <Link
          offset={-50}
          spy={true}
          smooth={true}
          duration={500}
          to="projects"
        >
          Projects
        </Link>
        <Link
          offset={-50}
          spy={true}
          smooth={true}
          duration={500}
          to="experience"
        >
          Experience
        </Link>
        <Link offset={-50} spy={true} smooth={true} duration={500} to="contact">
          Contact
        </Link>
      </div>
      <div className="navToggleBtn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <div style={{ fontSize: 25 }}>
            <AiFillCloseCircle />
          </div>
        ) : (
          <div style={{ fontSize: 25 }}>
            <FiAlignCenter />
          </div>
        )}
      </div>

      {isOpen ? (
        <div className="mobNavigations">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            to="about"
            offset={-50}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            to="projects"
            offset={-50}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            to="experience"
            offset={-50}
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            to="contact"
            offset={-50}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
