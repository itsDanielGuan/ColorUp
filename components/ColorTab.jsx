import React, { useEffect, useState } from 'react'
import chroma from 'chroma-js'


export const ColorTab = ({hex="#121212",shade,isAnchor=false}) => {
	const [textOverlay, setTextOverlay] = useState("#121212")
	useEffect(()=>{
		const colorChroma = chroma(hex)
		const bgLuminance = colorChroma.luminance()
		setTextOverlay(bgLuminance > 0.4 ? colorChroma.luminance(0.1,'hcl').hex() : colorChroma.luminance(0.8,'hcl').hex())
	},[hex])

	const [isCopy, setIsCopy] = useState("")
	const handleCopy = () => {
		setIsCopy(true)
		navigator.clipboard.writeText(hex)
		setTimeout(() => {
			setIsCopy(false)
		}, 1000);
	}

  return (
    <button onClick={handleCopy} style={{backgroundColor:hex}} className='rounded-lg px-5 lg:px-0 w-full h-14 lg:h-28 flex flex-row lg:flex-col-reverse justify-between items-center py-1 transition-[shadow,transform]  transform ease-in-out hover:shadow-xl hover:-translate-y-1'>
		
		<div className='flex flex-col items-center'>
			
			<p style={{color:textOverlay}} className={`text-xs`}>
				{hex}
			</p>
			<p style={{color:textOverlay}} className={`text-base font-semibold`}>
				{shade}
			</p>

		</div>
		{isCopy?(
				<p style={{color:textOverlay}} className={`text-xs`}>
					Copied
				</p>
		):(
			null
		)}
    </button>
  )
}
