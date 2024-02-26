import React from "react";
import "./skillcard.css";
const SkillCard = ({ skill }) => {
  return (
    <div className="skillcard-container">
      <h3>{skill}</h3>
    </div>
  );
};

export default SkillCard;
