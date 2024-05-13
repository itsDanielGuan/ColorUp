import React from 'react'
import { ColorTab } from './ColorTab'

const ColorGroup = ({colorList}) => {
  return (
    <div className='py-4 md:py-12 w-full flex flex-col lg:flex-row justify-center items-center gap-1'>
        {
          colorList?.map((colorval)=>(
            <ColorTab
              hex={colorval.hex}
              shade={colorval.shade}
            />
          ))
        }
      </div>
  )
}

export default ColorGroup