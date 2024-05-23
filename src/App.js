
import './App.css';
import Booking from './Maintenance/booking.jsx';
import Maintenance from './Maintenance/maintenance_app.jsx';
import Customer from './Mechanics/Form.jsx';
import Mechanic from './Mechanics/Mechanic.jsx';
import ReturnRefund from './ReturnAndRefund/ReturnRefund.jsx';
import Tnc from './Tnc/TnC.jsx';
import AboutUs from './aboutUs/aboutus.jsx';
import AddProductForm from './adminlogin/AddProductForm.jsx';
import AdminLogin from './adminlogin/AdminLogin.jsx';
import ProductList from './adminlogin/ProductList.jsx';
import ContactUs from './contactUs/ContactUs.jsx';
import CustomerSupport from './customerSupport/CustomerSupport.jsx';
import Home from './home/Home';
import Signup from './signIn/Signup';
import Signupin from './signIn/Signupin';
import SpareParts from './spareParts/SpareParts';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/spare" element={<SpareParts />} />
        <Route path="/signIn" element={<Signupin />} />
        {/* <Route path="/adminlogin" element={<AdminLogin />} /> */}
        <Route path="/adminproduct" element={<ProductList />} />
        <Route path="/addproduct" element={<AddProductForm />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/tnc" element={<Tnc />} />
        <Route path="/return" element={<ReturnRefund />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cs" element={<CustomerSupport />} />
        <Route path="/maintain" element={<Maintenance />} />
        <Route path="/mechanic" element={<Mechanic/>} />
        <Route path="/form" element={<Customer/>} />
        <Route path="/maintenanceBooking" element={<Booking />}/>
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
