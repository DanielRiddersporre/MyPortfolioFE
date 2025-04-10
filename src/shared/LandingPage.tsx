import './styles/LandingPageStyle.css'
import LinkContainer from "./LinkContainer"

function LandingPage() {
  return (
    <>
        <div className="flex flex-row h-screen justify-center items-center">
            <div className="overflow-hidden flex flex-row w-max">
                <div className="flex-row">
                    <LinkContainer firstName="Daniel" lastName="Riddersporre" imagePath="src/assets/landing-d-hero.jpg" linkPath="/daniel"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default LandingPage