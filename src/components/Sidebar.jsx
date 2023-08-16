import React from "react";
import side from "../assets/side.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMaximize,
  faWallet,
  faUserPlus,
  faFileLines,
  faFileCircleCheck,
  faHandHoldingDollar,
  faBookOpenReader,
  faPhone,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Link,NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Sidebar = () => {
  return (
    <div className="sidebar-div">
      <img src={side} className="side" alt="side" />
      <nav className="sideee">
        <ul>
          <li className="first-active">
            <NavLink activeClassName="active" to="/dashboard">  <span> <FontAwesomeIcon icon={faWindowMaximize} /> </span>  Dashboard
            </NavLink>
          </li>
          <li>
          <Link to="#"><span> <FontAwesomeIcon icon={faWallet} /></span>   Wallet</Link></li>
          <li className="second-active">
            <NavLink to="/employee"><span><FontAwesomeIcon icon={faUserPlus} /></span>   Employee Management</NavLink> 
          </li>
          <li>
           <Link to="#"><span><FontAwesomeIcon icon={faFileLines} /></span>   Payroll</Link>
          </li>
          <li>
          <Link to="#"><span><FontAwesomeIcon icon={faFileCircleCheck} /></span>  Compliance</Link>
          </li>
          <li>
          <Link to="#"><span><FontAwesomeIcon icon={faHandHoldingDollar}/></span>  Quick Loan</Link>  
          </li> 

          <li>
          <Link to="#"><span><FontAwesomeIcon icon={faBookOpenReader} /></span>   Book keeping</Link>     
          </li>

          <li>
          <Link to="#"><span><FontAwesomeIcon icon={faPhone}/></span>  Support</Link>
          </li>

          <li>
            <Link to="#"><span><FontAwesomeIcon icon={faGear} /></span>  Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
