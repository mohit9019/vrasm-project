import "../../css/home/Navba.css";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import Registration from "../registration/Registration";
// import {Link} from "react-router-dom";
function Navba(){
    return(
        <>
           <div className="top">
             <div className="logo-cont">
              <img src="./Images/logo.svg" className="logo" />
             </div>
             <div className="top-cont">
             <div className="top-icon"><Link to="/Registration"><p className="reg-but">Register</p></Link></div>
             <div className="top-icon"><Link to="/Cart"><i class="fas fa-shopping-cart"></i></Link></div>
             <div className="top-icon"><i class="fas fa-bookmark"></i></div>
             <div className="top-icon"><Link to="/Login"><i class="fas fa-user"></i></Link></div>
             </div>
           </div>
        </>
    );
}
export default Navba;