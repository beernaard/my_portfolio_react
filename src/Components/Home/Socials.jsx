import React from "react";
import "./socials.css";
const Socials = () => {
  return (
    <div className="home-social">
      <a
        href="https://www.linkedin.com/in/bernard-lagoc/"
        className="home-social-icons"
        target="_blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/beernaard"
        target="_blank"
        className="home-social-icons"
      >
        <i class="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Socials;
