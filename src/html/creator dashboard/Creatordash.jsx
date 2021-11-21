import "../../css/buyer dashboard/Buyerdash.css";
import Navba from "../home/Navba";
import Personalinfo from "./Personalinfo";
import Editprofile from "./Editprofile"; 
import Changepass from "../dashboard/Changepass";
import Wallet from "../dashboard/Wallet";
import React from "react";
import { Link } from "react-router-dom";
import {Routes, Route,} from 'react-router-dom';
import Analysis from "./Analysis";
import { useState } from "react";
import Uploadtemp from "./Uploadtemp";
function Creatordash(){
    return(
        <>
        <Navba />
        <div className="buyer-dashboard">
                <div className="side-bar">
                    <div className="profile"><center><img className="pic" src="./Images/profile.jpg" alt="image" />
                    <p>Mohit Chauhan</p></center></div>
                    <div className="bar"></div>
                    <input type="checkbox" className="check"></input>
                    <div className="info">
                    <Link to="/" style={{textDecoration:"none"}}><p>Personal Information</p><div className="bar"></div></Link>
                    <Link to="/Changepass" style={{textDecoration:"none"}}><p>Change Password</p><div className="bar"></div></Link>
                    <Link to="/Analysis" style={{textDecoration:"none"}}><p>Analysis</p><div className="bar"></div></Link>
                    <Link to="/Uploadtemp" style={{textDecoration:"none"}}><p>Upload Template</p><div className="bar"></div></Link>
                    <Link to="/Wallet" style={{textDecoration:"none"}}><p>Wallet</p><div className="bar"></div></Link>
                    </div>
                </div>
                <Routes>
                <Route exact path="/" element={<Personalinfo />} />
                <Route exact path="/Editprofile" element={<Editprofile />} />
                <Route exact path="/Analysis" element={<Analysis />} />
                <Route exact path="/Uploadtemp" element={<Uploadtemp />} />
                <Route exact path="/Changepass" element={<Changepass />} />
                <Route exact path="/Wallet" element={<Wallet />} />
                </Routes>
            </div>
        </>
    );
}
export default Creatordash;