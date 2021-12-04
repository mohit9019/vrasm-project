import "../../css/preview/Preview.css";
import { Carousel } from "react-bootstrap";
function Overview() {
    return (
        <>
            <center>
            <img className="temp-img" src="/Images/food.jpg" />
            {/* <Carousel className="temp-img">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/Images/113.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/Images/113.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/Images/113.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel> */}
            </center>
            <div className="description">
                <p className="temp-desc">Foodhall is a responsive Blogger theme highlighting a good design for food blogging that brings many awesome.</p>
            </div>
            <div className="techs"><button className="technology">HTML</button>
                <button className="technology">css</button>
                <button className="technology">js</button>
                <button className="technology">react</button>
            </div>
            <div className="description">
                <p className="temp-desc">Template Name : Family Restaurent</p>
                <p className="temp-desc">Version : 1.3</p>
                <p className="temp-desc">Category : Hotels & Restaurents</p>
                <p className="temp-desc">Cost : 4000 INR</p>
                <p className="temp-desc">Product ID: #033-181</p>
                <p className="temp-desc">Sources : PSD, PHP</p>
                <p className="temp-desc">Website Type : Dynamic</p>
            </div>
        </>
    );
}
export default Overview;