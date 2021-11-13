import "../../css/preview/Preview.css";
function Details(){
    return(
        <>
            <center><div className="temp-detail">
                <div className="detail">
                    <div className="nest">
                        <h2 className="name">Template Name</h2>
                        <div className="buton">
                        <button className="bt">Overview</button>
                        <button className="bt">Details</button></div>
                    </div>
                    <center><img src="./Images/113.jpg" alt="image" className="temp-img"  /></center>
                    <div className="desc">
                    <p className="temp-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="techs"><button className="technology">HTML</button>
                    <button className="technology">css</button>
                    <button className="technology">js</button>
                    <button className="technology">react</button>
                    </div>
                    <div className="desc">
                        <p className="temp-desc">Template Name : Family Restaurent</p>
                        <p className="temp-desc">Version : 1.3</p>
                        <p className="temp-desc">Category : Hotels & Restaurents</p>
                        <p className="temp-desc">Cost : 4000 INR</p>
                        <p className="temp-desc">Product ID: #033-181</p>
                        <p className="temp-desc">Sources : PSD, PHP</p>
                        <p className="temp-desc">Website Type : Dynamic</p>
                    </div>
                    <center><button className="download">Buy this Template</button></center>
                </div>

                {/* <div className="form">
                    <div className="form-detail">
                        <h2 id="line">Feedback</h2>
                        <h3 className="feedback">Fill This Form:</h3>
                        <div className="line"></div>
                        <div className="inputs">
                            <input type="text" placeholder="Full Name"></input>
                            <input type="text" placeholder="E-mail"></input>
                            <input type="text" placeholder="Contact Numer"></input>
                            <input type="text" placeholder="Product ID"></input>
                        </div>
                        <center><button className="download">Send Feedback</button></center>
                    </div>
                </div> */}
            </div></center>
        </>
    );
}
export default Details;