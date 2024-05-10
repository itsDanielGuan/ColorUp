import React from 'react'

const Header = () => {
  return (
    <div className='sticky top-0 w-full bg-neutral-950 border-gray-400 border-b'>
      <div className='container mx-auto items-center flex flex-row justify-between py-4 px-8'>
        <div className='flex flex-row gap-4 text-white'>
          {/* <span className='text-lg'>LOGO</span> */}
          <span className='text font-bold'>Color
            <span className='text-indigo-400'>
              Up
            </span>
          </span>
        </div>
        <div>
          <button className='rounded transition-colors ease-in-out px-4 py-2  bg-neutral-700 hover:bg-neutral-500 text-neutral-200 hover:text-white'>
            <span >
              Log In
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header