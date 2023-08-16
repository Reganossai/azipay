import React from "react";
import Sidebar from "../components/Sidebar";
import ovrl from "../assets/ovrl.png";
import chart from "../assets/chart.png";
import recent from "../assets/recent.png";
import wednesday from "../assets/wednesday.png";
import Navbarr from "../components/Navbarr";
import carter from "../assets/carter.png";
import balance from "../assets/balance.png";
import total from "../assets/total.png";
import employee from "../assets/employee.png";
import quick from "../assets/quick.png";
import bottom from "../assets/bottom.png";
import stats from "../assets/stats.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Dashboard = ({username}) => {
  return (
    <div className="dashboard-div">
      <Navbarr />
      <Sidebar />
      <div className="ovrl">
     <img src={ovrl} className="ovrl-cont"/>
     <img src={chart} className="chart"/>
     <img src={recent} className="recent"/>
     <br/>
     <div className="search-dashboard">
     <input type="search" placeholder="Search employee"/>
     <button className="search-bn"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
     <button id="filter-btn" className="btn btn-outline-dark">Filter</button>
     </div>
     <img src={wednesday} className="wednesday"/>
      </div>

      <div className="mobile">
      <div className="wass">
        <span><img src={carter} className="carter"/></span><h1>Hello Wasiu</h1>
        <div><FontAwesomeIcon icon={faBell} className="notification"/></div>
      </div>
      <img src={balance} className="balance" alt="balance"/>
      <img src={stats} className="stats" alt="stats"/>
      <div className="total-employee">
        <img src={total} className="total" alt="total"/>
        <Link to="/employee"><img src={employee} className="employee" alt="employee"/></Link>
      </div>

      <img src={quick} className="quick" alt="quick"/>
      <img src={bottom} className="bottom" alt="bottom"/>
      </div>
    </div>
  );
};


