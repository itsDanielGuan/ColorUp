"use client";
import React, {useCallback, useEffect, useState} from 'react'
import { ColorTab } from './ColorTab';
import { HexColorPicker } from "react-colorful";
import chroma from 'chroma-js';
import ColorGroup from './ColorGroup';

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
  const [hex, setHex] = useState("#FFFFFF")
  const [currHex, setCurrHex] = useState("#FFFFFF")
  const [HSL, setHSL] = useState([
    360,
    100,
    100
  ])
  //Range Generator
  const [colorList, setColorList] = useState([])
  useEffect(()=>{
    const colorRange = generateColorRange(mainColor)
    setColorList(colorRange)
  },[mainColor])
  
  useEffect(()=>{
    //if mainColor changes, propagate conversion of mainColor to all other versions
  },[mainColor])

  const handleRandomColor = (e) => {
    e.preventDefault();
    setMainColor(chroma.random().hex())
  }
  useEffect(() => {
    document.addEventListener("keydown", handleRandomColor);
    return () => document.removeEventListener("keydown", handleRandomColor);
  }, []);

  const handleHexColor = (hex) => {
    //if the hexcode is valid, setMainColor
    //if the hexcode is valid but without #, add a # then setMainColor
    //if the hexcode is invalid, dont update. leave it be
  }


  return (
    <div className='container mx-auto space-y-6'>
      <div className='container mx-auto px-4 pt-16 pb-8 flex flex-col items-center gap-6'>
    	  <p className='max-w-[500px] text-center text-white font-bold text-5xl'>
          <span style={{textDecorationColor:mainColor}} className='underline decoration-indigo-700'>Color Up</span> your websites quickly.          
        </p>
        <p className='max-w-[800px] text-center text-neutral-300 text-wrap px-5'>
          Space to randomise. Use this to generate a unique color palette.
        </p>
		  </div>
      <div className='custom-layout m-auto px-5 max-w-5xl'>
        <HexColorPicker color={mainColor} onChange={setMainColor} />
      </div>
      <div className='flex flex-col justify-normal items-center md:flex-row md:items-start md:justify-center px-5 gap-4 md:gap-12'>
        <div className='flex flex-row items-center gap-4 px-4 py-4 border border-neutral-500 rounded-xl focus-within:'>
          <span className='text-neutral-500 cursor-default'>Hex</span>
          <input className='w-20 bg-transparent text-white outline-none' type="text" maxLength="7" value={mainColor}  onChange={(value)=>{handleHexColor(value)}}/>
        </div>

        <div className='flex flex-row items-center gap-4 px-4 py-4 border border-neutral-500 rounded-xl focus-within:'>
          <span className='text-neutral-500 cursor-default'>RGB</span>
          <input className='w-20 bg-transparent text-white outline-none' type="text" maxLength="7" value={mainColor}  onChange={(value)=>{handleHexColor(value)}}/>
        </div>

        <div className='flex flex-row items-center gap-4 px-4 py-4 border border-neutral-500 rounded-xl focus-within:'>
          <span className='text-neutral-500 cursor-default'>HSL</span>
          <input className='w-20 bg-transparent text-white outline-none' type="text" maxLength="7" value={mainColor}  onChange={(value)=>{handleHexColor(value)}}/>
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