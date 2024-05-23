import React, {useEffect, useState} from 'react'
import { ColorTab } from './ColorTab'
import nearestColor from 'nearest-color';
import colorNameList from 'color-name-list';

const colors = colorNameList.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});
const nearest = nearestColor.from(colors);

const ColorGroup = ({colorList, anchorColorIndex}) => {
  const [colorName, setColorName] = useState("")

  useEffect(()=>{
    
// get closest named color
    if(colorList){
      
      setColorName(nearest(colorList[anchorColorIndex].hex).name)
    }
    
  },[colorList])
  // nearestColor need objects {name => hex} as input
  

  
// get closest named color

  return (
    <div className='w-full flex flex-col'>
      <div className='flex flex-row justify-between'>
        <div className='text-white'>
          {colorName}
        </div>
        <div>
          <button className='text-neutral-500'>
            <span>
              Save
            </span>
          </button>
        </div>
      </div>
      <div className='py-4 md:py-6 w-full flex flex-col lg:flex-row justify-center items-center gap-1'>
        {
          colorList?.map((colorval,index)=>(
            <ColorTab
              key={index}
              hex={colorval.hex}
              shade={colorval.shade}
              isAnchor={Number(index)===Number(anchorColorIndex)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ColorGroup