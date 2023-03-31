import React, { useState } from "react";
import HeaderData from "../../data/HeaderData";
import TheHom_logo from "../../assets/TheHom_logo.png";
import "./style.css";

function Header() {
  const [activeOption, setActiveOption] = useState(HeaderData[0]);

  const handleClick = (item) => {
    setActiveOption(item);
  };

  return (
    <div>
      <nav className=" d-flex navbar navbar-expand-lg bg-body-tertiar">
        <div className="container">
          {/* Logo start */}
          <a className="navbar-brand" href="/">
            <img
              src={TheHom_logo}
              alt="not found"
              height="39px"
              width="131px"
            />
          </a>

          {/* Logo end */}

          {/* Toggle button start */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          {/* Toggle button end */}

          {/* Header menu start */}
          <div
            className="header-menu offcanvas offcanvas-end justify-content-center d-block "
            id="offcanvasNavbar"
            tabIndex="-1"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <ul className="navbar-nav mb-2 mb-lg-0 align-items-center justify-content-end">
              {HeaderData.map((item, index) => {
                return (
                  <li key={index} className="nav-items px-2">
                    <a
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(item);
                      }}
                      className={
                        activeOption === item
                          ? "active-option"
                          : "inactive-option"
                      }
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
              <li className="nav-item justify-content-end">
                {/* Sign in button */}
                <div className="nav-link justify-content-end" href="/">
                  <button className="button-primary" type="submit">
                    Sign In
                  </button>
                </div>

                {/* Sign in button end */}
              </li>
            </ul>
          </div>
          {/* Header menu end */}
        </div>
      </nav>
    </div>
  );
}

export default Header;
