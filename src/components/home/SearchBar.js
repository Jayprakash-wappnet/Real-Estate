import React, { useState } from "react";
import SectionData from "../../data/SectionData";
import "./style.css";

const SearchBar = () => {
  const [activeSection, setActiveSection] = useState(SectionData[0]);

  const handleSectionClick = (item) => {
    setActiveSection(item);
  };
  return (
    <div className="dummy-demo section-position">
      <div className="section-color ">
        {/* section option start */}
        <div className="d-flex align-items-center justify-content-center ">
          {SectionData.map((section, index) => {
            return (
              <div key={index} className="me-5 ">
                <a
                  href={section.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(section);
                  }}
                  className={`d-flex ${
                    activeSection === section
                      ? "active-section"
                      : "inactive-section"
                  }`}
                >
                  {section.sectionName}
                </a>
              </div>
            );
          })}
        </div>
        {/* section option end */}

        {/* searchbar start */}
        <div className="display-button align-items-center justify-content-center">
          <div className="input-group  align-items-center justify-content-center">
            <input
              className="input-search "
              type="search"
              placeholder="Search State or Postcode"
              aria-label="Search"
            />

            <select className="drop-down" aria-label="Default select example">
              <option defaultValue>Advanced filter</option>
              <option value="1">Rome</option>
              <option value="2">Giza</option>
              <option value="3">Sabinas</option>
              <option value="3">Beijing </option>
            </select>
          </div>
          <div>
            <button type="button" className="button-secondary button-margin">
              Search
            </button>
          </div>
          {/* searchbar end */}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
