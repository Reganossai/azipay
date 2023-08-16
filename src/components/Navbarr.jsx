import image from "../assets/logooo.png";
import profile from "../assets/profile.png";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars, faBell } from "@fortawesome/free-solid-svg-icons";


const Navbarr = () => {
  const [nav, setNav] = useState(false);
  

  const handleNav = () => {
    setNav(!nav);
  };

  nav
    ? (document.body.style.overflowX = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <div className="nav-us">
      <nav className="navbar navbar-expand-lg">
        <Link to="/">
          <img src={image} className="logooo" alt="logoo" />
        </Link>
        <div id="navbarSupportedContentt">
          <ul>
            <li>
              <Link to="/profile"><img src={profile} className="profile" /></Link>
            </li>

            <div onClick={handleNav} className="zaracho">
              {nav ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
          </ul>
        </div>
        {nav ? (
          <div id="navbarSupportedContentMobile">
            <ul>
           
            </ul>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbarr;
