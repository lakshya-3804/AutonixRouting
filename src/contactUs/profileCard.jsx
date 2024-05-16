import styles from './ContactUs.module.css';
export default function ProfileCard(props) {
    return (
        <div className={styles.flexbox1}>
            <img style={{width:"150px" , height:"150px"}} src={props.srcImg} alt={props.imgSrcAlt} />
            <h2 className={styles.head1}>{props.desig}</h2>
            <p className={styles.a}>{props.empname}</p>
            <br />
            <form
              action={props.linkedInLink}
              method="get"
              target="_blank"
            >
              <button className={styles.button}>
                <span>Connect</span>
              </button>
            </form>
        </div>
    )
}