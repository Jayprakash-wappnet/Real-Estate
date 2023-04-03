import "./style.css";
import Location_icon from "../../assets/Location_icon.png";
import Symbol1 from "../../assets/Symbol1.png";
import Symbol2 from "../../assets/Symbol2.png";
import Symbol3 from "../../assets/Symbol3.png";
import Like from "../../assets/Like.png";
import Share from "../../assets/Share.png";
import PropertyData from "../../data/PropertyData";

import React from "react";

const Property = () => {
  return (
    <div className="container mt-5">
      <div className="heading">
        <h3 className="title-text">OUR PROPERTY</h3>
        <h2>LATEST PROPERTY</h2>
      </div>

      <div className="d-lg-flex d-flex flex-column align-items-center flex-lg-row justify-content-lg-evenly">
        {PropertyData.map((cardItem, index) => {
          return (
            <div className="card mt-5" key={index}>
              <button className="for-sale-button"> For Sale </button>
              <img
                className="card-img-top"
                src={cardItem.propertyImage}
                alt="Card-cap"
              />
              <div className=" card-body">
                <div className="d-flex card-title justify-content-between">
                  <div className="">
                    <h5>Duplex Apartment</h5>
                  </div>
                  <div>
                    <h6 className="amount">$140,000</h6>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src={Location_icon}
                      className="location-icon icon-size"
                      alt="location"
                    />
                  </div>
                  <div>Mirpur City, Dhaka</div>
                </div>
                <div className="propert-details d-flex justify-content-between mt-2">
                  <div className="badroom-details d-flex">
                    <div>
                      <img className="icon-size" src={Symbol1} alt="sysmbol" />
                    </div>
                    <div>4</div>
                  </div>
                  <div className=" bathroom-details d-flex">
                    <div>
                      <img className="icon-size" src={Symbol2} alt="sysmbol" />
                    </div>
                    <div>2</div>
                  </div>
                  <div className="area-details d-flex">
                    <div>
                      <img className="icon-size" src={Symbol3} alt="sysmbol" />
                    </div>
                    <div>1200 sqft</div>
                  </div>
                </div>
                <hr />
                <div className="profile d-flex justify-content-between align-content-center">
                  <div className="d-flex align-items-center">
                    <img
                      className="profile-size"
                      src={cardItem.profileImage}
                      alt="not found"
                    />
                    <h5> {cardItem.profileName} </h5>
                  </div>
                  <div>
                    <img className="like-share" src={Like} alt="like" />
                    <img className="like-share" src={Share} alt="share" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <button className="button-see-all mt-5"> See All</button>
      </div>
    </div>
  );
};

export default Property;
