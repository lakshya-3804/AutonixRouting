
import Footer from '../Footer/footer';
import Header from '../Header/Header';
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img6 from './img/6.png';
import img7 from './img/7.png';
import img8 from './img/8.png';
import img9 from './img/9.png';
import autonix from './img/autonix.png';
import styles from './maintenance.module.css';
import { useEffect } from 'react';

export default function Maintenance() {
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <Header />
      <h2 className={styles.head}><img src={autonix} className={styles.img2} alt="Autonix Logo" /> MAINTENANCE & SERVICES </h2>
      <br /><br />
      <section id={styles.services}>
        <div className={styles.container}>
          <div className={styles.photoGrid}>
            <div className={styles.serviceItem}>
              <a href="/maintain">
                <img src={img1} alt="Suspension and Fitments" />
              </a>
              <p>Suspension & Fitments</p>
            </div>
            <div className={styles.serviceItem}>
              <a href="/maintain">
                <img src={img2} alt="Batteries" />
              </a>
              <p>Batteries</p>
            </div>
            <div className={styles.serviceItem}>
              <a href="/maintain">
                <img src={img3} alt="AC Service and Repair" />
              </a>
              <p>AC Service & Repair</p>
            </div>
            <div className={styles.serviceItem}>
              <a href="/maintain">
                <img src={img4} alt="Tyres and Wheel Care" />
              </a>
              <p>Tyres & Wheel Care</p>
            </div>
            <div className={styles.serviceItem}>
              <a href="/maintain">
                <img src={img6} alt="Clutch and Body Parts" />
              </a>
              <p>Clutch & Body Parts</p>
            </div>
            <div className={styles.serviceItem}>
              <a href="/maintain">
                <img src={img7} alt="Car Inspections" />
              </a>
              <p>Car Inspections</p>
            </div>
            <div className={styles.serviceItem}>
              <a href="/maintain">
                <img src={img8} alt="Detailing Services" />
              </a>
              <p>Detailing Services</p>
            </div>
            <div className={styles.serviceItem}>
              <a href="/maintain">
                <img src={img9} alt="Denting & Painting" />
              </a>
              <p>Denting & Painting</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
