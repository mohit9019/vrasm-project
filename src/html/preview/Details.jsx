import "../../css/preview/Preview.css";
import Overview from "./Overview";
import Features from "./Features";
import {Link} from "react-router-dom";
import React, {Component} from "react";
import {Routes, Route,} from 'react-router-dom';
function Details(){
    return(
        <>
            <center><div className="temp-detail">
                <div className="detail">
                    <div className="nest">
                        <h2 className="name">Template Name</h2>
                        <div className="buton">
                        <Link to="/"><button className="bt">Overview</button></Link>
                        <Link to="/Features"><button className="bt">Details</button></Link></div>
                    </div>
                    <Routes>
                        <Route exact path="/" element={<Overview />} />
                        <Route exact path="/Features" element={<Features />} />
                    </Routes>
                    <center><button className="download">Buy this Template</button></center>
                </div>

                {/* <div className="form">
                    <div className="form-detail">
                        <h2 id="line">Feedback</h2>
                        <h3 className="feedback">Fill This Form:</h3>
                        <div className="line"></div>
                        <div className="inputs">
                            <input type="text" placeholder="Full Name"></input>
                            <input type="text" placeholder="E-mail"></input>
                            <input type="text" placeholder="Contact Numer"></input>
                            <input type="text" placeholder="Product ID"></input>
                        </div>
                        <center><button className="download">Send Feedback</button></center>
                    </div>
                </div> */}
            </div></center>
        </>
    );
}
export default Details;