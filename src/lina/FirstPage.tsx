import classes from "./FirstPage.module.css"
import { MyComponent } from "./Animation/Animation"

const FirstPage = () => {
    return (
        <div className={classes.FirstPage}>
            <MyComponent />
        </div>
    )
}

export default FirstPage