import './styles/LandingPageStyle.css'
import LinkContainer from "./LinkContainer"
import imageDaniel from '../assets/landing-d-hero.jpg'

function LandingPage() {
  return (
    <>
      <div className="flex flex-row h-svh w-screen justify-center items-center relative overflow-hidden">
        {/* Main content */}
        <div className="overflow-hidden flex flex-row w-max relative z-10">
          <div className="flex-row">
            <LinkContainer firstName="Daniel" lastName="Riddersporre" imagePath={imageDaniel} linkPath="/daniel-landing" />
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage