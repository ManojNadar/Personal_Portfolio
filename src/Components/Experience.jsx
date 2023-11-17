import React from "react";
import "../Styles/Experience.css";

const Experience = () => {
  const exp = [
    {
      id: 1,
      name: "WLT",
      image: "https://manojndr.netlify.app/Images/wlt.png",
      desc: "Worked at WilliamsLeaTag As Office service Associate,  DOCUMENT MANAGEMENT TEAM,  for 1 year and 6 months (15 Jan. 2018 till 26 July 2019)",
    },
    {
      id: 2,
      name: "Accenture",
      image: "https://manojndr.netlify.app/Images/accenture.png",
      desc: " Worked at Accenture, As Platform Experience New Associate, for 2 year 5 months (18 Nov 2019 till 17 June 2022)",
    },
  ];
  return (
    <div id="experience" className="expContainer">
      <h2 className="expHeader">Experience</h2>

      <div className="expContent">
        {exp.map((exp) => (
          <div key={exp.id} className="singleExp">
            <img src={exp.image} alt={exp.name} />
            <p className="expDesc">{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
