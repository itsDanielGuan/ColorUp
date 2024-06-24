import React from 'react'

const DemoTooltip = ({colorList=["#AFAFAF",],shadeList=[500,],typeList=["text",],mousePosition={y:0,x:0}, tooltipData}) => {
  const [smallestList, biggestList] = [Math.min(tooltipData.colorList.length,tooltipData.shadeList.length,tooltipData.typeList.length),Math.max(tooltipData.colorList.length,tooltipData.shadeList.length,tooltipData.typeList.length)]
  if(smallestList!=biggestList){
    console.log("Mismatch of displayed colors")
  }

  return (
    <div style={{top:mousePosition.y,left:mousePosition.x, position:'fixed', zIndex:9999}} className='fixed block tooltip'>

      <div className='flex p-4 flex-col gap-2 items-start rounded-lg bg-neutral-100 w-fit'>
        {
          Array.from({length:smallestList}).map((v,i)=>(
            <div className='flex flex-row gap-1 items-center text-sm' key={i}>
              <div style={{backgroundColor:tooltipData.colorList[i][0]==="#"?tooltipData.colorList[i]:"#"+tooltipData.colorList[i]}} className=' aspect-square rounded h-4'>
              </div>
              <div className='text-neutral-700 font-bold'>
                {tooltipData.shadeList[i]}
              </div>
              <div className='text-neutral-700 font-black'>
              ·
              </div>
              <div className='text-neutral-700'>
              {tooltipData.typeList[i]}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DemoTooltip