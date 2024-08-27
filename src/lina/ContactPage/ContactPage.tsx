import classes from "./ContactPage.module.css"
import { BsLinkedin } from "react-icons/bs"


const ContactPage = () => {

    return (
        <span className={classes.ContactPage}>
            <div>
                <h1 id="contact">Contact</h1>
                <h2>Have a question or want to work together?</h2>
                <div>
                    <a href="https://www.linkedin.com/in/lina-riddersporre-a16588109/">
                        <BsLinkedin size="40px" color="darkblue" />
                    </a>

                </div>
            </div>
        </span>
    );
}

export default ContactPage;