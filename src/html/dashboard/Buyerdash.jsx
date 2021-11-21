import "../../css/buyer dashboard/Buyerdash.css";
import Navba from "../home/Navba";
import Personalinfo from "./Personalinfo";
import Myorder from "./Myorder";
import Editprofile from "./Editprofile";
import Changepass from "./Changepass";
import Wallet from "./Wallet";
import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import {Routes, Route,} from 'react-router-dom';
import { useState } from "react";

function Buyerdash(){
    return(
        <>
        <Navba />
        <div className="buyer-dashboard">
            <Sidebar />                
                <Routes>
                <Route path="/Personalinfo" element={<Personalinfo />} />
                <Route path="/Editprofile" element={<Editprofile />} />
                <Route path="/Myorder" element={<Myorder />} />
                <Route path="/Changepass" element={<Changepass />} />
                <Route path="/Wallet" element={<Wallet />} />
                </Routes>
            </div>
        </>
    );
}
export default Buyerdash;