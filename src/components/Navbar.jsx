import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import image from "../assets/eazipay.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  nav
    ? (document.body.style.overflowX = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <div className="nav-usa">
      <nav className="navbar navbar-expand-lg">
        <Link to="/">
          <img src={image} className="logoo" alt="logoo" />
        </Link>

        <div id="navbarSupportedContent">
          <ul>
            <li className="nav-link">
              <Link to="/individual">Individual</Link>
            </li>
            <li className="nav-link">
              <Link to="/Business">Business</Link>
            </li>

            <li className="nav-link">
              <Link to="pricing">Pricing</Link>
            </li>

            <li className="nav-link">
              <Link to="/set-your-payroll">Set Your payroll</Link>
            </li>

            <li>
              <button id="login-bt" className="btn btn-outline-dark">
                Log in
              </button>
            </li>

            <li>
              <button id="register-bt" className="btn btn-primary">
                Register
              </button>
            </li>
            </ul>
        </div>
            <div onClick={handleNav} className="zaracho">
              {nav ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
         
        {nav ? (
          <div id="navbarSupportedContentMobile">
            <ul>
            <li className="nav-link">
              <Link to="/individual">Individual</Link>
            </li>
            <li className="nav-link">
              <Link to="/Business">Business</Link>
            </li>

            <li className="nav-link">
              <Link to="pricing">Pricing</Link>
            </li>

            <li className="nav-link">
              <Link to="/set-your-payroll">Set Your payroll</Link>
            </li>

            <li>
              <button id="login-bt" className="btn btn-outline-dark">
                Log in
              </button>
            </li>

            <li>
              <button id="register-bt" className="btn btn-primary">
                Register
              </button>
            </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
