import React from "react";
import HeaderData from "../../data/HeaderData";
import TheHom_logo from "../../assets/TheHom_logo.png";
import "../../styles/style.css";

function NavBar() {
  return (
    <div>
      <nav className=" d-flex navbar navbar-expand-lg bg-body-tertiar">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={TheHom_logo}
              alt="not found"
              height="39px"
              width="131px"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 align-items-center justify-content-end">
              {HeaderData.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <a href={item.path} className={item.className2}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
              <li className="nav-item justify-content-end">
                <a className="nav-link justify-content-end" href="/">
                  <button className="button-primary" type="submit">
                    Sign In
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
