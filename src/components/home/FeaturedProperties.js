import React from "react";
import FeaturedPropertyData from "../../data/FeaturedPropertyData";
import Symbol1 from "../../assets/Symbol1.png";
import Symbol2 from "../../assets/Symbol2.png";
import Symbol3 from "../../assets/Symbol3.png";
import Location_icon from "../../assets/Location_icon.png";

const FeaturedProperties = () => {
  return (
    <div className="featured-property mt-5">
      <div className="heading heading-feature-property">
        <h3 className="title-text">PROPERTIES</h3>
        <h2>FEATURED PROPERTIES</h2>
      </div>

      <div className="d-flex flex-column align-items-center d-lg-flex  flex-lg-row justify-content-evenly">
        {FeaturedPropertyData.map((propertyItem, index) => {
          return (
            <div className="card mt-5" key={index}>
              <img
                className="card-img-top featured-property-image"
                src={propertyItem.PropertyImage}
                alt="Card-cap"
              />
              <div className=" card-body">
                <div className="d-flex card-title justify-content-between">
                  <div className="text-start">
                    <h6>Villa on Washington Avenue</h6>
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
                </div>{" "}
                <hr />
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
              </div>
            </div>
          );
        })}
      </div>
      <div className="featured-property-see-all-button">
        <button className="button-see-all  mt-5"> See All</button>
      </div>
    </div>
  );
};

export default FeaturedProperties;
