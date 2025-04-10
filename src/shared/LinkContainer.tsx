import { Link } from 'react-router-dom';
import './styles/LinkContainerStyle.css'

interface LinkContainerProps {
  firstName: string;
  lastName: string;
  linkPath: string;
  imagePath?: string;
}

function LinkContainer({firstName, lastName, linkPath, imagePath}: LinkContainerProps) {
  return (
    <>
      <div className='rounded-md w-80 h-96 flex justify-center border-solid border-orange-600 border-2 hover:scale-95 transition-transform duration-300 contain-strict relative overflow-hidden'>
        <Link to={linkPath} className="no-underline text-inherit hover:text-inherit self-end flex flex-col items-center justify-center relative w-full h-full">
          {/* Gradient overlay */}
          <div
            className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 80%)'
            }}
          ></div>
          {/* Image */}
          <img src={imagePath} alt={`Image of ${firstName} ${lastName}`} className="w-full h-full object-cover" />
          {/* Text */}
          <div className="z-20 relative text-center">
            <span className='text-3xl text-orange-600'>{firstName}</span>
            <span className='pl-2 pb-2 text-3xl'>{lastName}</span>
          </div>
        </Link>
      </div>
    </>
  )
}

export default LinkContainer