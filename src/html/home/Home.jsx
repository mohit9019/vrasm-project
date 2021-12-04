import Card from "./Card";
import Banner from "./Banner";
import Data from "./Data";
import Footer from "./Footer";
import "../../css/home/Card.css";
import details from "./Detailsmap";
function Home() {
  return(<>
    <Banner /> 
    {Data.map(details)}
    <Footer />
    </>);
}
export default Home;