
import "../../css/home/Banner.css";
import Categories from "../categories/Categories";
import Navba from "./Navba";
function Banner(){
    return(
        <>
        {/* <Categories /> */}
        <center>
        <div className="banner">
            <div className="ban"><img src="/Images/banner-left.png" className="ban" />
            <p className="ban-text">FRONT-END DESIGNER</p></div>
        </div>
        <div className="banner">
        <div className="ban">
            <img src="/Images/banner-right.png" className="ban" />
            <p className="ban-text">FRONT-END DEVELOPER</p></div>
        </div></center>
        </>
    );
}
export default Banner;