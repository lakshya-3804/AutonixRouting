import './App.css';
import Maintenance from './Maintenance/maintenance_app.jsx';
import Customer from './Mechanics/Form.jsx';
import Mechanic from './Mechanics/Mechanic.jsx';
import ReturnRefund from './ReturnAndRefund/ReturnRefund.jsx';
import Tnc from './Tnc/TnC.jsx';
import AboutUs from './aboutUs/aboutus.jsx';
import AdminLogin from './adminlogin/AdminLogin.jsx';
import ContactUs from './contactUs/ContactUs.jsx';
import CustomerSupport from './customerSupport/CustomerSupport.jsx';
import Home from './home/Home';
import Signup from './signIn/Signup';
import Signupin from './signIn/Signupin';
import SpareParts from './spareParts/SpareParts';
import { useContext } from 'react';
import { AuthContext } from './signIn/AuthContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const { isLoggedIn } = useContext(AuthContext);
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signupin />} />
        <Route path="/register" element={<Signup />} />
        <>
        {isLoggedIn && (
          <>
            <Route path="/spare" element={<SpareParts />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/tnc" element={<Tnc />} />
            <Route path="/return" element={<ReturnRefund />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cs" element={<CustomerSupport />} />
            <Route path="/maintain" element={<Maintenance />} />
            <Route path="/mechanic" element={<Mechanic />} />
            <Route path="/form" element={<Customer />} />
          </>
        )}
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
