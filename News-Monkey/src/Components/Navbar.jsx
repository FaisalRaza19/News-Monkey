import React from "react";
import { Link } from "react-router-dom";
import Countries from "./Countries";
import monkey from "../../Pic1.png";

const Navbar = ({ onCountryChange }) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img src={monkey} alt="" width={25} />
        <Link className="navbar-brand" to="/">
          NewsMonkey
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {["general","business","entertainment","health","science","sports","technology"].map((cat) => (
              <li className="nav-item" key={cat}>
                <Link className="nav-link" to={cat === "general" ? "/" : `/${cat}`}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          <Countries onCountryChange={onCountryChange} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
