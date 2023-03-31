import React from "react";
import "./style.css";
import AboutUsData from "../../data/AboutUsData";

const WhatWeDo = () => {
  return (
    <div className="container">
      <div className="heading">
        <h3 className="title-text">WHAT WE DO</h3>
        <h2>OUR MAIN FOCUS</h2>
      </div>
      <div className="d-lg-flex flex-md-row flex-lg-row">
      {AboutUsData.map((cardItem, index) => {
        return(
          <div className="  AboutUs mt-5" key={index}>
          <div className=" card text-start mb-3" style={{ width: "20rem" }}>
            <div className="card-body">
              <div className="card-icon">
                <img className="icon" src={cardItem.cardLogo} alt="not found" />
              </div>
              <div className="card-title">
                <h2> {cardItem.cardTitle} </h2>
              </div>
              <p className="card-text">
                It is a long established fact that a reader will be distracted
                readable content of a page
              </p>
              <button className="seemore-button">See more</button>
            </div>
          </div>
        </div>    
        )
      })}
      </div>
      
    </div>
  );
};

export default WhatWeDo;
