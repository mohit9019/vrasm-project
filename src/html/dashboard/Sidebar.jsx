import "../../css/buyer dashboard/Buyerdash.css";
import {Link} from "react-router-dom";
function Sidebar(){
    return(<>
    <div className="side-bar" >
                    <div className="profile"><center><img className="pic" src="./Images/profile.jpg" alt="image" />
                    <p>Mohit Chauhan</p></center></div>
                    <div className="bar"></div>
                    <div className="info">
                    <Link to="/Personalinfo" style={{textDecoration:"none"}}><p>Personal Information</p><div className="bar"></div></Link>
                    {/* <Link to="/Editprofile" style={{textDecoration:"none"}}><p>Edit Profile</p><div className="bar"></div></Link> */}
                    <Link to="/Myorder" style={{textDecoration:"none"}}><p>My Orders</p><div className="bar"></div></Link>
                    <Link to="Changepass" style={{textDecoration:"none"}}><p>Change Password</p><div className="bar"></div></Link>
                    <Link to="/Wallet" style={{textDecoration:"none"}}><p>Wallet</p><div className="bar"></div></Link>
                    </div>
                </div>
                </>
    );
}
export default Sidebar;