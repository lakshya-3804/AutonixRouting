import styles from './CustomerSupport.module.css';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/footer.jsx'

export default function CustomerSupport() {
    return (
        <>
       <Header /> 
       <div className={styles.supportbody}>

       
        <div className={styles.container1}>
            <div className={styles.head}>
                <h1>CUSTOMER SUPPORT</h1>
            </div>
            <h2 className={styles.h2}>Contact Information</h2>
            <div>
                <h3>Email Support</h3>
                <p>For personalized assistance, our dedicated email support team is at your service. Reach out <br />to us at 
                    <a style={{color:'yellowgreen'}} href="mailto:customerservice@autonix.com"> support@autonix.com</a> for prompt responses to your inquiries.</p>

                <h3>Phone Support</h3>
                <p>Indulge in the luxury of direct communication. Call our customer support hotline at 1-800-AUTONIX <br /> to connect with our knowledgeable representatives during business hours.</p>
                
                <h3>Live Chat</h3>
                <p>Experience real-time support through our sophisticated live chat feature. Located conveniently on <br />our website, it provides instant access to our customer support specialists.</p>
            </div>
            <br />

            <h2>Frequently Asked Questions</h2>
            <p>Explore our curated collection of Frequently Asked Questions for quick and comprehensive answers. Navigate to our<br /> FAQs page to find solutions to common queries and enhance your shopping experience.</p>
            <br />
            
            <h2>Customer Feedback</h2>
            <p>Your opinion matters. Share your thoughts on our service or products through our Feedback Form. We value <br /> your insights as they guide us in our ongoing quest for perfection.</p>
            <br />

            <h2>Support Hours</h2>
            <p>Our customer support team operates during the following hours:</p>
            <ul>
                <li>Monday to Friday: 9:00 AM - 6:00 PM (EST)</li>
                <li>Saturday: 10:00 AM - 4:00 PM (EST)</li>
                <li>Sunday: Closed</li>
            </ul>
            <br />

            <h2>Exclusive Customer Service</h2>
            <p>At Autonix, we redefine customer service with a touch of luxury. Our representatives are trained not just to meet<br /> expectations but to exceed them. Your satisfaction is our top priority, and we aim to provide a seamless<br /> and enjoyable experience at every touchpoint.</p>
            <p>Thank you for choosing Autonix. For an unparalleled customer support experience,<br /> trust Autonix for all your spare automobile parts needs.</p>
        </div>
        </div>
        <Footer />
        </>
    );
}
