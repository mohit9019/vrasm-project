import React from "react";
import "../../css/home/Card.css";
const Card=(props)=>{
  return(
    <>
    <div className="card-cont">
      <div className="image_div"><img src={props.img} className="img" alt="IMAGE"/></div>
      <div className="content">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <p>{props.review}</p>
        <div className="about"><p>{props.sale}</p><p>{props.price}</p></div>
        <div className="icon">
        <i class="fas fa-shopping-cart"></i>
        <i class="fas fa-bookmark"></i>
        <i class="fas fa-binoculars"></i>
        </div>
      </div>
    </div>
  </>);
  }
  export default Card;