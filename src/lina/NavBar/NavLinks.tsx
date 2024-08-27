import classes from "./NavBar.module.css"

const NavLinks = () => {
    return (
        <ul className={classes.NavLinks}>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#project">Projects</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    )
}

export default NavLinks