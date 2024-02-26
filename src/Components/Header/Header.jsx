import React, { useState } from "react";
import "./header.css";
const Header = () => {
  const [toggle, setToggle] = useState(true);

  const toggleMenuOnMobile = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <div className="header">
      <nav className="nav-container">
        <a href="index.html" className="nav_logo">
          Bernard
        </a>
        <div className={toggle ? "nav_menu" : "nav_menu showmenu"}>
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#homesection" className="nav_link">
                <i className="uil uil-estate nav_icon"></i>
                <h3>Home</h3>
              </a>
            </li>
            <li className="nav_item">
              <a href="#skillssection" className="nav_link">
                <i className="uil uil-code-branch nav_icon"></i>
                <h3>Skills</h3>
              </a>
            </li>
            <li className="nav_item">
              <a href="#projectssection" className="nav_link">
                <i className="uil uil-desktop nav_icon"></i>
                <h3>Project</h3>
              </a>
            </li>
            <li className="nav_item">
              <a href="#contactsection" className="nav_link">
                <i className="uil uil-envelope-alt nav_icon"></i>
                <h3>Contact</h3>
              </a>
            </li>
          </ul>
        </div>
        <div nav_toggle>
          {toggle ? (
            <button
              className="nav-menubtn"
              onClick={() => toggleMenuOnMobile()}
            >
              <i className="uil uil-bars hamburgerbtn"></i>
            </button>
          ) : (
            <button
              className="nav-menubtn"
              onClick={() => toggleMenuOnMobile()}
            >
              <i className="uil uil-multiply closebtn"></i>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
