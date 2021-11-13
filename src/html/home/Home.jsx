import Card from "./Card";
import Banner from "./Banner";
import Data from "./Data";
import Footer from "./Footer";
import "../../css/home/Card.css";

function details(val){
    return(
      <>
        <div className="templetes">
        <Card 
          img={val.img}
          title={val.title}
          desc={val.desc}
          review={val.review}
          sale={val.sale}
          price={val.price}
        />
        </div>
      </>
    );
  }
function Home() {
  return(<>
    <Banner /> 
    {Data.map(details)}
    <Footer />
    </>);
}
export default Home;