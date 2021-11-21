import "../../css/home/Navba.css";
import { Link } from "react-router-dom";
function Navba(props) {
  if (props.isProfile == 0) {

    return (
      <>
        <div className="top">
          <div className="logo-cont">
            <Link to="/">
              <img src="./Images/logo.svg" className="logo" /></Link>
          </div>
          <div className="top-cont">
          {/* <div className="icon-cont"> */}
            <Link to="/Buyerdash" className="top-icon" style={{ textDecoration: "none" }}><p className="reg-but" >Profile</p></Link>
            <Link to="/Registration" className="top-icon" style={{ textDecoration: "none" }}><p className="reg-but" >Register</p></Link>
            <Link to="/Cart" className="top-icon"><i class="fas fa-shopping-cart"></i></Link>
            <Link to="/Like" className="top-icon"><i class="fas fa-bookmark"></i></Link>
            <Link to="/Login" className="top-icon"><i class="fas fa-user"></i></Link>
          </div>
          {/* </div> */}
        </div>
      </>
    );
  }
  else if (props.isProfile == 1) {

    return (
      <>
        <div className="top">
          <div className="logo-cont">
            <Link to="/">
              <img src="./Images/logo.svg" className="logo" /></Link>
          </div>
          <div className="top-cont">
            <Link to="/Creatordash" className="top-icon" style={{ textDecoration: "none" }}><p className="reg-but" >Profile</p></Link>
            <Link to="/Registration" className="top-icon" style={{ textDecoration: "none" }}><p className="reg-but" >Register</p></Link>
            <Link to="/Cart" className="top-icon"><i class="fas fa-shopping-cart"></i></Link>
            <Link to="/Like" className="top-icon"><i class="fas fa-bookmark"></i></Link>
            <Link to="/Login" className="top-icon"><i class="fas fa-user"></i></Link>
          </div>
        </div>
      </>
    );
  }
  else {
    return (
      <>
        <div className="top">
          <div className="logo-cont">
            <Link to="/">
              <img src="./Images/logo.svg" className="logo" /></Link>
          </div>
          <div className="top-cont">
            <Link to="/Registration" className="top-icon" style={{ textDecoration: "none" }}><p className="reg-but" >Register</p></Link>
            <Link to="/Cart" className="top-icon"><i class="fas fa-shopping-cart"></i></Link>
            <Link to="/Like" className="top-icon"><i class="fas fa-bookmark"></i></Link>
            <Link to="/Login" className="top-icon"><i class="fas fa-user"></i></Link>
          </div>
        </div>
      </>
    );
  }

}
export default Navba;