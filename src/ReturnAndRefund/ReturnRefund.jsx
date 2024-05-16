
import Header from '../Header/Header.jsx';
import styles from './ReturnRefund.module.css';
import Footer from '../Footer/footer.jsx';

export default function ReturnRefund() {

    return (
        <>
            <Header />
            <div className={styles.returnbody}>
            <div className={styles.container1}>
                <div className={styles.head}>
                    <h1>RETURN AND REFUND</h1>
                </div>
                <h2 className={styles.h2}>Return and Refund Policy</h2>
                <p>
                    At Autonix, we are committed to providing a seamless and luxurious shopping experience for our esteemed customers.
                    <br />
                    Our Return and Refund Policy is designed to ensure your satisfaction with every purchase of spare automobile parts.
                    <br />
                    Please take a moment to review our return and refund policy below.
                </p>
                <div>
                    <h2>Returns</h2>
                    <h3>Eligibility Criteria</h3>
                    <p>1. Time Frame: You have 30 calendar days from the date of receiving your order to initiate a return.</p>
                    <p>2. Condition of the Item: The item must be unused, undamaged, and in its original packaging.</p>
                    <br />
                    <h3>Initiation Process </h3>
                    <p>1. Inspection: Once we receive the returned item, our team will inspect it for compliance with our return policy.</p>
                    <p>2. Refund Process: If the return is approved, we will initiate a refund to your original payment method.
                        <br /> Please allow a reasonable processing time.
                    </p>
                </div>
                <br />
                <h2>Refunds</h2>
                <p>
                    Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you <br />of the status of your refund after inspecting the item.
                </p>
                <p>
                    If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within <br /> a certain amount of days, depending on your card issuer's policies.
                </p>
                <br />
                <h2>Contact Us</h2>
                <p id="mailArea">
                    Should you have any questions or concerns regarding our Return and Refund Policy,
                    <br /> our dedicated customer service team is ready to assist you. Reach out to us at
                    <br />
                    <a href="mailto:customerservice@autonix.com" style={{color:'yellowgreen'}}>customerservice@autonix.com</a>.
                </p>
            </div>
            </div>
            <Footer />            
        </>
    );
}
