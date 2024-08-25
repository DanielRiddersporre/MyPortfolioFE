import { Link } from "react-router-dom"
import './styles/LandingPageStyle.css'
import firstImage from '../assets/landing-l-hero.jpg'
import secondImage from '../assets/landing-d-hero.jpg'

function LandingPage() {
  return (
    <>
        <div className="relative h-screen overflow-hidden flex flex-col">
            <div className="relative flex-1 overflow-hidden">
                <Link to="/lina" className="block h-full">
                    <div className="absolute w-full sm:text-base md:text-xl lg:text-3xl p-2 text-white font-bold bg-gradient-to-r from-black to-transparent">
                        Lina
                    </div>
                    <img src={firstImage} alt="Image of Lina" className="w-full h-full object-cover" />
                </Link>
            </div>
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-10">
                <div className="relative w-full h-[5vh]">
                    <div className="absolute p-4 top-0 left-0 w-full h-full bg-white text-black text-center font-bold"></div>{/* Insert Text to put in the divider if needed */}
                </div>
            </div>
            <div className="relative flex-1 overflow-hidden">
                <Link to="/daniel" className="block h-full">
                    <div className="absolute w-full sm:text-base md:text-xl lg:text-3xl bottom-0 right-0 p-2 text-white font-bold bg-gradient-to-l from-black to-transparent text-right">
                        Daniel
                    </div>
                    <img src={secondImage} alt="Image of Daniel" className="w-full h-full object-cover" />
                </Link>
            </div>
        </div>
    </>
  )
}

export default LandingPage