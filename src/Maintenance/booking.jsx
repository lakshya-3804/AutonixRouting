import React, { useState ,useEffect} from 'react';
import './booking.module.css';
import Header from "../Header/Header";
// import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import img24 from '../Mechanics/images/AUTONIX_icons/Automotive.png';

function Booking() {
  const initialFormData = {
    Name: '',
    Email: '',
    Phone: '',
    Date: '',
    Subject: '',
    Message: '',
    TimeSlot: '10:00 AM'
  };

  const [formData, setFormData] = useState(initialFormData);
  const [bookings, setBookings] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceEntity = {
      serviceName: formData.Name,
      serviceAddress: formData.Message,
      serviceemail: formData.Email,
      servicephone: formData.Phone,
      servicetimeslot: formData.TimeSlot,
      servicedate: formData.Date,
      serviceserviceyouwant: formData.Subject
    };

    try {
      const response = await fetch('http://localhost:8282/service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(serviceEntity)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Service saved successfully:', result);
        alert('Your Booking has been confirmed!');
        // Reset the form after successful submission
        setFormData(initialFormData);
        // Fetch all bookings to update the list
        fetchBookings();
      } else {
        console.error('Error saving service:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving service:', error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:8282/');
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      } else {
        console.error('Error fetching bookings:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <>
        <Header />
        <div id="search">
        <div className="over">
          <div className="logo1">
            <img src={img24} alt="" style={{ zIndex: 0 }} />
            <div className="name"  style={{ fontFamily: "'RS'", color: "#fff", fontSize: "65px"}}>Autonix</div>
          </div>
          <div className="form" style={{width:"500px !important"}}>
            <form onSubmit={handleSubmit}>
              <fieldset name="form" style={{ color: "#fff" }}>
                <p style={{ fontSize: "30px", fontWeight: 400 }}>BOOKING DETAILS</p>
                <br/>
              
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                size="40"
                className="nameInput formControl"
                placeholder="Name"
              />
            <br />
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                size="40"
                className="emailInput formControl"
                placeholder="Email"
              />
            <br />
              <input
                type="tel"
                name="Phone"
                value={formData.Phone}
                onChange={handleChange}
                size="40"
                className="phoneInput formControl"
                placeholder="Phone Number"
              />
            <br />
              <input
                type="date"
                name="Date"
                value={formData.Date}
                onChange={handleChange}
                className="dateInput formControl"
                placeholder="Date"
              />
            <br />
              <select
                name="Subject"
                value={formData.Subject}
                onChange={handleChange}
                className="indent formControl"
              >
                <option value="" disabled>Select the Service You Want</option>
                <option value="Suspension & Fitments">Suspension & Fitments</option>
                <option value="Batteries">Batteries</option>
                <option value="AC Service & Repair">AC Service & Repair</option>
                <option value="Tyres & Wheel Care">Tyres & Wheel Care</option>
                <option value="Clutch & Body Parts">Clutch & Body Parts</option>
                <option value="Car Inspections">Car Inspections</option>
                <option value="Detailing Services">Detailing Services</option>
                <option value="Denting & Painting">Denting & Painting</option>
              </select>
            <br />
              <textarea
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                cols="40"
                rows="10"
                className="formControl textarea"
                placeholder="Address"
              ></textarea>
            <br />
            <div className="timeslotbox" style={{display:"flex",flexDirection:"column"}}>
            Select Time Slot:
            <div style={{display:"flex" , alignItems:"center"}}>
            <input
              className="checkboxBooking"
              type="radio"
              name="TimeSlot"
              id="time-1"
              value="10:00 AM"
              checked={formData.TimeSlot === '10:00 AM'}
              onChange={handleChange}
              
            />
            10:00 AM
            
            </div>
            <div style={{display:"flex" , alignItems:"center"}}>
            <input
              className="checkboxBooking"
              type="radio"
              name="TimeSlot"
              id="time-2"
              value="11:00 AM"
              checked={formData.TimeSlot === '11:00 AM'}
              onChange={handleChange}
            />
            11:00 AM
            </div>
            <div style={{display:"flex" , alignItems:"center"}}>
            <input
              className="checkboxBooking"
              type="radio"
              name="TimeSlot"
              id="time-3"
              value="12:00 PM"
              checked={formData.TimeSlot === '12:00 PM'}
              onChange={handleChange}
            />
            12:00 PM
            </div>
            <div style={{display:"flex" , alignItems:"center"}}>
            <input
              className="checkboxBooking"
              type="radio"
              name="TimeSlot"
              id="time-4"
              value="01:00 PM"
              checked={formData.TimeSlot === '01:00 PM'}
              onChange={handleChange}
            />
            01:00 PM
            </div>
            <div style={{display:"flex" , alignItems:"center"}}>
            <input
              className="checkboxBooking"
              type="radio"
              name="TimeSlot"
              id="time-5"
              value="02:00 PM"
              checked={formData.TimeSlot === '02:00 PM'}
              onChange={handleChange}
            />
            02:00 PM
            </div>
            <div style={{display:"flex" , alignItems:"center"}}>
            <input
              className="checkboxBooking"
              type="radio"
              name="TimeSlot"
              id="time-6"
              value="03:00 PM"
              checked={formData.TimeSlot === '03:00 PM'}
              onChange={handleChange}
            />
            03:00 PM
            </div>
            <div style={{display:"flex" , alignItems:"center"}}>
            <input
              className="checkboxBooking"
              type="radio"
              name="TimeSlot"
              id="time-7"
              value="04:00 PM"
              checked={formData.TimeSlot === '04:00 PM'}
              onChange={handleChange}
            />
            04:00 PM
            </div>
            </div>
          
          <input type="submit" value="Submit" className='submitButton'/>
          </fieldset>
            </form>
          </div>
        </div>
      </div>
        <Footer />
    </>
    
  )
}

export default Booking;