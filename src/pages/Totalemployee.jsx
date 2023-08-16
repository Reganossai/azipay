import React from "react";
import Navbarr from "../components/Navbarr";
import Sidebar from "../components/Sidebar";
import employeecount from "../assets/employeecount.png";
import Tab from "../assets/Tab.png";
import employeelist from "../assets/employeelist.png";
import eazi from "../assets/eazi.png";
import bottom from "../assets/bottom.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Totalemployee = () => {
  return (
    <div className="dashboard-div">
      <Navbarr />
      <Sidebar />
      <div className="ovrl">
        <img src={eazi} className="eazi" alt="eazi" />
        <img
          src={employeecount}
          className="employeecount"
          alt="employeecount"
        />

        <img src={Tab} className="Tab" alt="Tab" />
        <div className="searchh">
          <input type="text" />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button id="filter-btn" className="btn btn-outline-dark">
            Filter
          </button>
        </div>
        <img src={employeelist} className="employeelist" alt="employeelist" />
      </div>

      <div className="mobile">
        <img src={eazi} className="eazi" alt="eazi" />
        <img
          src={employeecount}
          className="employeecount"
          alt="employeecount"
        />

        <img src={Tab} className="Tab" alt="Tab" />
        <div className="searchh">
          <input type="text" placeholder="search" />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="magnify" />
          </button>
          <button id="filter-btn" className="btn btn-outline-dark">
            Filter
          </button>
        </div>
        <img src={employeelist} className="employeelist" alt="employeelist" />
        <img src={bottom} className="bottom" alt="bottom"/>
      </div>
    </div>
  );
};
