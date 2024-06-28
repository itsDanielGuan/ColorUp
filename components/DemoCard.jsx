import React,{ useEffect, useState } from 'react'
import DemoTooltip from './DemoTooltip'

const DemoCard = ({variant, colorList, utilitiesColorList, greyColorList, setTooltipData}) => {
  // console.log(colorList)
  if(!colorList) return null
  const [content, setContent] = useState(<></>)
  const handleEnter = (e,...tooltipList) =>{

    // console.log("Entering",tooltipList[1])
    let tooltipListLength = tooltipList.length
    if(tooltipListLength===0||tooltipListLength===1){
      return
    }
    if(tooltipListLength%2!=0){
      // console.log("decreasing list length")
      tooltipListLength-=1
    }

    const colorList = []
    const shadeList = []
    const typeList = []
    for(let i = 0;i<tooltipListLength;i+=2){
      console.log(tooltipList[i],tooltipList[i+1])
      colorList.push(tooltipList[i].hex)
      shadeList.push(tooltipList[i].shade)
      typeList.push(tooltipList[i+1])
      console.log(tooltipList[i+1])
    }
    
    setTooltipData({
      "colorList":colorList,
      "shadeList":shadeList,
      "typeList":typeList
    })
    e.stopPropagation()
  }

  const handleExit = (e) =>{
    // console.log("Exiting")
    setTooltipData({})
    e.stopPropagation()
  }

  useEffect(()=>{
    if (variant===0){
      setContent(
        <div style={{backgroundColor:colorList[0].hex}} className=' w-full h-full' 
          onMouseOver={(e)=>handleEnter(e,colorList[0],"background")} onMouseOut={e=>handleExit(e)}
        >
          <div className='grid grid-cols-4 grid-rows-5 grid-flow-dense w-full h-full gap-0'>
            <div style={{backgroundColor:colorList[7].hex}} className='group col-start-1 rounded-tr-full col-span-2 row-start-2 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,colorList[7],"primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:colorList[2].hex}} className='group col-start-1 col-span-1 row-start-1 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,colorList[2],"primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:colorList[1].hex}} className='group z-[1] col-start-4 col-span-1 row-start-3 row-span-3 rounded-full' 
              onMouseOver={(e)=>handleEnter(e,colorList[1],"primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:colorList[3].hex}} className='group z-[1] col-start-3 col-span-1 row-start-4 row-span-3 rounded-full' 
              onMouseOver={(e)=>handleEnter(e,colorList[3],"primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:colorList[5].hex}} className='group z-[1] col-start-2 col-span-1 row-start-5 row-span-3 rounded-full' 
              onMouseOver={(e)=>handleEnter(e,colorList[5],"primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:colorList[9].hex}} className='group col-start-3 col-span-2 row-start-2 row-span-4' 
              onMouseOver={(e)=>handleEnter(e,colorList[9],"primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:colorList[10].hex}} className='group z-[1] rounded-e-full col-start-2 col-span-1 row-start-3 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,colorList[10],"primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:colorList[8].hex}} className='group rounded-s-full col-start-1 col-span-2 row-start-3 row-span-2' 
             onMouseOver={(e)=>handleEnter(e,colorList[8],"primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            
            <div style={{backgroundColor:colorList[6].hex}} className='group rounded-l-full col-start-2 col-span-1 row-start-1 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,colorList[6],"primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:colorList[4].hex, clipPath: 'polygon(0% 0%, 50% 0%, 100% 100%, 0% 100%)',}} className='group col-start-3 col-span-2 row-start-1 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,colorList[4],"primary")} onMouseOut={e=>handleExit(e)}>
            </div>
          </div>
        </div>
      )
    } else if (variant===1){
      setContent(
        <div style={{backgroundColor:greyColorList[0].hex}} className=' w-full h-full' 
          onMouseOver={(e)=>handleEnter(e,greyColorList[0],"gray")} onMouseOut={e=>handleExit(e)}
        >
          <div className='grid grid-cols-4 grid-rows-5 grid-flow-dense w-full h-full gap-0'>
            <div style={{backgroundColor:greyColorList[4].hex}} className='col-start-1 z-[1] rounded-full col-span-3 row-start-1 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[4],"gray")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[7].hex}} className='col-start-4 z-[2] rounded-full col-span-1 row-start-4 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[7],"gray")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[10].hex}} className='col-start-4 z-[1] rounded-full col-span-1 row-start-1 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[10],"gray")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[5].hex}} className='col-start-2 z-[1] rounded-full col-span-3 row-start-2 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[5],"gray")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[8].hex}} className='col-start-2 z-[2] rounded-full col-span-2 row-start-3 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[8],"gray")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[9].hex}} className='col-start-1 z-[1] rounded-full col-span-3 row-start-4 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[9],"gray")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[6].hex}} className='col-start-1 z-[2] rounded-full col-span-4 row-start-5 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[6],"gray")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[2].hex}} className='col-start-3 z-[2] rounded-full col-span-1 row-start-4 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[2],"gray")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[3].hex}} className='col-start-1 col-span-3 row-start-1 row-span-5' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[3],"gray")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[1].hex}} className='col-start-2 z-[1] rounded-full col-span-1 row-start-2 row-span-3' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[1],"gray")} onMouseOut={e=>handleExit(e)}>
            </div>


          </div>
        </div>
      )
    } else if (variant===2){
      setContent(
        <div style={{backgroundColor:"#FFFFFF"}} className=' w-full h-full'>
          <div className='grid grid-cols-8 grid-rows-10 grid-flow-dense w-full h-full gap-0'>
            
            <div style={{backgroundColor:utilitiesColorList[0].hueGroup[2].hex}} className='col-start-1 rounded-full col-span-2 row-start-1 row-span-4' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[0].hueGroup[2],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[0].hueGroup[0].hex}} className='col-start-1 rounded-full col-span-4 row-start-1 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[0].hueGroup[0],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[0].hueGroup[1].hex}} className='col-start-1 rounded-l-full col-span-2 row-start-1 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[0].hueGroup[1],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[1].hueGroup[2].hex}} className='col-start-2 rounded-full col-span-2 row-start-2 row-span-4' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[1].hueGroup[2],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[1].hueGroup[0].hex}} className='col-start-2 rounded-full col-span-4 row-start-2 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[1].hueGroup[0],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[1].hueGroup[1].hex}} className='col-start-2 rounded-l-full col-span-2 row-start-2 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[1].hueGroup[1],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[2].hueGroup[2].hex}} className='col-start-3 rounded-b-full col-span-1 row-start-4 row-span-5' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[2].hueGroup[2],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[2].hueGroup[0].hex}} className='col-start-3 rounded-full col-span-4 row-start-3 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[2].hueGroup[0],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[2].hueGroup[1].hex}} className='col-start-3 rounded-l-full col-span-2 row-start-3 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[2].hueGroup[1],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[3].hueGroup[2].hex}} className='col-start-4 rounded-b-full col-span-1 row-start-5 row-span-4' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[3].hueGroup[2],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[3].hueGroup[0].hex}} className='col-start-4 rounded-full col-span-4 row-start-4 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[3].hueGroup[0],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[3].hueGroup[1].hex}} className='col-start-4 rounded-l-full col-span-2 row-start-4 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[3].hueGroup[1],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[4].hueGroup[2].hex}} className='col-start-5 rounded-b-full col-span-1 row-start-6 row-span-3' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[4].hueGroup[2],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[4].hueGroup[0].hex}} className='col-start-5 rounded-full col-span-4 row-start-5 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[4].hueGroup[0],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[4].hueGroup[1].hex}} className='col-start-5 rounded-l-full col-span-2 row-start-5 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[4].hueGroup[1],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[5].hueGroup[2].hex}} className='col-start-6 rounded-b-full col-span-1 row-start-7 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[5].hueGroup[2],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[5].hueGroup[0].hex}} className='col-start-6 rounded-l-full col-span-4 row-start-6 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[5].hueGroup[0],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[5].hueGroup[1].hex}} className='col-start-6 rounded-l-full col-span-2 row-start-6 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[5].hueGroup[1],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[6].hueGroup[2].hex}} className='col-end-9 rounded-full col-span-2 row-end-11 row-span-4' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[6].hueGroup[2],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[6].hueGroup[0].hex}} className='col-end-9 rounded-bl-full col-span-4 row-end-11 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[6].hueGroup[0],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[6].hueGroup[1].hex}} className='col-end-9 rounded-l-full col-span-2 row-end-11 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[6].hueGroup[1],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[7].hueGroup[2].hex}} className='col-start-1 rounded-tl-full col-span-2 row-end-11 row-span-5' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[8].hueGroup[2],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[7].hueGroup[0].hex}} className='col-start-3 rounded-br-full col-span-2 row-end-11 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[8].hueGroup[0],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[7].hueGroup[1].hex}} className='col-start-1 rounded-l-full col-span-2 row-end-11 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[8].hueGroup[1],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[8].hueGroup[2].hex}} className='col-start-6 rounded-br-full col-span-1 row-start-1 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[8].hueGroup[2],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[8].hueGroup[0].hex}} className='col-start-5 col-span-2 row-start-1 row-span-1 rounded-tl-full' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[8].hueGroup[0],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[8].hueGroup[1].hex}} className='col-start-6 rounded-tl-full col-span-1 row-start-1 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[8].hueGroup[1],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[9].hueGroup[2].hex}} className='col-start-7 rounded-br-full col-span-1 row-start-1 row-span-3' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[9].hueGroup[2],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[9].hueGroup[0].hex}} className='col-start-7 col-span-1 row-start-1 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[9].hueGroup[0],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[9].hueGroup[1].hex}} className='col-start-7 rounded-tl-full col-span-1 row-start-2 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[9].hueGroup[1],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[10].hueGroup[2].hex}} className='col-start-8 rounded-br-full col-span-1 row-start-1 row-span-4' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[10].hueGroup[2],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[10].hueGroup[0].hex}} className='col-start-8 col-span-1 row-start-1 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[10].hueGroup[0],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[10].hueGroup[1].hex}} className='col-start-8 rounded-tl-full col-span-1 row-start-2 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[10].hueGroup[1],"utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
          </div>
        </div>
      )
    } else if (variant===3){
      setContent(
        <div style={{}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===4){
      setContent(
        <div style={{}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===5){
      setContent(
        <div style={{}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===6){
      setContent(
        <div style={{}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===7){
      setContent(
        <div style={{}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===8){
      setContent(
        <div style={{}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===9){
      setContent(
        <div style={{}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===10){
      setContent(
        <div style={{}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===11){
      setContent(
        <div style={{}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===12){
      setContent(
        <div style={{}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else {
      return null
    }
  },[variant, colorList, utilitiesColorList, greyColorList])
  
  
  return (
    <div className='w-full max-w-[320px] h-96 rounded-lg overflow-clip border-2 border-neutral-500 text-neutral-500 '>
      {content}
      
    </div>
  )
}

export default DemoCard