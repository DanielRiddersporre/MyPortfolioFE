import './styles/LinkContainerStyle.css'

function LinkContainer() {
  return (
    <>
        <div className=' bg-slate-600 rounded-md w-80 h-96 flex justify-center border-solid border-orange-600 border-2'>
            <button className='w-80 rounded-md flex p-0'>
                <span className='self-end pl-2 pb-2 text-3xl text-orange-600'>Daniel</span><span className='flex self-end pl-2 pb-2 text-3xl'>Riddersporre</span>
            </button>
        </div>
    </>
  )
}

export default LinkContainer