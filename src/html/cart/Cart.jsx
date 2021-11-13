import Navba from "../home/Navba";
import "../../css/cart/Cart.css";

function Cart(){
    return(
        <>
        <Navba />
        <div className="searchbar"><i class="fas fa-search"></i><input className="search"></input></div>
        <div className="oops"><p className="msg">Oops... Your Cart is Empty</p></div>
        </>
    );
}
export default Cart;