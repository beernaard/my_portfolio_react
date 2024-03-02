import React from "react";
import "./skills.css";
import SkillCard from "./SkillCard";
const Skills = () => {
  return (
    <div className="skill-container" id="skillssection">
      <div className="skill-content">
        <h2>Skills</h2>
        <p>...Here are the stuffs that I do, and things that I know!</p>
      </div>
      <div className="skill-technical">
        <div className="skill-service">
          <div>
            <h3>
              <i class="uil uil-desktop-alt"></i> Front End Development
            </h3>
          </div>
          <div>
            <h3>
              <i class="uil uil-server"></i> Back End Development
            </h3>
          </div>
          <div>
            <h3>
              <i class="uil uil-data-sharing"></i> API Development
            </h3>
          </div>
        </div>
        <div className="skill-languages">
          <SkillCard skill="HTML" />
          <SkillCard skill="CSS" />
          <SkillCard skill="Javascript" />
          <SkillCard skill="Node.js" />
          <SkillCard skill="MySQL" />
          <SkillCard skill="SQL Server" />
          <SkillCard skill="C# .NET Framework" />
          <SkillCard skill="ASP.NET Core MVC" />
          <SkillCard skill="MongoDB" />
          <SkillCard skill="Express.js" />
          <SkillCard skill="ASP.NET Core WEb API" />
          <SkillCard skill="Python" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
