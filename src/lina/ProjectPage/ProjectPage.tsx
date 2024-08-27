import classes from "./ProjectPage.module.css"
import photo from "../AdessoProject/img/adessoBooking.jpg"
import { Link } from "react-router-dom";


const ProjectPage = () => {

    return (
        <span className={classes.ProjectPage}>
            <div>
                <h1 id="project">Project</h1>
                <h2>adesso bokningsapplikation</h2>
                <Link to="/adessoProject"><img src={photo} alt="Startpage on the adesso booking app" /></Link>
            </div>
        </span>
    );
}

export default ProjectPage;