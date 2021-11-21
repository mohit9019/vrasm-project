import React from "react";
import "../../css/home/Card.css";
import { Link } from "react-router-dom";
const Card=(props)=>{
  return(
    <>
    <div className="card-cont">
      <div className="image_div"><img src={props.img} className="img" alt="IMAGE"/></div>
      <div className="content">
        <h4>{props.title}</h4>
        <span className="disc">{props.desc}</span>
        <span className="stars">{props.review}</span>
        <div className="about"><span className="sale">Sale: {props.sale}</span><span className="price">{props.price}</span></div>
        <div className="icon">
        <Link className="pre" to="/Preview"  style={{textDecoration:"none", color:"darkgray"}} >
        <i class="fas fa-shopping-cart"></i>
        </Link>
        <Link className="pre" to="/Preview"  style={{textDecoration:"none", color:"darkgray"}} >
        <i class="fas fa-bookmark"></i>
        </Link>
        <Link className="pre" to="/Preview"  style={{textDecoration:"none", color:"darkgray"}} >
        <i class="fas fa-binoculars"></i>
        </Link>
        </div>  
      </div>
    </div>
  </>);
  }
  export default Card;