import "../../css/preview/Preview.css";
function Overview(){
    return(
        <>
            <center><img src="./Images/113.jpg" alt="image" className="temp-img"  /></center>
                    <div className="description">
                    <p className="temp-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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