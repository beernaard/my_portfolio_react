import React from "react";
import "./footer.css";
import FooterCard from "./FooterCard";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-header">
            <h3>Get in touch</h3>
            <p>I don't really know what to put here so...:D</p>
          </div>
          <div className="footer-icons">
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
        </div>
        <div className="footer-card">
          <div>
            <FooterCard category="phone" data="+639482301285" />
          </div>
          <div>
            <FooterCard category="email" data="lagocbj11@gmail.com" />
          </div>
        </div>
      </div>
      <div className="footer-end"></div>
      <div className="footer-end-c">
        <h3>&copy; Copyright 2024, Mady by Bernard Lagoc</h3>
        <h3>
          Vector Art designed by <a href="https://www.freepik.com">Freepik</a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
