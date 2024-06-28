"use client";
import chroma from 'chroma-js';
import { useEffect, useRef, useState } from 'react';
import { HexColorPicker } from "react-colorful";
import ColorGroup from './ColorGroup';
import DemoGroup from './DemoGroup';
import UtilitiesColorGroup from './UtilitiesColorGroup';
import ColorizeIcon from '@mui/icons-material/Colorize';
import GreyColorGroup from './GreyColorGroup';
import DemoTooltip from './DemoTooltip';

const generateUtilitiesRange = (lightness,saturation) => {
  //takes in saturation and color
  //low------------------------------->saturation
  //| dull & dark  | strong & dark
  //|--------------|-----------------
  //| dull & pastel| strong & pastel    
  //v
  //lightness

  let midLightness = Number(lightness)

  if(midLightness>0.65){
    midLightness=0.65
  } else if (midLightness<0.35){
    midLightness=0.35
  }

  const lightnessLevels = [midLightness+0.2,midLightness,midLightness-0.2]
  // console.log(lightnessLevels)
  // const lightnessLevels = [
  //   0.7,0.5,0.3
  // ]
  let saturationLevel = saturation
  if(saturationLevel < 0.25){
    saturationLevel = 0.25
  }

  const huePositions = [
    [0,"Danger"], //red (danger/failure)
    [25,"Warning"], //orange (warning)
    [60,"Caution"], //yellow (caution)
    [120,"Success"], //green (success)
    [155,"Calm"], //teal (light success)
    [180,"Clear"], //sky (light info)
    [220,"Info"], //blue (info)
    [245,"Deep"], //indigo (deep info)
    [270,"Action"], //purple (attention)
    [300,"Attention"], //pink (attention)
    [330,"Urgent"], //hotpink (attention)
  ]

  const colorOutputs = [] //[{hueGroup:[{shade:"1",hue:"#97AFE2"},{shade:"2",hue:"#97AFE2"},{shade:"3",hue:"#97AFE2"}],hueType:"Danger"},{},{}]

  for(let [hue,hueType] of huePositions){
    const hueGroup = []
    let shadeCounter = 0
    for(let lightnessLevel of lightnessLevels){
      hueGroup.push({shade:shadeCounter,hex:chroma(hue,saturationLevel,lightnessLevel,"hsl").hex()})
      shadeCounter++
    }
    const hueOutputs = {"hueGroup":[...hueGroup],"hueType":hueType}
    colorOutputs.push({...hueOutputs})
  }
  // console.log(JSON.stringify(colorOutputs))
  return colorOutputs

}

const generateColorRange = (color) =>{
  const findClosestNumber = (array, num) =>{
    let i = 0;
    let minDiff = 1000;
    let ans;
    for (i in array) {
      let m = Math.abs(num - array[i]);
      if (m < minDiff) {
        minDiff = m;
        ans = i;
      }
    }
    return ans;
  }
  const generateList = (color,darkness,darknessIndex) => {
    const colorPositions = [
      0.05,
      0.1,
      0.2,
      0.3,
      0.4,
      0.5,
      0.6,
      0.7,
      0.8,
      0.9,
      0.95
    ]
    const colorOutputs = [
      
    ]
    //potential to do some scaling to move towards actual color for greater consistency
    const scale = chroma.scale(['FFFFFF',color,'000000']).mode('hsl').domain([0,darkness,1])
    for(let i = 0;i<colorPositions.length;i++){
      colorOutputs.push(
        {
          shade:colorPositions[i]*1000,
          hex:scale(colorPositions[i]).hex().toString()
        }
      )
    }
    colorOutputs[darknessIndex] = {shade:colorPositions[darknessIndex]*1000,hex:chroma(color).hex().toString()}
    return colorOutputs
  }

  const colorPositions = [
    0.05,
    0.1,
    0.2,
    0.3,
    0.4,
    0.5,
    0.6,
    0.7,
    0.8,
    0.9,
    0.95
  ]
  const colorUsed = chroma(color)
  const colorHSL = colorUsed.hsl()
  const colorDarkness = (1-colorHSL[2])
  const colorNearestDarknessIndex = findClosestNumber(colorPositions,colorDarkness)
  const colorList = generateList(color,colorDarkness,colorNearestDarknessIndex)
  return [colorList, colorNearestDarknessIndex]
}

