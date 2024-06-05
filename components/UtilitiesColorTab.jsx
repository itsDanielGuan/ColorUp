import React, { useEffect, useRef, useState, useTransition } from 'react'
import chroma from 'chroma-js'


const UtilitiesColorTab = ({hueList, hueType}) => {
	const [textOverlay, setTextOverlay] = useState(["#121212","#121212","#121212"])
	useEffect(()=>{
		const output = []
		for(let hex of hueList){
			const colorChroma = chroma(hex)
			const bgLuminance = colorChroma.luminance()
			output.push(bgLuminance > 0.4 ? colorChroma.luminance(0.1,'hcl').hex() : colorChroma.luminance(0.8,'hcl').hex())
			
		}
		setTextOverlay(output)
	},[hueList])

	const [isCopy, setIsCopy] = useState(false)
	const timeoutRef = useRef(null)
	const handleCopy = (hueLevel) => {
		if(timeoutRef.current){
			clearTimeout(timeoutRef.current)
		}
		setIsCopy(hueLevel)
		navigator.clipboard.writeText(hueList[hueLevel])
		timeoutRef.current=setTimeout(() => {
			setIsCopy(false)
		}, 1000);
	}

  return (
		<div className='w-full h-32 flex flex-col group gap-[2px]'>
			<button onClick={()=>handleCopy(0)} style={{backgroundColor:hueList[0]}} className='rounded-t-lg px-5 lg:px-0 w-full h-full flex flex-row flex-grow lg:flex-col-reverse justify-between items-center py-1 transition-[transform] transform ease-in-out group-hover:-translate-y-1'>
			<div className='flex flex-row-reverse lg:flex-col gap-4 lg:gap-2 items-center'>
				<div className='flex flex-col items-center'>
					<p style={{color:textOverlay[0]}} className={`text-xs`}>
						{/* {hueList[0]} */}
					</p>
				</div>
			</div>

			{isCopy===0?(
					<p style={{color:textOverlay[0]}} className={`text-xs`}>
						Copied
					</p>
			):(null)}

    </button>
		<button onClick={()=>handleCopy(1)} style={{backgroundColor:hueList[1]}} className='px-5 lg:px-0 w-full h-full flex flex-row flex-grow lg:flex-col-reverse justify-between items-center py-1 transition-[transform] transform ease-in-out group-hover:-translate-y-1'>
			<div className='flex flex-row-reverse lg:flex-col gap-4 lg:gap-2 items-center'>
				<div className='flex flex-col items-center'>
					<p style={{color:textOverlay[1]}} className={`text-xs`}>
						{/* {hueList[1]} */}
					</p>
				</div>
			</div>

			{isCopy===1?(
					<p style={{color:textOverlay[1]}} className={`text-xs`}>
						Copied
					</p>
			):(null)}

    </button>
		<button onClick={()=>handleCopy(2)} style={{backgroundColor:hueList[2]}} className='rounded-b-lg px-5 lg:px-0 w-full h-full flex flex-row flex-grow lg:flex-col-reverse justify-between items-center py-1 transition-[transform] transform ease-in-out group-hover:-translate-y-1'>
			<div className='flex flex-row-reverse lg:flex-col gap-4 lg:gap-2 items-center'>
				<div className='flex flex-col items-center justify-center'>
					<p style={{color:textOverlay[2]}} className=" text-xs">
						{/* {hueList[2]} */}
					</p>

					<p style={{color:textOverlay[2]}} className={`text-base font-semibold`}>
						{hueType}
					</p>

				</div>
			</div>

			{isCopy===2?(
					<p style={{color:textOverlay[2]}} className="text-xs -mt-4 pt-4">
						Copied
					</p>
			):(null)}

    </button>
		</div>
    
  )
}

export default UtilitiesColorTab
