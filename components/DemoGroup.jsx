import React, { useEffect,useState } from 'react'
import DemoCard from './DemoCard'
import DemoTooltip from './DemoTooltip'
import { jsx } from 'react/jsx-runtime'

const DemoGroup = ({colorList, utilitiesColorList, greyColorList}) => {
	const [mousePosition, setMousePosition] = useState({x:0,y:0})
	const [tooltipData,setTooltipData] = useState({})
	useEffect(()=>{
		// let tooltips = document.querySelectorAll('.tooltip');
		// // console.log(tooltips)
		
		window.addEventListener("mousemove",event=>{
			const x = (event.clientX - 60) + 'px'
      const y = (event.clientY + 20) + 'px'
			// console.log(x,y)
			setMousePosition({"x":x,"y":y})
			// for (let i = 0; i < tooltips.length; i++) {
      //   tooltips[i].style.top = y;
      //   tooltips[i].style.left = x;
    	// }
		})
	})

  if(!colorList||colorList.length===0){
		return null
	}
	
	return (
    <div className='w-full relative'>
			<div>
				<span className='font-medium text-white' >Exhibition</span>
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
						<DemoCard variant={i} colorList={colorList} utilitiesColorList={utilitiesColorList} greyColorList={greyColorList} key={i} setTooltipData={setTooltipData}/>
					))
        }
			</div>
			{Object.keys(tooltipData).length!=0 && <DemoTooltip tooltipData={tooltipData} mousePosition={mousePosition}/>}
    </div>
  )
}

export default DemoGroup