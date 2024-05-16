import React from 'react'
import st from './mechanic.module.css';
 //import img1 from '../images/Autonix.png'
 import img from './images/img.png'
 import img2 from './images/img2.png'
 import img3 from './images/img3.png'
 import img4 from './images/img4.png'
 //import img5 from '../images/img5.png'
 import img6 from './images/img6.png'
 //import img7 from '../images/img7.png'
 import img8 from './images/img8.png'
 import img9 from './images/img9.png'
//  import img10 from './images/insta-logo.png'
//  import img11 from './images/twitter2-logo.webp'
//  import img12 from './images/youtube-logo.png'
//  import img13 from './images/facebook-logo.png'
 import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/footer';
import Header from '../Header/Header';
import { useEffect } from 'react';



const Mechanic = () => {
    const navigate = useNavigate();

    function handleClick() {
        // Display the first alert
        alert('PLEASE WAIT UNTIL YOUR BOOKING IN PROCESS');

        // Set a delay of 5 seconds (5000 milliseconds) before showing the next alert
        setTimeout(function() {
            alert('YOUR VEHICLE SERVICING SLOT IS SUCCESSFULLY BOOKED');
        }, 3000);navigate("/form");
    }

    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])

  return (
    <div>
      <Header />
      <div className={st.wrapper}>
        <h1 className={st.head}> MECHANICS </h1>
        <div className={st.cols}>
          <div className={st.col}>
            <div className={st.container}>
            <div className={st.front} style={{ backgroundImage: `url(${img})` }}>
                <div className={st.inner}>
                  <p> Auto Repair  </p>
                  <span>Mr.Randeep Kumar</span>
                </div>
              </div>
              <div className={st.back}>
                <div className={st.inner}>
                  <p className={st.para10}>Name:Randeep Kumar <br />Experience: 5years <br /> charges: For Full Maintanice - ₹1500 (base price) <br />rest according to condition of vehical
                  </p>
                  <br />
                  <br />
                  <button id={st.alert1} className={st.button1}
                  onClick = {handleClick}> Book Now </button>

                </div>
              </div>
            </div>
          </div>
          <div className={st.col}>
            <div className={st.container}>
            <div className={st.front} style={{ backgroundImage: `url(${img6})` }}>
                <div className={st.inner}>
                  <p>Car Repair </p>
                  <span>Mr. Bhupender Jogi</span>
                </div>
              </div>
              <div className={st.back}>
                <div className={st.inner}>
                  <p className={st.para10}>Name:Mr. Bhupendra Jogi<br />Experience: 10years <br /> charges: For Full Maintanice - ₹2500 (base price) <br />rest according to condition of vehical
                  </p>
                  <br />
                  <br />
                  <button id={st.alert1} className={st.button1}
                  onClick = {handleClick}> Book Now </button>
                </div>
              </div>
            </div>
          </div>
          <div className={st.col}>
            <div className={st.container}>
            <div className={st.front} style={{ backgroundImage: `url(${img8})` }}>
                <div className={st.inner}>
                  <p> Car Repair</p>
                  <span>Mr. Raju </span>
                </div>
              </div>
              <div className={st.back}>
                <div className={st.inner}>
                  <p className={st.para10}>Name:Mr. Raju<br />Experience: 8years <br /> charges: For Full Maintanice - ₹1800 (base price) <br />rest according to condition of vehical
                  </p>
                  <br />
                  <br />
                  <button id={st.alert1} className={st.button1}
                  onClick = {handleClick}> Book Now </button>                </div>
              </div>
            </div>
          </div>
          <div className={st.col}>
            <div className={st.container}>
            <div className={st.front} style={{ backgroundImage: `url(${img4})` }}>
                <div className={st.inner}>
                  <p>Truck Repair</p>
                  <span>Mr.Suraj & Mr.Mayank</span>
                </div>
              </div>
              <div className={st.back}>
                <div className={st.inner}>
                  <p className={st.para10}>Name:Mr.Suraj & Mr.Mayank<br />Experience: 12years <br /> charges: For Full Maintanice - ₹4000 (base price) <br />Rest According to Condition of Vehical
                  </p>
                  <br />
                  <button id={st.alert1} className={st.button1}
                  onClick = {handleClick}> Book Now </button>                </div>
              </div>
            </div>
          </div>
          <div className={st.col}>
            <div className={st.container}>
            <div className={st.front} style={{ backgroundImage: `url(${img9})` }}>
                <div className={st.inner}>
                  <p>Auto Repair</p>
                  <span>Mr. Abhay</span>
                </div>
              </div>
              <div className={st.back}>
                <div className={st.inner}>
                  <p className={st.para10}>Name:Mr.Abhay<br />Experience: 2years <br /> charges: For Full Maintanice - ₹800 (base price) <br />Rest According to Condition of Vehical
                  </p>
                  <br />
                  <br />
                  <button id={st.alert1} className={st.button1}
                  onClick = {handleClick}> Book Now </button>
                </div>
              </div>
            </div>
          </div>
          <div className={st.col}>
            <div className={st.container}>
            <div className={st.front} style={{ backgroundImage: `url(${img2})` }}>
                <div className={st.inner}>
                  <p>Truck Repair</p>
                  <span>Mr. Chintu & Golu</span>
                </div>
              </div>
              <div className={st.back}>
                <div className={st.inner}>
                  <p className={st.para10}>Name:Mr.Chintu & Mr.Golu<br />Experience: 9years <br /> charges: For Full Maintanice - ₹3800 (base price) <br />Rest According to Condition of Vehical
                  </p>
                  <br />
                  <br />
                  <button id={st.alert1} className={st.button1}
                  onClick = {handleClick}> Book Now </button>
                </div>
              </div>
            </div>
          </div>
          <div className={st.col}>
            <div className={st.container}>
            <div className={st.front} style={{ backgroundImage: `url(${img3})` }}>
                <div className={st.inner}>
                  <p>Bike Repair</p>
                  <span>Mr.ShyamLal</span>
                </div>
              </div>
              <div className={st.back}>
                <div className={st.inner}>
                  <p className={st.para10}>Name:Mr.ShyamLal<br />Experience: 7years <br /> charges: For Full Maintanice - ₹700 (base price) <br />Rest According to Condition of Vehical
                  </p>
                  <br />
                  <br />
                  <button id={st.alert1} className={st.button1}
                  onClick = {handleClick}> Book Now </button>                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Mechanic;
