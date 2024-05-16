
import Header from '../Header/Header.jsx';
import styles from './TnC.module.css';
import Footer from '../Footer/footer.jsx';

export default function Tnc() {
    return (
        <>
            <Header /> <br /> <br />
            <div className={styles.termsbody}>
            <div className={styles.container1}>
                <div className={styles.head}>
                    <h1>TERMS AND CONDITIONS</h1>
                </div><br />
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using the Autonix website, you agree to be bound by these Terms and Conditions. If you <br />do not agree with any part of these terms, please refrain from using the Website.</p>
                
                <h2>2. Product Information</h2>
                <p>Autonix strives to provide accurate and up-to-date information about its products, including descriptions, prices, and availability.<br /> However, we do not guarantee the accuracy, completeness, or reliability of any information on the Website.</p>
                
                <h2>3. Ordering and Payment</h2>
                <p>1. To place an order, you must be at least 18 years old and have the legal capacity to enter into a contract.<br/>
                2. By submitting an order, you agree to pay the total amount specified, including product prices, shipping fees, and taxes.<br/>
                3. Autonix accepts various payment methods. Payment details are encrypted for security.</p>
                
                <h2>4. Shipping and Delivery</h2>
                <p>1. Autonix aims to process and dispatch orders promptly, but delivery times may vary based on location and product availability.<br/>
                2. Shipping costs are calculated during the checkout process and are the responsibility of the customer.</p>
                
                <h2>5. Returns and Refunds</h2>
                <p>1. Autonix has a return and refund policy. Please refer to the dedicated <a href="#" style={{ color: '#fff' }}>"Return and Refund Policy"</a> page for detailed information.<br/>
                2. Customers are responsible for the return shipping costs unless the return is due to a mistake on Autonix's part.</p>
                
                <h2>6. Intellectual Property</h2>
                <p>1. All content on the Autonix website, including images, text, logos, and graphics, is the property of Autonix and protected by<br /> applicable copyright and intellectual property laws.<br/>
                2. Users may not reproduce, distribute, or use any content from the Website without prior written permission from Autonix.</p>
                
                <h2>7. Privacy Policy</h2>
                <p> Autonix is committed to protecting user privacy. Our Privacy Policy outlines how we collect, use, and safeguard personal information.<br /> By using the Website, you agree to the terms of our Privacy Policy.</p>
                
                <h2>8. Limitation of Liability</h2>
                <p>1. Autonix is not liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the Website or its content.<br/>
                2. Autonix does not guarantee that the Website will be error-free, secure, or continuously available.</p>
                
                <h2>9. Governing Law</h2>
                <p>These Terms and Conditions are governed by and construed in accordance with the laws of our Jurisdiction. Any disputes arising from the use of<br /> the Website will be subject to the exclusive jurisdiction of the courts in our Jurisdiction.</p>
                
                <h2>10. Modification of Terms</h2>
                <p>Autonix reserves the right to modify these Terms and Conditions at any time. Changes will be effective upon posting on the Website. <br />Continued use of the Website constitutes acceptance of the modified terms.</p>
            </div><br /><br />
            <Footer />
            </div>
            
        </>
    );
}
