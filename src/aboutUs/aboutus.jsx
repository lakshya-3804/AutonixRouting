import Footer from "../Footer/footer";
import Header from "../Header/Header";
import styles from "./aboutus.module.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutUs() {
  return (
    <>
      <Header />
      <div className={styles.aboutArea}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.imgsec}>
              <div className={styles.aboutImg}>
                <img src="https://img.freepik.com/free-photo/vertical-shot-grey-metallic-gears-car-parts_181624-4504.jpg?w=360&t=st=1701709222~exp=1701709822~hmac=b375aa03f26806fb118e6c0efbdd3d9dcda357ba95f35825bd92feb9341099aa" alt="Automotive Parts" />
              </div>
            </div>
            <div className={styles.textsec}>
              <div className={styles.aboutText}>
                <div className={styles.waviy}>
                  <span style={{'--i':1}}><b>A</b></span>
                  <span style={{'--i':2}}><b>b</b></span>
                  <span style={{'--i':3}}><b>o</b></span>
                  <span style={{'--i':4}}><b>u</b></span>
                  <span style={{'--i':5}}><b>t</b></span>
                  <span style={{'--i':6}}><b></b></span>                         
                  <span style={{'--i':7}}><b></b></span>                         
                  <span style={{'--i':8}}><b></b></span>                         
                  <span style={{'--i':9}}><b>U</b></span>
                  <span style={{'--i':10}}><b>s</b></span>
                </div>
                <p>Welcome to Autonix, where the fusion of luxury artistry and automotive precision defines our dedication. We're committed to redefining expectations in automobile spare parts, striving not just to provide products but an elevated experience resonating with sophistication.</p>
                <p>What Sets Autonix Apart:</p>
                <p><b>Expertise:</b> Our team of enthusiasts and experts shares your passion, offering personalized guidance for maintenance and part selection.</p>
                <p><b>Unparalleled Quality:</b> Each component undergoes rigorous quality checks, ensuring top-tier performance and reliability for your luxury vehicle.</p>
                <p><b>Our Story:</b> Established in 2023, Autonix emerged from a shared love for luxury automobiles, evolving into a trusted destination for discerning car owners seeking premium spare parts.</p>
                <p><b>Connect With Us:</b> Join our community of car enthusiasts on social media to stay updated on arrivals, trends, and exclusive promotions: <a href="#">Facebook</a> <a href="#">Instagram</a> <a href="#">Twitter</a></p>
                <p><b>Visit Our Showroom:</b> Experience firsthand the allure of premium spare parts at our showroom, reflecting Autonix's commitment to quality and excellence.</p>
                <p><b>Contact Us:</b> <a href="#" style={{background: 'none'}}>Contact Us Page</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


