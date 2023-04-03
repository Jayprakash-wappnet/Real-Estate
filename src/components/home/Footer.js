import React from "react";
import Footer_icon from "../../assets/Footer_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-icon" src={Footer_icon} alt="" />

      <div className="footer-text">Real Estate Landing Page</div>
    </div>
  );
};

export default Footer;
