import { Link } from 'react-router-dom';

function DanielMenu() {
  return (
    <>
      <div className="w-screen flex items-center justify-center bg-neutral-900 h-16">
        <div className="xl:w-4/12 sm:w-full flex items-center h-full">
          <Link to="/daniel-landing" className="text-white hover:text-white">
            <div className="text-center">
              <span className='text-4xl text-orange-600'>|</span>
              <span className='text-3xl'>D</span>
              <span className='text-3xl'>R</span>
              <span className='text-4xl text-orange-600'>|</span>
            </div>
          </Link>
          <nav className="flex-grow">
            <Link to={"/daniel-projects"} className="ml-5 text-white hover:text-orange-600">Projects</Link>
            <Link to={"/daniel-blog"} className="ml-5 text-white hover:text-orange-600">Blog</Link>
            <Link to={"/daniel-about"} className="ml-5 text-white hover:text-orange-600">About</Link>
            <Link to={"/daniel-contact"} className="ml-5 text-white hover:text-orange-600">Contact</Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default DanielMenu