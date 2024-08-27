import classes from "./AdessoProject.module.css"
import adessoApplicationBookpage from "./img/adessoBooking.jpg"
import adessoApplicationRoompage from "./img/adessoProject.png"
import adessoApplicationAddEventpage from "./img/adessoProject1.png"

const AdessoProject = () => {
    return (
        <div className={classes.AdessoProject}>
            <a href="/">Go back</a>
            <div className='adesso'>
                <h1>Adesso booking application</h1>
                <span>
                    <p>Internship-project, a scheduler to book the booking-rooms at the office.</p>
                    <p>Done in React with Materials.ui and connected to AWS.</p>
                </span>
                <div>
                    <img src={adessoApplicationBookpage} alt="Startpage on the adesso booking app" />
                </div>
                <div>
                    <img src={adessoApplicationRoompage} alt="Startpage on the adesso booking app" />
                </div>
                <div>
                    <img src={adessoApplicationAddEventpage} alt="Startpage on the adesso booking app" />
                </div>
            </div>
        </div>
    )
}

export default AdessoProject;