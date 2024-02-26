import React from "react";
import "./footercard.css";
const FooterCard = ({ category, data }) => {
  return (
    <div className="footercard-container">
      {category === ("phone" || "email") ? (
        <i class="uil uil-mobile-android-alt"></i>
      ) : (
        <i class="uil uil-envelope"></i>
      )}

      <h3>{data}</h3>
    </div>
  );
};

export default FooterCard;
