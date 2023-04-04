import React from "react";
import Footer_icon from "../../assets/Footer_icon.png";

const Footer = () => {
  return (
    <div className="footer">

      {/* Footer Icon start */}
      <img className="footer-icon" src={Footer_icon} alt="" />
      {/* Footer Icon end */}

      {/* Footer Text start */}
      <div className="footer-text">Real Estate Landing Page</div>
      {/* Footer Text end */}
 
    </div>
  );
};

export default Footer;
