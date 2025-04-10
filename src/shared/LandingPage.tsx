import './styles/LandingPageStyle.css'
import LinkContainer from "./LinkContainer"
import imageDaniel from '../assets/landing-d-hero.jpg'

function LandingPage() {
  return (
    <>
        <div className="flex flex-row h-screen justify-center items-center">
            <div className="overflow-hidden flex flex-row w-max">
                <div className="flex-row">
                    <LinkContainer firstName="Daniel" lastName="Riddersporre" imagePath={imageDaniel} linkPath="/daniel"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default LandingPage