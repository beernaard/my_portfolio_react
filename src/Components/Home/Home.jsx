import React from "react";
import "./home.css";
import Socials from "./Socials";
import Data from "./Data";
import homeimage from "../../assets/Images/homeimage.jpg";
const Home = () => {
  const downLoadCv = () => {
    const fileName = "Lagoc,Bernard Jr V-Resume.pdf";
    const link = document.createElement("a");

    link.download = fileName;
    link.href = "src/assets/Lagoc,Bernard Jr V-Resume.pdf";

    // link.href =
    //   "https://github.com/beernaard/my_portfolio_react/blob/470318420b7895fbcff88b1e6a05e14e49cb68ca/src/assets/Lagoc%2CBernard%20Jr%20V-Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-data">
          <Data />
        </div>
        <button className="home-btn-download" onClick={() => downLoadCv()}>
          <p>Download CV</p>
          <i class="uil uil-arrow-circle-down btn-icon"></i>
        </button>
        <div className="socials-content">
          <Socials />
        </div>
      </div>
      <div className="home-img">
        <img src={homeimage} alt="HomeImage" />
      </div>
    </div>
  );
};

export default Home;
