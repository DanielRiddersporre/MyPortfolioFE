import classes from "./NavBar.module.css";
import NavLinks from "./NavLinks";
import { ImMenu3, ImMenu4 } from "react-icons/im";

import { useState } from "react"

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);

    const openHamburgerIcon = <ImMenu3 className={classes.Hamburger} size="40px" color="white"
        onClick={() => setOpen(!open)}
    />

    const closeHamburgerIcon = <ImMenu4 className={classes.Hamburger} size="40px" color="white"
        onClick={() => setOpen(!open)}
    />

    return (
        <nav className={classes.MobileNavigation}>
            {open ? closeHamburgerIcon : openHamburgerIcon}
            {open && <NavLinks />}
        </nav>
    )
}

export default MobileNavigation