"use client";
import React, {useCallback, useEffect, useState} from 'react'
import { ColorTab } from './ColorTab';
import { HexColorPicker } from "react-colorful";
import chroma from 'chroma-js';
import ColorGroup from './ColorGroup';
import { stringify } from 'postcss';

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
  for(let i in colorPositions){
    colorOutputs.push({shade:colorPositions[i]*1000,hex:scale(colorPositions[i]).hex().toString()})
  }
  colorOutputs[darknessIndex] = {shade:colorPositions[darknessIndex]*1000,hex:chroma(color).hex().toString()}
  return colorOutputs
}

const generateColorRange = (color) =>{
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
  const lightnessLevels = [
    0.95,
    0.9,
    0.8,
    0.7,
    0.6,
    0.5,
    0.4,
    0.3,
    0.2,
    0.1,
    0.05
  ]
  const colorUsed = chroma(color)
  const colorHSL = colorUsed.hsl()
  const colorDarkness = (1-colorHSL[2])
  const colorNearestDarknessIndex = findClosestNumber(colorPositions,colorDarkness)
  const colorList = generateList(color,colorDarkness,colorNearestDarknessIndex)
  return colorList
}

const ColorRange = () => {
  
  //Main Color
  const [mainColor, setMainColor] = useState("5c00ff")
    //Color Infos
  const [HEX, setHEX] = useState(chroma(mainColor).hex())
  const [tempHEX, setTempHEX] = useState(chroma(mainColor).hex())
  const [RGB, setRGB] = useState(chroma(mainColor).rgb())
  const [tempRGB, setTempRGB] = useState(chroma(mainColor).rgb())
  const [HSL, setHSL] = useState(chroma(mainColor).hsl())
  const [tempHSL, setTempHSL] = useState(chroma(mainColor).hsl())
  //Range Generator
  const [colorList, setColorList] = useState([])
  useEffect(()=>{
    console.log("use effect triggered")
    if(chroma.valid(mainColor)){
      console.log("use effect triggered, setting main color")
      const colorRange = generateColorRange(chroma(mainColor).hex())
      setColorList(colorRange)

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
    console.log("Hex changed")
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
    console.log("RGB changed")
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
    console.log("HSL changed")
    if(isNaN(value)) return false
    
    setTempHSL(prev => {
      const initialHSL = [...prev.slice(0, position), Number(value), ...prev.slice(position + 1)]
      const adjustedHSL = [initialHSL[0],initialHSL[1]/100,initialHSL[2]/100]
      console.log("sending to maincolor",adjustedHSL.toString())
      if (chroma.valid(adjustedHSL, 'hsl')) {
        console.log(chroma(adjustedHSL,"hsl").hsl(),"expected")
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

  const handleRandomColor = (e) => {
    if(e.code === 'Space') {
      e.preventDefault()
      setMainColor(chroma.random().hex())
    }
  }
  useEffect(() => {
    const event = new KeyboardEvent('keydown', {
      key: 'Space',
      code: 'Space',
      which: 32,
      keyCode: 32,
    });
    handleRandomColor(event)
    document.addEventListener("keydown", handleRandomColor);
    return () => document.removeEventListener("keydown", handleRandomColor);
  }, []);

  return (
    <div className='container mx-auto space-y-6'>
      <div className='container mx-auto px-4 pt-16 pb-8 flex flex-col items-center gap-6'>
    	  <p className='max-w-[500px] text-center text-white font-bold text-5xl'>
          <span style={{textDecorationColor:HEX}} className='underline decoration-indigo-700'>Color Up</span> your websites quickly.          
        </p>
        <p className='max-w-[800px] text-center text-neutral-300 text-wrap px-5'>
          Space to randomise. Use this to generate a unique color palette.
          {chroma.valid(chroma(tempRGB).rgb(),"rgb").toString()}|{chroma(mainColor).rgb()}|{tempRGB}
        </p>
		  </div>
      <div className='custom-layout m-auto px-5 max-w-5xl'>
        <HexColorPicker color={HEX} onChange={setMainColor} />
      </div>
      <div className='flex flex-col justify-normal items-center md:flex-row md:items-start md:justify-center px-5 gap-4 md:gap-12'>
        <div className='flex flex-row items-center gap-4 px-4 py-4 border border-neutral-500 rounded-xl focus-within:border-neutral-300'>
          <span className='text-neutral-500 cursor-default'>Hex</span>
          <input className='w-20 bg-transparent text-white outline-none' type="text" maxLength="7" value={tempHEX}  onChange={(e)=>{handleHEXChange(e.target.value)}} onBlur={()=>{handleBlur("HEX")}}/>
        </div>

        <div className='flex flex-row items-center gap-4 px-4 py-4 border border-neutral-500 rounded-xl focus-within:border-neutral-300'>
          <span className='text-neutral-500 cursor-default'>RGB</span>
          <input className='w-8 text-center bg-transparent text-white outline-none' type="text" inputmode="numeric" maxLength="3" value={tempRGB[0]}  onChange={(e)=>{handleRGBChange(e.target.value,0)}} onBlur={()=>{handleBlur("RGB", 0)}}/>
          <input className='w-8 text-center bg-transparent text-white outline-none' type="text" inputmode="numeric" maxLength="3" value={tempRGB[1]}  onChange={(e)=>{handleRGBChange(e.target.value,1)}} onBlur={()=>{handleBlur("RGB", 1)}}/>
          <input className='w-8 text-center bg-transparent text-white outline-none' type="text" inputmode="numeric" maxLength="3" value={tempRGB[2]}  onChange={(e)=>{handleRGBChange(e.target.value,2)}} onBlur={()=>{handleBlur("RGB", 2)}}/>
        </div>

        <div className='flex flex-row items-center gap-4 px-4 py-4 border border-neutral-500 rounded-xl focus-within:border-neutral-300'>
          <span className='text-neutral-500 cursor-default'>HSL</span>
          <input className='w-8 text-center bg-transparent text-white outline-none' type="text" inputmode="numeric" maxLength="3" value={tempHSL[0]}  onChange={(e)=>{handleHSLChange(e.target.value,0)}} onBlur={()=>{handleBlur("HSL", 0)}}/>
          <input className='w-8 text-center bg-transparent text-white outline-none' type="text" inputmode="numeric" maxLength="3" value={tempHSL[1]}  onChange={(e)=>{handleHSLChange(e.target.value,1)}} onBlur={()=>{handleBlur("HSL", 1)}}/>
          <input className='w-8 text-center bg-transparent text-white outline-none' type="text" inputmode="numeric" maxLength="3" value={tempHSL[2]}  onChange={(e)=>{handleHSLChange(e.target.value,2)}} onBlur={()=>{handleBlur("HSL", 2)}}/>
        </div>

      </div>
      <div className='flex flex-col items-center px-5 max-w-5xl mx-auto'>
        <ColorGroup
          colorList={colorList}
        />
      </div>
      <div className='flex flex-col items-center gap-2'>
        
      </div>

      
    </div>
  )
}

export default ColorRange