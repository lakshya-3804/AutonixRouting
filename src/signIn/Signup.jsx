import "./Signupin.css"
import { useState } from "react";
import auto from './assets/Auto.png'
import Header from "../Header/Header.jsx";
import Footer from "../Footer/footer.jsx";
// import axios from "axios";


export default function Signup() {

    const [data, setData] = useState(
    {
        email: '',
      firstName: '',
      lastName: '',
      userName: '',
      password: '',

    }
    );

    const[error, setError] = useState({
      errors:{},
      isError: false,
    })

    // Handle Change 
    const handleChange = (event, param) => {

      setData({...data, [param]:event.target.value})

    }


    // Submit form

    const submitForm = (event) => {
      event.preventDefault();

    }

    // async function save(event) {
    //     event.preventDefault();
    //     try {
    //       await axios.post("http://localhost:8080/api/v1/user/save", {
    //       username: username,
    //       email: email,
    //       password: password,
    //       });
    //       alert("New user registered successfully!!");

    //     } catch (err) {
    //       alert(err);
    //     }
    //   }

    return (
        <>
        <Header />
    <div className="over">
    <div className="logo1">
        <img src={auto} alt="" style={{ zIndex: 0 }} />
        <div className="name" style={{ fontFamily: 'RS', color: '#fff', fontSize: '65px' }}>Autonix</div>
    </div>
    <div className="form">
    <form action="" onSubmit={submitForm}>
    <fieldset name="form" id="regForm" style={{ color: '#fff'}}>
      {/* { JSON.stringify(data) } */}
      <p style={{ fontSize: '30px', fontWeight: 400 }}>SIGN-UP</p>

      <span>ENTER YOUR EMAIL</span><br />
      <input id="e" type="text" name="email" placeholder="EMAIL" 
      onChange={(event) => handleChange(event, 'email')}
      value={data.email}
      required /><br />
      <span>FIRST NAME</span><br />
      <input id="e" type="text" name="fName" placeholder="FIRST NAME" 
      onChange={(event) => handleChange(event, 'firstName')}
      value={data.firstName}
      required /><br />
      <span>LAST NAME</span><br />
      <input id="e" type="text" name="lName" placeholder="LAST NAME" 
      onChange={(event) => handleChange(event, 'lastName')}
      value={data.lastName}
      required /><br />
      <span>USERNAME</span><br />
      <input id="e" type="text" name="username" placeholder="USERNAME" 
      onChange={(event) => handleChange(event, 'userName')}
      value={data.userName}
      required /><br />
      <span>PASSWORD</span><br />
      <input id="e" type="text" name="password" placeholder="PASSWORD" 
      onChange={(event) => handleChange(event, 'password')}
      value={data.password}
      required /><br />


      <button 
      style={{fontSize: '20px', 
            fontWeight: 'lighter', 
            backgroundColor: '#9ECA2E', 
            width: '100%', 
            padding: '20px'}}
        // onClick={save}
        >
        SIGN-UP
      </button>
      <br />
      <p>
        Got a Ride in Our Club Already?{' '}
        <a href="/signIn" style={{ color: 'lightblue' }}>
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