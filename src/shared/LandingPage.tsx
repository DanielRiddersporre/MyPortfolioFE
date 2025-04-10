import { Link } from "react-router-dom"
import './styles/LandingPageStyle.css'
import firstImage from '../assets/landing-l-hero.jpg'
import secondImage from '../assets/landing-d-hero.jpg'
import LinkContainer from "./LinkContainer"

function LandingPage() {
  return (
    <>
        <div className="relative h-screen overflow-hidden flex flex-col h-max w-max">
            {/* <div className="relative flex-1 overflow-hidden">
                <Link to="/lina" className="block h-full">
                    <div className="absolute w-full sm:text-base md:text-xl lg:text-3xl p-2 text-white font-bold bg-gradient-to-r from-black to-transparent">
                        Lina
                    </div>
                    <img src={firstImage} alt="Image of Lina" className="w-full h-full object-cover" />
                </Link>
            </div> */}
            <div className="">
                <LinkContainer />
            </div>
        </div>
    </>
  )
}

export default LandingPage