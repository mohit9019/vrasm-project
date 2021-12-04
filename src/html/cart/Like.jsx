import React from "react";
import Navba from "../home/Navba";
import "../../css/cart/Cart.css";
import {Link} from "react-router-dom";
import Data from "../home/Data";
import details from "../home/Detailsmap";
function Like(){
    let CartData = [Data[4],Data[3]];
    return(
        <>
            {/* <div className="oops"><p className="msg">Oops... you didn't save any yet</p></div>
            <center><Link to="/" className="home" style={{textDecoration:"none"}}><i class="fas fa-home"></i></Link></center> */}
            {CartData.map(details)}
        </>
    );
}
export default Like;