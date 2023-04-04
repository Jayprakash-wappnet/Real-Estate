import React from "react";
import "./style.css";
import AboutUsData from "../../data/AboutUsData";

const WhatWeDo = () => {
  return (
    // WhatWeDO section Start
    <div className="WhatWeDoSwction container mt-3">

      {/* WhatWeDO Heading start */}
      <div className="heading">
        <h3 className="title-text">WHAT WE DO</h3>
        <h2>OUR MAIN FOCUS</h2>
      </div>
      {/* WhatWeDO Heading end */}

      {/* WhatWeDo card Details Start */}
      <div className="d-lg-flex flex-lg-row justify-content-lg-evenly d-flex flex-column align-items-center justify-content-center ">
        {AboutUsData.map((cardItem, index) => {
          return (
            <div className="  AboutUs mt-5" key={index}>
              <div className=" card text-start mb-3">
                <div className="card-body">
                  {/* Card Icon start */}
                  <div className="card-icon">
                    <img
                      className="icon"
                      src={cardItem.cardLogo}
                      alt="not found"
                    />
                  </div>
                  {/* Card Icon end */}

                  {/* Card title start */}
                  <div className="card-title">
                    <h2> {cardItem.cardTitle} </h2>
                  </div>
                  {/* Card title end */}

                  {/* Card Text start */}
                  <p className="card-text">
                    It is a long established fact that a reader will be
                    distracted readable content of a page
                  </p>
                  {/* Card Text end */}

                  {/* See more Button Start */}
                  <button className="seemore-button">See more</button>
                  {/* See more Button end */}

                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* WhatWeDo card Details end */}

    </div>
    // WhatWeDo section end
  );
};

export default WhatWeDo;
