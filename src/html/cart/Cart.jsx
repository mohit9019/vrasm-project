import Navba from "../home/Navba";
import "../../css/cart/Cart.css";
import Card  from "../home/Card";
import Data from "../home/Data";
import details from "../home/Detailsmap";

function Cart(){
    let CartData = [Data[0],Data[1],Data[2]];   
    return(
        <>
        {/* <div className="searchbar"><i class="fas fa-search"></i><input className="search"></input></div>
        <div className="oops"><p className="msg">Oops... Your Cart is Empty</p></div> */}
        {CartData.map(details)}
        </>
    );
}
export default Cart;