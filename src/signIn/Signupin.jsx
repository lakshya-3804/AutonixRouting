import "./Signupin.css";
import { useState, useContext } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import auto from './assets/Auto.png'
import Header from "../Header/Header.jsx";
import Footer from "../Footer/footer.jsx";
import { AuthContext } from './AuthContext';
import Swal from 'sweetalert2'

const AUTH_REST_API_BASE_URL = "http://localhost:8282/auth"

const loginAPICall = (loginObj) => axios.post(
    AUTH_REST_API_BASE_URL + '/login', 
    loginObj);


export default function Signupin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    const navigate = useNavigate();

    

    // Handle Change 
    const handleChange = (event, param) => {

        if(param === 'Email') {
          setEmail(event.target.value)
        } else if (param === 'Password') {
          setPassword(event.target.value)
        }
      }
  
  
      // Submit form
  
      function handleLogin(e) {
          e.preventDefault();
    
          const login = {email, password};
    
        //   console.log(login);
    
          loginAPICall(login).then((response) => {
            // console.log(response.data);
            localStorage.setItem('token', response.data.token);
            navigate('/home')
            
          }).catch(error => {
            console.error(error);
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Retry'
              })
          })
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
        <form action="">
        <fieldset name="form" style={{ color: '#fff' }}>
                <p style={{ fontSize: '30px', fontWeight: 400 }}>SIGN-IN</p>
                <div className="alterlogin">
                    <button style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '50px', width: '250px' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="1">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24.0003 12.2724C24.0003 11.4215 23.9223 10.6033 23.7776 9.81787H12.2451V14.4596H18.8351C18.5513 15.9596 17.6886 17.2305 16.3917 18.0814V21.0923H20.349C22.6644 19.0032 24.0003 15.9269 24.0003 12.2724Z" fill="#4285F4"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.2445 23.9999C15.5507 23.9999 18.3225 22.9254 20.3484 21.0927L16.3911 18.0818C15.2946 18.8018 13.892 19.2272 12.2445 19.2272C9.05527 19.2272 6.35582 17.1164 5.39292 14.28H1.302V17.3891C3.31685 21.3108 7.45787 23.9999 12.2445 23.9999Z" fill="#34A853"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.39334 14.2796C5.14844 13.5596 5.00929 12.7905 5.00929 11.9996C5.00929 11.2087 5.14844 10.4396 5.39334 9.71965V6.6106H1.30242C0.4731 8.23057 0 10.0633 0 11.9996C0 13.936 0.4731 15.7687 1.30242 17.3886L5.39334 14.2796Z" fill="#FBBC05"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.2445 4.77267C14.0423 4.77267 15.6564 5.37811 16.9254 6.56719L20.4375 3.12541C18.3169 1.18908 15.5451 0 12.2445 0C7.45787 0 3.31685 2.68906 1.302 6.61082L5.39292 9.71987C6.35582 6.88355 9.05527 4.77267 12.2445 4.77267Z" fill="#EA4335"></path>
                            </g>
                        </svg>
                        CONTINUE WITH GOOGLE
                    </button><br/>
                    <button style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '50px', width: '250px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                        </svg>
                        CONTINUE WITH APPLE
                    </button><br/>
                </div>
                <span>---------------or-----------------</span><br/><br/>
                <span>CONTINUE WITH YOUR EMAIL</span><br/><br/>
                <input id="e" type="text" name="email" placeholder="EMAIL/USERNAME" 
                    onChange={(event) => {
                        handleChange(event, 'Email');
                    }}   
                /><br/>
                <input id="pass" type="password" name="password" placeholder="PASSWORD"
                 onChange={(event) => {
                    handleChange(event, 'Password');
                 }}
                 /><br/>
                <a href="#" style={{ color: 'lightblue' }}>Forgot Password?</a><br/><br/>
                <button style={{ fontSize: '20px', fontWeight: 'lighter', backgroundColor: '#9ECA2E', width: '100%', padding: '20px' }} 
                onClick={handleLogin}
                >SIGN-IN</button><br/>
                <p>New in town? <a href="/register" style={{ color: 'lightblue' }}>Create an account</a></p>
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