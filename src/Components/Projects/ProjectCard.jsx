import React from "react";
import "./projectcard.css";
import pos from "../../assets/Images/pos.jpg";
const ProjectCard = ({ data }) => {
  return (
    <div className="projectcard-container" id={data.id}>
      <div className="projectcard-card">
        <div className="projectcard-img">
          <img src={data.img} alt="PosPicture" />
        </div>
        <div className="projectcard-footer">
          <h2>{data.ProjectName}</h2>
        </div>
        <div className="projectcard-links">
          <a href={data.link} target="_blank">
            <h3 className="repo">
              <i class="uil uil-github"></i>Repository
            </h3>
          </a>
          {data.demo !== null && (
            <a href={data.demo} target="_blank">
              <h3 className="demo"> Demo</h3>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
