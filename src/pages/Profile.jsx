import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import businessz from "../assets/businessz.png";
import edit from "../assets/edit.png";
import Alog from "../assets/Alog.png";
import registered from "../assets/registered.png";

const Profile = () => {
  return (
    <div>
      <div className="bar-sett-bell">
        <FontAwesomeIcon icon={faBars} className="bar" />
        <h3>Settings</h3>
        <FontAwesomeIcon icon={faBell} className="belll" />
      </div>
      <div className="profile-div">
        <img src={businessz} className="businessz" alt="businessz" />
        <br/>
        <img src={edit} className="edit"alt="edit"/>
        <br/>
        <img src={Alog} className="Alog" alt="Alog"/>
        <br/>
        <div className="inp-1">
            <label htmlFor="Company Name">Company Name</label>
            <input type="text" placeholder="Juyonna Travels"/>

        </div>

        <img src={registered} className="registered" alt="registered"/>

        <div className="inp-1">
            <label htmlFor="Office Address">Office Address</label>
            <input type="text" placeholder="17, Simbiat Abiola Way, Ikeja"/>
            <input type="file" placeholder="Upload Proof of Address"/>

        </div>

        <div className="inp-1">
            <label htmlFor="Company Size">Company Size</label>
            <input type="text" placeholder="100 and above"/>

        </div>

        <div className="inp-1">
            <label htmlFor="Pension Code"> Pension Code</label>
            <input type="text" placeholder="ADDFER4546GDGG76"/>
        </div>

        <div className="inp-1">
            <label htmlFor=" PAYE State">PAYE State</label>
            <input type="text" placeholder="Lagos"/>

        </div>

        <div className="inp-1">
            <label htmlFor=" PAYE ID">PAYE ID</label>
            <input type="text" placeholder="N-12565432"/>

        </div>

        <div className="inp-1">
            <label htmlFor=" NHF Code">NHF Code</label>
            <input type="text" placeholder="100667ZUHEG4"/>

        </div>

        <div className="inp-1">
            <label htmlFor="Website">Website</label>
            <input type="text" placeholder="www.customerwebsite.com"/>

        </div>

        <div className="inp-1">
            <label htmlFor=" Industry">Industry</label>
            <input type="text" placeholder="Travel & Tourism"/>

        </div>

        <div className="canc-save">
            <button id="canc" className="btn btn-outline-dark">Cancel</button>
            
            <button id="save" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
