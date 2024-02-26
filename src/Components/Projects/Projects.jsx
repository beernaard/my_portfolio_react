import React, { useState } from "react";
import "./project.css";
import ProjectCard from "./ProjectCard";
import data from "./data.js";
const Projects = () => {
  const [indexToggle, setIndexToggle] = useState(1);
  let data2;
  const hanndleIndex = (id) => {
    setIndexToggle(id);
  };

  const returnWebApp = (datalist) => {
    const filteredData = datalist.filter((list) => list.category === "webapp");
    console.log(filteredData);
    return filteredData.map((filter) => {
      return <ProjectCard data={filter} />;
    });
  };
  const returnLandingPage = (datalist) => {
    const filteredData = datalist.filter(
      (list) => list.category === "landingpage"
    );
    console.log(filteredData);
    return filteredData.map((filter) => {
      return <ProjectCard data={filter} />;
    });
  };
  const returnDesktopApp = (datalist) => {
    const filteredData = datalist.filter(
      (list) => list.category === "desktopapp"
    );
    console.log(filteredData);
    return filteredData.map((filter) => {
      return <ProjectCard data={filter} />;
    });
  };
  return (
    <div className="project-container" id="projectssection">
      <div className="project-header">
        <h2>Portfolio</h2>
        <h3>Here are some personal projects that I did!</h3>
      </div>
      <div className="project-content">
        <div className="project-tabs">
          <button
            className={indexToggle === 1 ? "project-btn active" : "project-btn"}
            onClick={() => hanndleIndex(1)}
          >
            <h3>All</h3>
          </button>

          <button
            className={indexToggle === 2 ? "project-btn active" : "project-btn"}
            onClick={() => hanndleIndex(2)}
          >
            <h3>Web Application</h3>
          </button>
          <button
            className={indexToggle === 3 ? "project-btn active" : "project-btn"}
            onClick={() => hanndleIndex(3)}
          >
            <h3>Landing Page</h3>
          </button>
          <button
            className={indexToggle === 4 ? "project-btn active" : "project-btn"}
            onClick={() => hanndleIndex(4)}
          >
            <h3>Desktop Application</h3>
          </button>
        </div>
        <div className="project-cards">
          {indexToggle === 1 &&
            data.map((item) => {
              return <ProjectCard data={item} />;
            })}
          {indexToggle === 2 && returnWebApp(data)}
          {indexToggle === 3 && returnLandingPage(data)}
          {indexToggle === 4 && returnDesktopApp(data)}
        </div>
      </div>
    </div>
  );
};

export default Projects;
