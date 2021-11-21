import "../../css/buyer dashboard/Myorder.css";
function Ordercard(){
    return( 
        <>
            <div className="my-order">
                {/* <p>Oops... No Orders yet</p>  */}
                <div className="order-card">
                <div className="order-date"><p>wed, 09/07/2021</p></div>
                    <div className="order-cont ">
                    <div className="order-img"><img src="./images/113.jpg" altlt="image" /></div>
                    <div className="order-details">
                        <span className="order-name">Template Name</span>
                        <span className="order-desc">Template description........fpjqpidjfifmanelfnsldnflksldenflsndelnslehgshnwlogswjgoirhwprjtipwjrigwiqjeifhqpiwhfoqjeiofhqipehfoiqjhfoiwejheofgouh</span>
                        <span className="order-id">ID: TEMP123456</span>
                    </div>
                    <div className="order-price">$20</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Ordercard;