import React from "react";
import Navba from "../home/Navba";
import "../../css/cart/Cart.css";
import {Link} from "react-router-dom";
function Like(){
    return(
        <>
            <Navba />
            <div className="oops"><p className="msg">Oops... you didn't save any yet</p></div>
            <center><Link to="/" className="home" style={{textDecoration:"none"}}><i class="fas fa-home"></i></Link></center>
        </>
    );
}
export default Like;