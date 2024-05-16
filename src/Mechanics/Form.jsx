import React, { useEffect, useState, useRef } from 'react';
import './form.module.css';
import img24 from './images/AUTONIX_icons/Automotive.png';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import Header from '../Header/Header';

export default function Customer() {

  const containerRef = useRef(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [Customer, setCoustmer] = useState([]);

  const handleClick=(e)=>{
    e.preventDefault()
    const coustmer={firstName, lastName, timeSlot}
    console.log(coustmer)
    fetch("http://localhost:8080/coustmer/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(coustmer)
    }).then(()=>{
      console.log("New Coustmer added")
    })
  }
  
  useEffect(() => {
    fetch("http://localhost:8080/coustmer/getAll")
        .then(res => res.json())
        .then((result) => {
            setCoustmer(result);
        }
        )
}, [])

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
              <fieldset name="form" style={{ color: "#fff" }}>
                <p style={{ fontSize: "30px", fontWeight: 400 }}>BOOK A SLOT</p>
                <br/>
                <input id="e" type="text"  placeholder="FIRSTNAME" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <br/>
                <input id="pass" type="text"  placeholder="LASTNAME" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <br/><br/>
                <p style={{ marginRight: "200px", fontSize: "15px" }}>--Choose A Time Slot--</p>
                <FormControl component="fieldset" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
                  <RadioGroup aria-label="gender" name="gender1" >
                    <FormControlLabel value="10:00 AM to 01:00 PM" control={<Radio />} label="10:00 AM to 01:00 PM " />
                    <FormControlLabel value="01:00 PM to 04:00 PM" control={<Radio />} label="01:00 PM to 04:00 PM" />
                    <FormControlLabel value="04:00 PM to 07:00 PM" control={<Radio />} label="04:00 PM to 07:00 PM"  />
                  </RadioGroup>
                </FormControl>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <button style={{ fontSize: "20px", fontWeight: "lighter", backgroundColor: "#9ECA2E", width: "100%", padding: "20px" }} onClick={(e) => { handleClick(e); }}>CONFIRM BOOKING</button>
                <br/><br/>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 