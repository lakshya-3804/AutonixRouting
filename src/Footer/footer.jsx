import "./footer.css";
export default function Footer(){
    return(
        <>
        <footer>
        <div class="animated">
            <div class="footer-section-about">
                <h2>About Us</h2>
                <p>We are your trusted source for high-quality automobile parts.<br />
                    Our commitment is to provide top-notch products to <br /> enhance
                    your vehicle's performance and style.</p>
            </div>

            <div class="footer-section contact">
                <h2>Contact Us</h2>
                <p>Address: 1234 Auto Lane, Cityville, State, 12345</p>
                <p>Phone: 9667899621 <br /> 9825470173 <br /> 9018394567</p>
                <p>Email:autonix@autohub.com <br /> info@autoparts.com <br /> support@autonixautomotive.com</p>
            </div>

            <div class="footer-section quick-links">
                <h2>Quick Links</h2>
                <a href="/">Home</a>
                <a href="#">Products</a>
                <a href="/#serv">Services</a>
                <a href="/contact">Contact</a>
            </div>
        </div>

        <div class="others">
            <p><h2>Connect with Us:</h2></p>
            
            <div class="icons">
                
                <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
                    <img class="footer-img" src={require("./insta-logo.png")} alt="Instagram" width="30" />
                </a>
                <a href="https://www.twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">
                    <img class="footer-img" src={require("./twitter2-logo.webp")} alt="Twitter" width="30" />
                </a>
                <a href="https://www.facebook.com/your_facebook" target="_blank" rel="noopener noreferrer">
                    <img class="footer-img" src="https://www.edigitalagency.com.au/wp-content/uploads/facebook-icon-white-png.png" alt="Facebook" />
                </a>
                <a href="https://www.youtube.com/your_facebook" target="_blank" rel="noopener noreferrer">
                    <img class="footer-img" src={require("./youtube-logo.png")} alt="Youtube" width="30" />
                </a>
            </div>
            <div class="address">
                <p>Visit our website and explore the latest in automobile parts technology.</p>
            </div>
        </div>
        <div class="footer1">
            <p class="footpara">Copyright &copy; Autonix ltd. All Rights Reserved | Gmail: autonix@gmail.com</p>
            <br />
        </div>
    </footer>
        </>
    )
}