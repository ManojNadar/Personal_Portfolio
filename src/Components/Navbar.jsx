import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-scroll";
import { FiAlignCenter } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <Link to="home" className="logo">
        MAN.DEV
      </Link>
      <div className="navigations">
        <Link to="about">About</Link>
        <Link to="projects">Projects</Link>
        <Link to="experience">Experience</Link>
        <Link to="contact">Contact</Link>
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
          <Link to="about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link to="experience" onClick={() => setIsOpen(false)}>
            Experience
          </Link>
          <Link to="contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
