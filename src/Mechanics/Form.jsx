import React, { useEffect, useState, useRef } from 'react';
import './form.module.css';
import img24 from './images/AUTONIX_icons/Automotive.png';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import Header from '../Header/Header';
import swal from 'sweetalert2';

export default function Customer() {

  const handleClick = (e) => {
    e.preventDefault();

    const customer = { firstName, lastName ,email, timeSlot };
    console.log(customer);

    swal.fire({
      title: 'Are you sure',
      text: 'Book a Mechanic',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Book Now',
      cancelButtonText: 'Cancel it'
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire("Booked", 'Mechanic is Booked Successfully');
        
        // Only make the fetch call if the booking is confirmed
        fetch("http://localhost:8282/coustmer/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(customer)
        }).then(() => {
          console.log("New Customer added");
        });
      }
    });
  };

  const containerRef = useRef(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [email,setEmail] = useState('');
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8282/coustmer/getAll")
      .then(res => res.json())
      .then((result) => {
        setCustomers(result);
      });
  }, []);
  return (
    <div>
      <Header />
      <div id="search">
        <div className="over">
          <div className="logo1">
            <img src={img24} alt="" style={{ zIndex: 0 }} />
            <div className="name"  style={{ fontFamily: "'RS'", color: "#fff", fontSize: "65px"}}>Autonix</div>
          </div>
          <div className="form">
            <form>
              <fieldset name="form" style={{ color: "#fff" ,borderRadius:20}}>
                <p style={{ fontSize: "30px", fontWeight: 400 ,fontFamily:'cursive'}}>Enter Your Details</p>
                <br />
                <input id="e" type="text" placeholder="Enter your First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <br />
                <input id="pass" type="text" placeholder="Enter your Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <br />
                <input id="hi" type="text" placeholder="Enter a valid Gmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br /><br/>
                <p style={{ marginRight: "200px", fontSize: "15px" }}>--Choose A Time Slot--</p>
                <FormControl component="fieldset" style={{borderRadius:20}}>
                  <RadioGroup aria-label="timeslot" name="timeslot" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
                    <FormControlLabel value="10:00 AM to 01:00 PM" control={<Radio />} label="10:00 AM to 01:00 PM " />
                    <FormControlLabel value="01:00 PM to 04:00 PM" control={<Radio />} label="01:00 PM to 04:00 PM" />
                    <FormControlLabel value="04:00 PM to 07:00 PM" control={<Radio />} label="04:00 PM to 07:00 PM" />
                  </RadioGroup>
                </FormControl>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <button
                    style={{fontSize: "20px",fontWeight: "lighter",borderRadius: 15,backgroundColor: "#9ECA2E",width: "100%",padding: "20px",transition: "background-color 0.3s ease", // Add transition for smooth effect
                              }}
                              onMouseOver={(e) => { e.target.style.backgroundColor = "#8ab92d"; }} // Darken color on hover
                              onMouseOut={(e) => { e.target.style.backgroundColor = "#9ECA2E"; }}   // Restore original color
                              onClick={handleClick}>CONFIRM BOOKING</button>   
                              <br /><br />
                  </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 