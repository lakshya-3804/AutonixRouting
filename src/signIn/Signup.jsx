import "./Signupin.css"
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import auto from './assets/Auto.png'
import Header from "../Header/Header";
import Footer from "../Footer/footer";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { Route, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2'



const AUTH_REST_API_BASE_URL = "http://localhost:8282/auth"

const registerAPICall = (registerObj) => axios.post(
    AUTH_REST_API_BASE_URL + '/signup', 
    registerObj);


export default function Signup() {

    const [email,setEmail] = useState(" ");
    const [password,setPassword] = useState(" ");
    const [fullName,setFullName] = useState(" ");
    const [regSuccess, setRegSuccess] = useState(false);
    const history = useNavigate();


    // Handle Change 
    const handleChange = (event, param) => {

      if(param === 'Email') {
        setEmail(event.target.value)
      } else if (param === 'Password') {
        setPassword(event.target.value)
      } else if (param === 'fullName') {
        setFullName(event.target.value)
      }

    }


    // Submit form

    
    function handleRegistration(e) {
      e.preventDefault();

      const register = {email, password, fullName};

      console.log(register);

      registerAPICall(register).then((response) => {

        localStorage.setItem('token', response.data.token);
        setRegSuccess(true);

      }).catch(error => {
        console.error(error);
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: "error",
          confirmButtonText: 'Retry'
        })
      })

      if(regSuccess) {
        history('/home')
      }

    }
  
    return (
        <>
        <Header />
    <div className="over">
    <div className="logo1">
        <img src={auto} alt="" style={{ zIndex: 0 }} />
        <div className="name" style={{ fontFamily: 'RS', color: '#fff', fontSize: '65px' }}>Autonix</div>
    </div>
    <div className="form">
    <form action="" >
    <fieldset name="form" style={{ color: '#fff' }}>
      {/* { JSON.stringify(data) } */}
      <p style={{ fontSize: '30px', fontWeight: 400 }}>SIGN-UP</p>

      <span>ENTER YOUR EMAIL</span><br />
      <input id="e" type="text" name="email" placeholder="EMAIL" 
      onChange={(event) => handleChange(event, 'Email')}
      // value={email}
      required /><br /><br />

      <span>PASSWORD</span><br />
      <input id="e" type="password" name="password" placeholder="PASSWORD" 
      onChange={(event) => handleChange(event, 'Password')}
      // value={password}
      required /><br /><br />

      <span>USERNAME</span><br />
      <input id="e" type="text" name="fullname" placeholder="ENTER YOUR FULL NAME" 
      onChange={(event) => handleChange(event, 'fullName')}
      // value={fullName}
      required /><br /><br />


      <input type="submit" className="Submitbtn"
      style={{fontSize: '20px', 
            fontWeight: 'lighter', 
            backgroundColor: '#9ECA2E', 
            width: '100%', 
            padding: '20px'}}
            onClick={handleRegistration}
      />
      <br />
      <p>
        Got a Ride in Our Club Already?{' '}
        <a href="/signin" style={{ color: 'lightblue' }}>
          Sign-in
        </a>
      </p>
    </fieldset>
    </form>
    </div>
</div>
        <Footer />
        </>
    )
    
}

// export function PrivateRoute({ isLoggedIn, ...props }) {
//   return isLoggedIn ? <Route {...props} /> : <Navigate to="/signIn" />;
// }