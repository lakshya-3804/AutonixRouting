import React from "react";
import "./Home.css"; // Import your CSS file
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const history = useNavigate();

    const handleSparePartsClick = () => {
        // Check if a token is present
        if (localStorage.getItem("token")) {
          // If a token is present, navigate to the "/spare" route
          history("/spare");
        } else {
          // If no token is present, display a pop-up asking the user to log in
          Swal.fire("Not logged in!!","Please log in to view this page.");
          return;
        }
      };
    
    return (
        <>
        <Header />
            <section id="content-body">
                <div className="body-part-1">
                    <div className="body-title">
                        <h1>Welcome To Autonix</h1>
                        <p className="body-description">The one-stop-shop for all your automobile needs, offering spare parts of all brands, accessories, maintenance services and the experts in the field.</p>
                    </div>
                </div>
                <div className="body-part-2">
                    <div className="mechanic-guy-animation-class">
                        <div className="mechanic-guy"></div>
                        <div className="circle">
                        
                        <span style={{ "--i": 1 }}><img className="homeimg" src={require("../assets/sub_part1.jpg")} height="100px" /></span>
                        <span style={{ "--i": 2 }}><img className="homeimg" src={require("../assets/sub_part2.jpeg")} height="100px" /></span>
                        <span style={{ "--i": 3 }}><img className="homeimg" src={require("../assets/sub_part3.jpg")} height="100px" /></span>
                        <span style={{ "--i": 4 }}><img className="homeimg" src={require("../assets/sub_part5.jpg")} height="100px" /></span>
                        <span style={{ "--i": 5 }}><img className="homeimg" src={require("../assets/sub_part6.jpg")} height="100px" /></span>
                        <span style={{ "--i": 6 }}><img className="homeimg" src={require("../assets/sub_part7.jpg")} height="100px" /></span>
                        <span style={{ "--i": 7 }}><img className="homeimg" src={require("../assets/sub_part1.jpg")} height="100px" /></span>
                        <span style={{ "--i": 8 }}><img className="homeimg" src={require("../assets/sub_part2.jpeg")} height="100px" /></span>
                        <span style={{ "--i": 9 }}><img className="homeimg" src={require("../assets/sub_part3.jpg")} height="100px" /></span>
                        <span style={{ "--i": 10 }}><img className="homeimg" src={require("../assets/sub_part5.jpg")} height="100px" /></span>
                        <span style={{ "--i": 11 }}><img className="homeimg" src={require("../assets/sub_part6.jpg")} height="100px" /></span>
                        <span style={{ "--i": 12 }}><img className="homeimg" src={require("../assets/sub_part7.jpg")} height="100px" /></span>
                        <span style={{ "--i": 13 }}><img className="homeimg" src={require("../assets/sub_part5.jpg")} height="100px" /></span>
                        <span style={{ "--i": 14 }}><img className="homeimg" src={require("../assets/sub_part6.jpg")} height="100px" /></span>
                        <span style={{ "--i": 15 }}><img className="homeimg" src={require("../assets/sub_part7.jpg")} height="100px" /></span>

                        </div>
                    </div>
                </div>
            </section>

            <div className="body-title-outside-section">
                <h1>Welcome To Autonix</h1>
                <p>Discover premium quality luxury car-spare-parts at Autonix, your ultimate destination for top-tier automotive excellence.</p>
            </div>

            <div className="services-part" id="serv">
                <h1>Services</h1>
                <div className="services-container">
                    <div to="/spare" className="services-container-box" id="services-container-box1" onClick={handleSparePartsClick}>
                        <h3><a href="/spare" style={{ textDecoration: "none", color: "white" }}>Spare Parts</a></h3>
                    </div>
                    <Link to="/maintain" className="services-container-box" id="services-container-box2">
                        <h3><a href="/maintain" style={{ textDecoration: "none", color: "white" }}>Maintenance Services</a></h3>
                    </Link>
                    <Link to="/mechanic" className="services-container-box" id="services-container-box3">
                        <h3><a href="/mechanic" style={{ textDecoration: "none", color: "white" }}>Mechanics</a></h3>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
