import React from 'react'
import DemoCard from './DemoCard'

const DemoGroup = ({colorList, utilitiesColorList}) => {
  return (
    <div className='w-full'>
			<div>
				<span className='font-medium text-white'>Exhibition</span>
			</div>
			<div className='mt-6 w-full flex flex-row gap-3 gap-y-8 flex-wrap justify-center lg:justify-between'>
				{
          Array.from({length:12},(v,i)=>(
						<DemoCard variant={i} colorList={colorList} utilitiesColorList={utilitiesColorList}/>
					))
        }
			</div>
    </div>
  )
}

export default DemoGroup