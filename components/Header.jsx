import React from 'react'

const Header = () => {
  return (
    <div className='z-20 sticky top-0 w-full bg-neutral-950 border-neutral-700 border-b'>
      <div className='container mx-auto items-center flex flex-row justify-between py-2 px-8'>
        <div className='flex flex-row gap-4 text-white'>
          {/* <span className='text-lg'>LOGO</span> */}
          <button className='text font-bold group hover:text-indigo-500 transition-colors ease-in-out'>
            Color
            <span className='text-indigo-500 group-hover:text-white'>
              Up
            </span>
          </button>
        </div>
        <div className='flex flex-row gap-2'>
          <button className='rounded-lg transition-colors  ease-in-out px-4 py-2 border border-neutral-500 hover:border-neutral-300 text-neutral-500 hover:text-neutral-300'>
            <span>
              Log In
            </span>
          </button>
          {/* <button className='rounded transition-colors ease-in-out px-4  bg-neutral-700 hover:bg-neutral-500 text-neutral-200 hover:text-white gap hidden md:flex items-center'>
            <span className='sm:text-white text-blue-400 p-1'>&lt;s</span>
            <span className='sm:max-md:text-blue-400 text-white p-1'>sm</span>
            <span className='md:max-lg:text-blue-400 text-white p-1'>md</span>
            <span className='lg:max-xl:text-blue-400 text-white p-1'>lg</span>
            <span className='xl:max-2xl:text-blue-400 text-white p-1'>xl</span>
            <span className='2xl:text-blue-400 text-white p-1'>2xl</span>
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Header