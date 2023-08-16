import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import run from "../assets/run.png";
import download from "../assets/download.png";
import welcome from "../assets/welcome.png";
import individuals from "../assets/individuals.png";
import how from "../assets/how.png";
import howw from "../assets/howw.png";
import free from "../assets/free.png";
import dot from "../assets/dot.png";
import get from "../assets/get.png";
import first from "../assets/first.png";
import thing from "../assets/thing.png";
import Footer from "../components/Footer";


export const Landingpage = () => {
  return (
    <div>
      <Navbar/>
      <div className="run-welcome">
      <div className="run-we-start">
        <img src={download} className="download" alt="download"/>
      </div>
      <div>
        <img src={welcome} className="welcome" alt="welcome"/>
      </div>
      </div>
      <div>
        <img src={individuals} className="individuals" alt="indi"/>
      </div>
      <div>
        <img src={how} className="how" alt="how"/>
        <img src={howw} className="howw" alt="howw"/>
      </div>
      <div className="free">
        <img src={free} className="free"/>
      </div>

      <div className="dot-get-first">
        <img src={dot} className="dot" alt="dot"/>
        <img src={get} className="get" alt="get"/>
        <div className="fff">
          <img src={thing} className="thing" alt="thing"/>
          <img src={first} className="first" alt="first"/>
          <input type="text" className="inp-2" placeholder="First Name"/>
          <input type="text" className="inp-2" placeholder="Last Name"/>
          <input type="text" className="inp-2" placeholder="Email"/>
          <input type="text" className="inp-2" placeholder="Job Title"/>
          <input type="text" className="inp-2" placeholder="Company Size"/>
          <button type="submit" id="inp-3" className="btn btn-success">Request Demo</button>
        </div>
      </div>
      <Footer/>
      </div>
  );
};
