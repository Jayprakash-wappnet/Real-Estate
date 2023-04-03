import React from "react";
import "./style.css";
import House from "../../assets/House.png";

const Banner = () => {
  return (
    <div className="banner d-lg-flex  container-fluid  justify-content-center align-items-center flex-md-row flex-sm-colum">
      {/* Text */}
      <div className="banner-text col-lg-5 ">
        <div className="d-flex banner-title text-box text-start justify-content-center">
          <h1 className="banner-text-black">
            Find Your Best <br /> Smart
            <span className="banner-text-blue">
              {" "}
              Real <br /> Estate
            </span>
          </h1>
        </div>
      </div>

      {/* Image */}
      <div className="banner-image col-lg-7">
        <img src={House} alt="Not Found" className="image-size" />
      </div>
    </div>
  );
};

export default Banner;
