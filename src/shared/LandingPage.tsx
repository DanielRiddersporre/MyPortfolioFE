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
                    <img src={firstImage} alt="Your Name" className="w-full h-full object-cover" />
                </Link>
            </div>
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-10">
                <div className="relative w-full h-[10vh] md:h-[15vh] lg:h-[20vh]">
                    <div className="absolute p-4 top-0 left-0 w-full h-full bg-black transform -skew-y-6">
                        <div className="absolute top-2 left-3 text-white bg-black font-bold"> {/* Add skew to make text straight: skew-y-6 */}
                            Lina
                        </div>
                        <div className="absolute bottom-2 right-3 text-white bg-black font-bold"> {/* Add skew to make text straight: skew-y-6 */}
                            Daniel
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex-1 overflow-hidden">
                <Link to="/daniel" className="block h-full">
                    <img src={secondImage} alt="Wife's Name" className="w-full h-full object-cover" />
                </Link>
            </div>
        </div>
    </>
  )
}

export default LandingPage