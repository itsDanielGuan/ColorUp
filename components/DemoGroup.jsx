import React from 'react'
import DemoCard from './DemoCard'

const DemoGroup = ({colorList, utilitiesColorList, greyColorList}) => {
  if(!colorList||colorList.length===0){
		return null
	}
	
	return (
    <div className='w-full relative'>
			<div>
				<span className='font-medium text-white'>Exhibition</span>
			</div>

			<div className='z-0 bg-[#df2e87] opacity-10 w-[500px] h-[500px] rounded-full blur-2xl absolute left-1/3 top-[20%] transform -translate-x-1/2 -translate-y-1/2 hidden lg:block'>
      </div>
			<div className='z-0 bg-[#5348cc] opacity-10 w-[500px] h-[500px] rounded-full blur-2xl absolute left-2/3 top-[30%] transform -translate-x-1/2 -translate-y-1/2 hidden lg:block'>
      </div>
			<div className='z-0 bg-[#cc4848] opacity-10 w-[500px] h-[500px] rounded-full blur-2xl absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block'>
      </div>
			<div className='z-0 bg-[#48cc95] opacity-5 w-[500px] h-[500px] rounded-full blur-2xl absolute left-3/4 top-3/4 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block'>
      </div>
			<div className='z-0 bg-[#2edfdf] opacity-5 w-[500px] h-[500px] rounded-full blur-2xl absolute left-1/4 top-[80%] transform -translate-x-1/2 -translate-y-1/2 hidden lg:block'>
      </div>
			<div className='z-10 relative mt-6 w-full flex flex-row gap-3 gap-y-8 flex-wrap justify-center lg:justify-between'>
				{
          Array.from({length:12},(v,i)=>(
						<DemoCard variant={i} colorList={colorList} utilitiesColorList={utilitiesColorList} greyColorList={greyColorList} key={i}/>
					))
        }
			</div>
    </div>
  )
}

export default DemoGroup