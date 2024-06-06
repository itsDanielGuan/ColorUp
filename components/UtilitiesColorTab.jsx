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
		output.push(chroma(hueList[2]).luminance(0.7,"hcl").hex())
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


	const [isHueCopy, setIsHueCopy] = useState(false)
	const timeoutHueRef = useRef(null)
	const handleHueCopy = (e) => {
		e.stopPropagation();
		if(timeoutHueRef.current){
			clearTimeout(timeoutHueRef.current)
		}
		setIsHueCopy(true)
		navigator.clipboard.writeText(JSON.stringify(hueList).slice(1,-1))
		timeoutHueRef.current=setTimeout(() => {
			setIsHueCopy(false)
		}, 1000);
	}

  return (
		<div className='w-full h-36 flex flex-col group gap-[0px]'>
			<button onClick={()=>handleCopy(0)} style={{backgroundColor:hueList[0]}} className='rounded-t-lg px-5 lg:px-0 w-full h-full flex flex-row flex-grow lg:flex-col-reverse justify-between items-center py-1 transition-[transform,border-radius] transform ease-in-out group-hover:-translate-y-1 hover:rounded-lg'>
			<div className='flex flex-row-reverse lg:flex-col gap-4 lg:gap-2 items-center justify-center'>
				<div className='flex flex-col items-center'>
					<p style={{color:textOverlay[0]}} className="text-xs group-hover:block hidden">
						{hueList[0]}
					</p>
				</div>
			</div>

			{isCopy===0?(
					<p style={{color:textOverlay[0]}} className={`text-xs`}>
						Copied
					</p>
			):(null)}

			</button>
			<button onClick={()=>handleCopy(1)} style={{backgroundColor:hueList[1]}} className='px-5 lg:px-0 w-full h-full flex flex-row flex-grow lg:flex-col-reverse justify-between items-center py-1 transition-[transform,border-radius] transform ease-in-out group-hover:-translate-y-1 hover:rounded-lg'>
				<div className='flex flex-row-reverse lg:flex-col gap-4 lg:gap-2 items-center'>
					<div className='flex flex-col items-center'>
						<p style={{color:textOverlay[1]}} className="text-xs group-hover:block hidden">
							{hueList[1]}
						</p>
					</div>
				</div>

				{isCopy===1?(
						<p style={{color:textOverlay[1]}} className="text-xs">
							Copied
						</p>
				):(null)}

			</button>
			<button onClick={()=>handleCopy(2)} style={{backgroundColor:hueList[2]}} className='rounded-b-lg px-5 lg:px-0 w-full h-full flex flex-row flex-grow lg:flex-col-reverse justify-between items-center py-1 transition-[transform,border-radius] transform ease-in-out group-hover:-translate-y-1 hover:-translate-y-1 hover:rounded-lg'>
				
				<div className='flex flex-row-reverse lg:flex-col gap-4 lg:gap-1 items-center'>
					<div className='flex flex-col items-center'>
						<p style={{color:textOverlay[2]}} className="text-xs group-hover:block hidden">
							{hueList[2]}
						</p>
						<p style={{color:textOverlay[2]}} onClick={(e)=>handleHueCopy(e)} className="text-sm font-semibold block lg:hidden cursor-pointer">
							{isHueCopy?(
								<p style={{color:textOverlay[2]}} className="text-sm">
									Copied
								</p>
							):(hueType)}
						</p>
					</div>
				</div>

				{isCopy===2?(
					<p style={{color:textOverlay[2]}} className="text-xs">
						Copied
					</p>
				):(null)}

			</button>
			<p style={{color:textOverlay[3]}} onClick={(e)=>handleHueCopy(e)} className="text-sm text-center hidden lg:block cursor-pointer">
				
				{isHueCopy?(
					<p style={{color:textOverlay[3]}} className="text-sm">
						Copied
					</p>
				):(hueType)}
			</p>
			
		</div>
    
  )
}

export default UtilitiesColorTab
