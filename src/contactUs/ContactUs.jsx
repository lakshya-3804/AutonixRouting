import Footer from "../Footer/footer.jsx";
import Header from "../Header/Header.jsx";
import styles from "./ContactUs.module.css";
import ProfileCard from "./profileCard";
import dat from "./profileCardData.js";

export default function ContactUs() {
    function profFill(dat, index) {
        return(
            <ProfileCard 
                key={index}
                srcImg={dat.srcImg} 
                imgSrcAlt={dat.imgSrcAlt} 
                linkedInLink={dat.linkedInLink}
                empname={dat.empname}
                desig={dat.desig} 
            />
        )
    }
    return (
      <>
      <Header />
        <div className={styles.about1}>
          Welcome to the Autonix !! So glad that you're here.
        </div>
        <hr />
        <div className={styles.about2}>
          <h2>What is Autonix exactly?</h2>
          <br />
          <br />
          <p>
            "AutoNix: Your Trusted Mechanic" is a comprehensive website catering
            to automotive enthusiasts and vehicle owners seeking reliable
            mechanical services. With a user-friendly interface, AutoNix offers a
            seamless experience to explore a range of auto repair and maintenance
            services. From routine check-ups to complex repairs, our skilled
            mechanics ensure the optimal performance of your vehicle. The website
            provides easy appointment scheduling, transparent pricing, and expert
            advice on automotive care. Trust AutoNix to keep your vehicle running
            smoothly, ensuring a hassle-free and reliable driving experience.
          </p>
        </div>
        <h1 className={styles.team}>TEAM AUTONIX</h1>
        <div className={styles.container1}>
          {dat.map(profFill)}
        </div>
        <Footer />
      </>
    );
  }
  