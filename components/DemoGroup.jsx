import React from 'react'
import DemoCard from './DemoCard'

const DemoGroup = ({colorList}) => {
  return (
    <div className='w-full'>
			<div>
				<span className='font-medium text-white'>Exhibition</span>
			</div>
			<div className='mt-6 w-full'>
      	<DemoCard/>
			</div>
    </div>
  )
}

export default DemoGroup