const generateGreyRange = (hue,saturation=0.05) => {
  const colorPositions = [
    0.05,
    0.1,
    0.2,
    0.3,
    0.4,
    0.5,
    0.6,
    0.7,
    0.8,
    0.9,
    0.95
  ]
  const colorOutputs = [
    
  ]
  
  const saturationLevel = saturation
  for(let i = 0;i<colorPositions.length;i++){
    colorOutputs.push(
      {
        shade:colorPositions[i]*1000,
        hex:chroma(hue,saturationLevel,1-colorPositions[i],"hsl").hex().toString()
      }
    )
  }
  // console.log(JSON.stringify(colorOutputs))
  return colorOutputs

}

const ColorRange = () => {
  // const [isLoading, setIsLoading] = useState(true)
  //Main Color
  const [mainColor, setMainColor] = useState("#2400d5")

  //Color Infos
  const [HEX, setHEX] = useState(chroma(mainColor).hex())
  const [tempHEX, setTempHEX] = useState(chroma(mainColor).hex())
  const [RGB, setRGB] = useState(chroma(mainColor).rgb())
  const [tempRGB, setTempRGB] = useState(chroma(mainColor).rgb())
  const [HSL, setHSL] = useState(chroma(mainColor).hsl().map((number,index)=>{
    if(index===0){
      return Math.round(isNaN(number)?0:number)
    } else {
      return Math.round(number*100)
    }
  }))
  const [tempHSL, setTempHSL] = useState(chroma(mainColor).hsl().map((number,index)=>{
    if(index===0){
      return Math.round(isNaN(number)?0:number)
    } else {
      return Math.round(number*100)
    }
  }))

  //Primary Range Generator
  const [colorList, setColorList] = useState([]) // [[color,...,color],maincolorindex]
  //Utilities Range Generator
  const [utilitiesColorList, setUtilitiesColorList] = useState([]) //[]
  const [isUtilitiesLocked, setIsUtilitiesLocked] = useState(false)
  //Grey Range Generator
  const [greyColorList,setGreyColorList] = useState([])
  const [isGreyLocked,setIsGreyLocked] = useState(false)

  useEffect(()=>{
    // if(!mainColor) setIsLoading(true)
    // setIsLoading(false)
    // console.log("use effect triggered")
    if(chroma.valid(mainColor)){
      // console.log("use effect triggered, setting main color")
      // console.log(generateColorRange(chroma(mainColor).hex()))
      const primaryColorRange = generateColorRange(chroma(mainColor).hex())
      setColorList(primaryColorRange)

      if(!isUtilitiesLocked){
        const utilitiesColorRange = generateUtilitiesRange(chroma(mainColor).hsl()[2],chroma(mainColor).hsl()[1])
        setUtilitiesColorList(utilitiesColorRange)
      }

      if(!isGreyLocked){
        const greyColorRange = generateGreyRange(chroma(mainColor).hsl()[0])
        setGreyColorList(greyColorRange)
      }



      //propagate changes
      setHEX(chroma(mainColor).hex().toUpperCase())
      setTempHEX(chroma(mainColor).hex().toUpperCase())
      setRGB(chroma(mainColor).rgb())
      setTempRGB(chroma(mainColor).rgb())
      setHSL(chroma(mainColor).hsl().map((number,index)=>{
        if(index===0){
          return Math.round(isNaN(number)?0:number)
        } else {
          return Math.round(number*100)
        }
      }))
      setTempHSL(chroma(mainColor).hsl().map((number,index)=>{
        if(index===0){
          return Math.round(isNaN(number)?0:number)
        } else {
          return Math.round(number*100)
        }
      }))
    }

    
  },[mainColor])



  const handleHEXChange = (value) => {
    // console.log("Hex changed")
    // console.log(value.length, value.length>5)
    setTempHEX(value)
    if(chroma.valid(value)&&value.length>5){
      // console.log("setting Main color")
      setMainColor(value)
    }
    //if the hexcode is valid, setMainColor
    //if the hexcode is invalid, dont update. leave it be
  }

  const handleRGBChange = (value, position) => {
    // console.log("RGB changed")
    if(isNaN(value)) return false
    setTempRGB(prev => {
      const adjustedRGB = [...prev.slice(0, position), Number(value), ...prev.slice(position + 1)];
      
      if (chroma.valid(adjustedRGB, 'rgb')) {
        setMainColor(chroma(adjustedRGB,"rgb").hex());
      }
      
      return adjustedRGB;
    });
  };

  const handleHSLChange = (value, position) => {
    // consolno e.log("HSL changed")
    if(isNaN(value)) return false
    
    setTempHSL(prev => {
      const initialHSL = [...prev.slice(0, position), Number(value), ...prev.slice(position + 1)]
      const adjustedHSL = [initialHSL[0],initialHSL[1]/100,initialHSL[2]/100]
      // console.log("sending to maincolor",adjustedHSL.toString())
      if (chroma.valid(adjustedHSL, 'hsl')) {
        // console.log(chroma(adjustedHSL,"hsl").hsl(),"expected")
        setMainColor(chroma(adjustedHSL,"hsl").hex());
      }
      
      return initialHSL;
    });
  }

  const handleBlur = (type, position) => {
    if(type==="HEX"){
      (tempHEX.length<6 || !chroma.valid(tempHEX))?setTempHEX(HEX):null
    } 
    else if(type ==="RGB"){
      !chroma.valid(tempRGB)?setTempRGB(RGB):null
    }
    else if(type === "HSL"){
      !chroma.valid(tempHSL)?setTempHSL(HSL):null
    }
  }

  const [eyedropAvailable, setEyedropAvailable] = useState(false)
  
  useEffect(()=>{
    console.log(window.EyeDropper?"Eye Dropper Allowed":false)
    setEyedropAvailable("EyeDropper" in window?true:false)
  },[])

  const handleEyeDrop = async() => {
    try{
      const eyeDropper = new EyeDropper();
      const result = await eyeDropper.open()
      const colorSelected = await result.sRGBHex
      setMainColor(colorSelected)
    } catch (error) {
      console.log("User cancelled eyedropper")
    }

  }

  const handleMobileRandomColor = (e) => {
    setMainColor(chroma.random().hex())
  }

  const handleRandomColor = (e) => {
    if(e.code === 'Space') {
      e.preventDefault()
      setMainColor(chroma.random().hex())
    }
  }

  const stickyRef = useRef(null)

  useEffect(() => {
    const event = new KeyboardEvent('keydown', {
      key: 'Space',
      code: 'Space',
      which: 32,
      keyCode: 32,
    });
    handleRandomColor(event)
    document.addEventListener("keydown", handleRandomColor);

    const handleScroll = () => {
      const stickyElement = stickyRef.current;
      if (!stickyElement) return;

      if (stickyElement.getBoundingClientRect().top < 58) {
        stickyElement.style.borderBottomWidth = "1px";
        
        stickyElement.style.borderRightWidth = "1px";
        
        stickyElement.style.borderLeftWidth = "1px";
        // stickyElement.style.backgroundColor = "#303030";
        stickyElement.style.setProperty('--tw-border-opacity', '100'); // Set --tw-border-opacity to 100
      } else {
        stickyElement.style.borderBottomWidth = "0px";
        
        stickyElement.style.borderRightWidth = "0px";
        
        stickyElement.style.borderLeftWidth = "0px";
        // stickyElement.style.backgroundColor = "#10101000";
        stickyElement.style.setProperty('--tw-border-opacity', '0'); // Reset --tw-border-opacity to 0
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener("keydown", handleRandomColor);
  }, []);

  // if(isLoading) return null

  return (
    <div className='container mx-auto max-w-5xl px-5'>
      <div className='container mx-auto px-4 pt-16 pb-6 flex flex-col items-center gap-6'>  
    	  <p className='max-w-[500px] text-center text-white font-bold text-5xl'>
          <span style={{textDecorationColor:HEX}} className='underline decoration-indigo-700'>Color Up</span> your websites quickly.          
        </p>
        <p className='max-w-[800px] text-center text-neutral-300 text-wrap px-5'>
          Space to randomise. Use this to generate a unique color palette.
        </p>
		  </div>

    
      <div ref={stickyRef} style={{}} className='custom-layout max-w-5xl h-48 md:h-56 sticky top-[56px] z-50 backdrop-blur rounded-none border-neutral-700 lg:rounded-b-lg -mx-5 px-5 pt-4 pb-4 -mb-4 mt-6 md:mt-14 transition-[background-color] ease-in-out'>
        <HexColorPicker color={chroma(mainColor).hex()} onChange={setMainColor} />
      </div>

      <div className='flex flex-row flex-wrap justify-center items-center mt-6 lg:flex-row lg:items-start lg:justify-center gap-4 lg:gap-4'>
        <button onClick={handleMobileRandomColor} className='flex flex-row items-center justify-center text-neutral-500 px-4 py-4 border flex-1 border-neutral-500 rounded-xl transition-color ease-in-out hover:text-neutral-300 hover:border-neutral-300 sm:hidden'>
          Randomise
        </button>
        {
          eyedropAvailable?(
            <button onClick={handleEyeDrop} className='flex flex-row justify-center items-center px-4 py-4 border border-neutral-500 hover:border-neutral-300 group rounded-xl'>
              <div>
                <ColorizeIcon className='text-neutral-500 hover:text-neutral-300 group-hover:text-neutral-300'/>
              </div>
            </button>
          ):(
            null
          )
        }
        
        <div className='flex flex-row items-center justify-center gap-4 px-4 py-4 border border-neutral-500 rounded-xl focus-within:border-neutral-300 w-auto flex-1 lg:w-full'>
          <span className='text-neutral-500 cursor-default'>Hex</span>
          <input className='w-20 bg-transparent text-white outline-none' type="text" maxLength="7" value={tempHEX}  onChange={(e)=>{handleHEXChange(e.target.value)}} onBlur={()=>{handleBlur("HEX")}}/>
        </div>

        <div className='flex flex-row items-center justify-center gap-4 px-4 py-4 border border-neutral-500 rounded-xl focus-within:border-neutral-300 w-auto flex-1 lg:w-full'>
          <span className='text-neutral-500 cursor-default'>RGB</span>
          <input className='w-8 text-center bg-transparent text-white outline-none' type="text" inputMode="numeric" maxLength="3" value={tempRGB[0]}  onChange={(e)=>{handleRGBChange(e.target.value,0)}} onBlur={()=>{handleBlur("RGB", 0)}}/>
          <input className='w-8 text-center bg-transparent text-white outline-none' type="text" inputMode="numeric" maxLength="3" value={tempRGB[1]}  onChange={(e)=>{handleRGBChange(e.target.value,1)}} onBlur={()=>{handleBlur("RGB", 1)}}/>
          <input className='w-8 text-center bg-transparent text-white outline-none' type="text" inputMode="numeric" maxLength="3" value={tempRGB[2]}  onChange={(e)=>{handleRGBChange(e.target.value,2)}} onBlur={()=>{handleBlur("RGB", 2)}}/>
        </div>

        <div className='flex flex-row items-center justify-center gap-4 px-4 py-4 border border-neutral-500 rounded-xl focus-within:border-neutral-300 w-auto flex-1 lg:w-full'>
          <span className='text-neutral-500 cursor-default'>HSL</span>
          <input className='w-8 text-center bg-transparent text-white outline-none' type="text" inputMode="numeric" maxLength="3" value={tempHSL[0]}  onChange={(e)=>{handleHSLChange(e.target.value,0)}} onBlur={()=>{handleBlur("HSL", 0)}}/>
          <input className='w-8 text-center bg-transparent text-white outline-none' type="text" inputMode="numeric" maxLength="3" value={tempHSL[1]}  onChange={(e)=>{handleHSLChange(e.target.value,1)}} onBlur={()=>{handleBlur("HSL", 1)}}/>
          <input className='w-8 text-center bg-transparent text-white outline-none' type="text" inputMode="numeric" maxLength="3" value={tempHSL[2]}  onChange={(e)=>{handleHSLChange(e.target.value,2)}} onBlur={()=>{handleBlur("HSL", 2)}}/>
        </div>
        
      </div>

      <div className='flex flex-col items-center max-w-5xl w-full mt-12'>
        <ColorGroup
          colorList={colorList[0]}
          anchorColorIndex={colorList[1]}
        />
      </div>
      
      <div className='flex flex-col items-center max-w-5xl w-full mt-12'>
        <GreyColorGroup
          colorList={greyColorList}
          isGreyLocked={isGreyLocked}
          setIsGreyLocked={setIsGreyLocked}
        />
      </div>

      <div className='flex flex-col items-center mt-12'>
        <UtilitiesColorGroup 
          colorList={utilitiesColorList}
          isUtilitiesLocked={isUtilitiesLocked}
          setIsUtilitiesLocked={setIsUtilitiesLocked}
        />
      </div>

      <div className='w-full mt-12'>
        {/* potential rainbow circle */}
      </div>

      <div className='w-full mt-12'>
        <DemoGroup 
          colorList={colorList[0]} 
          utilitiesColorList={utilitiesColorList} 
          greyColorList={greyColorList}
        />
      </div>

      {/* <DemoTooltip/> */}
      
    </div>
  )
}

export default ColorRange