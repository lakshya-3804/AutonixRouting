import styles from './CustomerSupport.module.css';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/footer.jsx';
import React, { useState } from 'react';


const TopSection = () => (
    <div className={`${styles['rela-block']} ${styles['top-section']} ${styles['grad-back']}`} id="topSection">
      <div className={styles['abs-cent-text']}>
        <h1 className={styles['big-text']}>CUSTOMER SUPPORT</h1><br/>
        <div className={`${styles['orbitron']} ${styles['top-orb']}`}>\\\///</div>
        <p className={styles['top-small-text']}>
          For immediate assistance, please reach out to our support team via the contact<br />
          options below. We're here to help!
        </p>
      </div>
    </div>
  );

  const UnderTopSection = () => (
    <div  className={styles['under-top-section']}>
      <div className={`${styles['half-big-text']} ${styles['under-top-big-text']}`}>Features we provide</div>
      <div className={styles['lines-thing']}></div>
      <p className={styles['under-top-small-text']}>1. Multiple Support Channels: Access our support team through various channels, including email, phone, live chat, and an extensive FAQs section for quick solutions.</p>
      <p className={styles['under-top-small-text']}>2. Personalized Email Assistance: Reach out to us at support@autonix.com for personalized and prompt responses tailored to your specific needs.</p>
      <p className={styles['under-top-small-text']}>3. Direct Phone Support: Speak directly with our knowledgeable representatives by calling 1-800-AUTONIX during business hours for immediate assistance.</p>
      <p className={styles['under-top-small-text']}>4. Customer Feedback and Insights: Share your feedback through our Feedback Form. Your opinions are valuable in helping us continuously improve our services and products.</p>
    </div>
  );

const ContactForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      userName: '',
      email: '',
      problem: '',
    });
  
    const [errors, setErrors] = useState({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      userName: '',
      email: '',
      problem: '',
    });
  
    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };
  
    const validatePhoneNumber = (phoneNumber) => {
      const regex = /^\d{10}$/;
      return regex.test(phoneNumber);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  
      switch (name) {
        case 'email':
          setErrors({
            ...errors,
            email: validateEmail(value) ? '' : 'Invalid email address',
          });
          break;
        case 'phoneNumber':
          setErrors({
            ...errors,
            phoneNumber: validatePhoneNumber(value) ? '' : 'Phone number must be 10 digits',
          });
          break;
        default:
          setErrors({ ...errors, [name]: value ? '' : 'This field is required' });
          break;
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = {};
  
      Object.keys(formData).forEach((key) => {
        if (!formData[key] && key !== 'problem') {
          validationErrors[key] = 'This field is required';
        }
      });
  
      if (!validateEmail(formData.email)) {
        validationErrors.email = 'Invalid email address';
      }
  
      if (!validatePhoneNumber(formData.phoneNumber)) {
        validationErrors.phoneNumber = 'Phone number must be 10 digits';
      }
  
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        console.log('Form submitted:', formData);
        // Handle form submission
  
        fetch("http://localhost:8080/customer/add", {
          method: "POST",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(formData)
        }).then(() => {
          console.log("Customer added successfully");
          alert('Customer problem added successfully');
          setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            userName: '',
            email: '',
            problem: '',
          });
          setErrors({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            userName: '',
            email: '',
            problem: '',
          });
        }).catch((error) => {
          console.error('Error adding customer:', error);
        });
      }
    };

    return (
        <div className={styles['form']}>
        <div className={styles['tab-content']}>
          <div id="signup">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <div className={styles['top-row']}>
                <div className={styles['field-wrap']}>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required autoComplete="off" 
                  placeholder="First Name *" />
                  <span className={styles['error']}>{errors.firstName}</span>
                </div>
                <div className={styles['field-wrap']}>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required autoComplete="off" 
                  placeholder="Last Name *" />
                  <span className={styles['error']}>{errors.lastName}</span>
                </div>
              </div>
              <div className={styles['top-row']}>
                <div className={styles['field-wrap']}>
                  <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required
                    autoComplete="off" placeholder="Phone Number *" />
                  <span className={styles['error']}>{errors.phoneNumber}</span>
                </div>
                <div className={styles['field-wrap']}>
                  <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    placeholder="User Name *"
                  />
                  <span className={styles['error']}>{errors.userName}</span>
                </div>
              </div>
              <div className={styles['field-wrap']}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  placeholder="Email Address *"
                />
                <span className={styles['error']}>{errors.email}</span>
              </div>
              <div className={styles['field-wrap']}>
                <textarea
                  name="problem"
                  rows="4"
                  cols="50"
                  value={formData.problem}
                  onChange={handleChange}
                  placeholder="Description..."
                ></textarea>
                <span className={styles['error']}>{errors.problem}</span>
              </div>
              <button type="submit" className={`${styles['button']} ${styles['button-block']}`}>Submit</button>
            </form>
          </div>
          <div id="login">
          <h1>Welcome Back!</h1>
          <form action="/" method="post">
            <div className={styles['field-wrap']}>
              <input type="email" required autoComplete="off" placeholder="Email Address" />
            </div>
            <div className={styles['field-wrap']}>
              <input type="password" required autoComplete="off" placeholder="Password" />
            </div>
            <p className={styles['forgot']}><a href="#">Forgot Password?</a></p>
          </form>
        </div>
      </div>
    </div>
    );
  };
  

const FAQ = () => (
  <div className={styles.container}>
    <h1>Frequently Asked </h1>  <br /> <h1>Questions</h1>
    <div className={styles.accordion}>
      <AccordionItem title="What is Autonix?" content="Autonix is a comprehensive platform designed to meet all your automobile and spare part needs. You can book mechanics, purchase spare parts and other vehicle products, search for maintenance services, and book appointments all in one place." />
      <AccordionItem title="How can I book a mechanic through Autonix?" content="To book a mechanic, navigate to the 'Mechanics' section, search for mechanics based on location, expertise, or availability, select a mechanic, choose a time slot, and confirm your booking." />
      <AccordionItem title="How do I find the right spare part for my vehicle?" content="Use the search bar or filters in the 'Spare Parts' section to find parts compatible with your vehicle model. You can filter by part type, brand, and other specifications. Delivery times vary based on your location and the availability of the parts." />
      <AccordionItem title="What types of maintenance services are available?" content="Autonix offers a range of maintenance services, including oil changes, brake inspections, tire services, detailing, and more. Browse the 'Maintenance Services' section for a full list." />
      <AccordionItem title="What should I do if I encounter an issue with my order or booking?" content="If you experience any issues, please contact our customer support team immediately. We are here to help resolve any problems promptly. You can also track the status of your orders and bookings." />
    </div>
  </div>
);

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles['accordion-item']}>
      <button onClick={handleToggle} aria-expanded={isOpen}>
        <span className={styles['accordion-title']}>{title}</span>
        <span className={styles['icon']} aria-hidden="true"></span>
      </button>
      {isOpen && <div className={styles['accordion-content']}><p>{content}</p></div>}
    </div>
  );
};

const CustomerSupport = () => (
  <div className={styles.contact}>
    <Header />
    <TopSection />
    <UnderTopSection />
    <ContactForm />
    <FAQ />
    <Footer />
  </div>
);

export default CustomerSupport;
