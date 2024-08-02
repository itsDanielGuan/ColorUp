import React,{ useEffect, useState } from 'react'
import DemoTooltip from './DemoTooltip'
import colorFestival from '../public/colorFestival.jpg'
import Image from 'next/image'
import WarningIcon from '@mui/icons-material/Warning';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import BackHandIcon from '@mui/icons-material/BackHand';
import CookieIcon from '@mui/icons-material/Cookie';

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
              onMouseOver={(e)=>handleEnter(e,colorList[7],"Primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:colorList[2].hex}} className='group col-start-1 col-span-1 row-start-1 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,colorList[2],"Primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:colorList[1].hex}} className='group z-[1] col-start-4 col-span-1 row-start-3 row-span-3 rounded-full' 
              onMouseOver={(e)=>handleEnter(e,colorList[1],"Primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:colorList[3].hex}} className='group z-[1] col-start-3 col-span-1 row-start-4 row-span-3 rounded-full' 
              onMouseOver={(e)=>handleEnter(e,colorList[3],"Primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:colorList[5].hex}} className='group z-[1] col-start-2 col-span-1 row-start-5 row-span-3 rounded-full' 
              onMouseOver={(e)=>handleEnter(e,colorList[5],"Primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:colorList[9].hex}} className='group col-start-3 col-span-2 row-start-2 row-span-4' 
              onMouseOver={(e)=>handleEnter(e,colorList[9],"Primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:colorList[10].hex}} className='group z-[1] rounded-e-full col-start-2 col-span-1 row-start-3 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,colorList[10],"Primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:colorList[8].hex}} className='group rounded-s-full col-start-1 col-span-2 row-start-3 row-span-2' 
             onMouseOver={(e)=>handleEnter(e,colorList[8],"Primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            
            <div style={{backgroundColor:colorList[6].hex}} className='group rounded-l-full col-start-2 col-span-1 row-start-1 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,colorList[6],"Primary")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:colorList[4].hex, clipPath: 'polygon(0% 0%, 50% 0%, 100% 100%, 0% 100%)',}} className='group col-start-3 col-span-2 row-start-1 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,colorList[4],"Primary")} onMouseOut={e=>handleExit(e)}>
            </div>
          </div>
        </div>
      )
    } else if (variant===1){
      setContent(
        <div style={{backgroundColor:greyColorList[0].hex}} className=' w-full h-full' 
          onMouseOver={(e)=>handleEnter(e,greyColorList[0],"Grey")} onMouseOut={e=>handleExit(e)}
        >
          <div className='grid grid-cols-4 grid-rows-5 grid-flow-dense w-full h-full gap-0'>
            <div style={{backgroundColor:greyColorList[4].hex}} className='col-start-1 z-[1] rounded-full col-span-3 row-start-1 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[4],"Grey")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[7].hex}} className='col-start-4 z-[2] rounded-full col-span-1 row-start-4 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[7],"Grey")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[10].hex}} className='col-start-4 z-[1] rounded-full col-span-1 row-start-1 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[10],"Grey")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[5].hex}} className='col-start-2 z-[1] rounded-full col-span-3 row-start-2 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[5],"Grey")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[8].hex}} className='col-start-2 z-[2] rounded-full col-span-2 row-start-3 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[8],"Grey")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[9].hex}} className='col-start-1 z-[1] rounded-full col-span-3 row-start-4 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[9],"Grey")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[6].hex}} className='col-start-1 z-[2] rounded-full col-span-4 row-start-5 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[6],"Grey")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[2].hex}} className='col-start-3 z-[2] rounded-full col-span-1 row-start-4 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[2],"Grey")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[3].hex}} className='col-start-1 col-span-3 row-start-1 row-span-5' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[3],"Grey")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:greyColorList[1].hex}} className='col-start-2 z-[1] rounded-full col-span-1 row-start-2 row-span-3' 
              onMouseOver={(e)=>handleEnter(e,greyColorList[1],"Grey")} onMouseOut={e=>handleExit(e)}>
            </div>


          </div>
        </div>
      )
    } else if (variant===2){
      setContent(
        <div style={{backgroundColor:"#FFFFFF"}} className=' w-full h-full'>
          <div className='grid grid-cols-8 grid-rows-10 grid-flow-dense w-full h-full gap-0'>
            
            <div style={{backgroundColor:utilitiesColorList[0].hueGroup[2].hex}} className='col-start-1 rounded-full col-span-2 row-start-1 row-span-4' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[0].hueGroup[2],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[0].hueGroup[0].hex}} className='col-start-1 rounded-full col-span-4 row-start-1 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[0].hueGroup[0],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[0].hueGroup[1].hex}} className='col-start-1 rounded-l-full col-span-2 row-start-1 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[0].hueGroup[1],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[1].hueGroup[2].hex}} className='col-start-2 rounded-full col-span-2 row-start-2 row-span-4' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[1].hueGroup[2],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[1].hueGroup[0].hex}} className='col-start-2 rounded-full col-span-4 row-start-2 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[1].hueGroup[0],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[1].hueGroup[1].hex}} className='col-start-2 rounded-l-full col-span-2 row-start-2 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[1].hueGroup[1],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[2].hueGroup[2].hex}} className='col-start-3 rounded-b-full col-span-1 row-start-4 row-span-5' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[2].hueGroup[2],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[2].hueGroup[0].hex}} className='col-start-3 rounded-full col-span-4 row-start-3 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[2].hueGroup[0],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[2].hueGroup[1].hex}} className='col-start-3 rounded-l-full col-span-2 row-start-3 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[2].hueGroup[1],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[3].hueGroup[2].hex}} className='col-start-4 rounded-b-full col-span-1 row-start-5 row-span-4' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[3].hueGroup[2],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[3].hueGroup[0].hex}} className='col-start-4 rounded-full col-span-4 row-start-4 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[3].hueGroup[0],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[3].hueGroup[1].hex}} className='col-start-4 rounded-l-full col-span-2 row-start-4 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[3].hueGroup[1],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[4].hueGroup[2].hex}} className='col-start-5 rounded-b-full col-span-1 row-start-6 row-span-3' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[4].hueGroup[2],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[4].hueGroup[0].hex}} className='col-start-5 rounded-full col-span-4 row-start-5 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[4].hueGroup[0],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[4].hueGroup[1].hex}} className='col-start-5 rounded-l-full col-span-2 row-start-5 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[4].hueGroup[1],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[5].hueGroup[2].hex}} className='col-start-6 rounded-b-full col-span-1 row-start-7 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[5].hueGroup[2],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[5].hueGroup[0].hex}} className='col-start-6 rounded-l-full col-span-4 row-start-6 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[5].hueGroup[0],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[5].hueGroup[1].hex}} className='col-start-6 rounded-l-full col-span-2 row-start-6 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[5].hueGroup[1],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[6].hueGroup[2].hex}} className='col-end-9 rounded-full col-span-2 row-end-11 row-span-4' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[6].hueGroup[2],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[6].hueGroup[0].hex}} className='col-end-9 rounded-bl-full col-span-4 row-end-11 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[6].hueGroup[0],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[6].hueGroup[1].hex}} className='col-end-9 rounded-l-full col-span-2 row-end-11 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[6].hueGroup[1],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[7].hueGroup[2].hex}} className='col-start-1 rounded-tl-full col-span-2 row-end-11 row-span-5' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[8].hueGroup[2],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[7].hueGroup[0].hex}} className='col-start-3 rounded-br-full col-span-2 row-end-11 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[8].hueGroup[0],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[7].hueGroup[1].hex}} className='col-start-1 rounded-l-full col-span-2 row-end-11 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[8].hueGroup[1],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[8].hueGroup[2].hex}} className='col-start-6 rounded-br-full col-span-1 row-start-1 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[8].hueGroup[2],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[8].hueGroup[0].hex}} className='col-start-5 col-span-2 row-start-1 row-span-1 rounded-tl-full' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[8].hueGroup[0],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[8].hueGroup[1].hex}} className='col-start-6 rounded-tl-full col-span-1 row-start-1 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[8].hueGroup[1],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[9].hueGroup[2].hex}} className='col-start-7 rounded-br-full col-span-1 row-start-1 row-span-3' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[9].hueGroup[2],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[9].hueGroup[0].hex}} className='col-start-7 col-span-1 row-start-1 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[9].hueGroup[0],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[9].hueGroup[1].hex}} className='col-start-7 rounded-tl-full col-span-1 row-start-2 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[9].hueGroup[1],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>

            <div style={{backgroundColor:utilitiesColorList[10].hueGroup[2].hex}} className='col-start-8 rounded-br-full col-span-1 row-start-1 row-span-4' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[10].hueGroup[2],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[10].hueGroup[0].hex}} className='col-start-8 col-span-1 row-start-1 row-span-2' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[10].hueGroup[0],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
            <div style={{backgroundColor:utilitiesColorList[10].hueGroup[1].hex}} className='col-start-8 rounded-tl-full col-span-1 row-start-2 row-span-1' 
              onMouseOver={(e)=>handleEnter(e,utilitiesColorList[10].hueGroup[1],"Utilities")} onMouseOut={e=>handleExit(e)}>
            </div>
          </div>
        </div>
      )
    } else if (variant===3){
      setContent(
        <div className='w-full h-full relative' style={{backgroundColor:colorList[2].hex}}
        onMouseOver={(e)=>handleEnter(e,colorList[2],"Primary background")} onMouseOut={e=>handleExit(e)}>
            <div className='absolute w-[130%] aspect-square overflow-clip rounded-full left-0 top-0 -translate-y-[40%]'>
              <Image className='object-cover h-[450px] transform translate-y-12' src={colorFestival}>
              </Image>
              <div className='absolute w-80 h-80 border-[24px] rounded-full top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2' style={{borderColor:colorList[2].hex}}
                onMouseOver={(e)=>handleEnter(e,colorList[2],"Primary background")} onMouseOut={e=>handleExit(e)}>
              </div>
              <div className='absolute w-52 h-52 border-[24px] rounded-full top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2' style={{borderColor:colorList[2].hex}}
                onMouseOver={(e)=>handleEnter(e,colorList[2],"Primary background")} onMouseOut={e=>handleExit(e)}
              >
              </div>
            </div>
            <div className='absolute bottom-0 py-6 px-8 text-3xl font-bold' >
              <p className='' style={{color:colorList[8].hex}}
                onMouseOver={(e)=>handleEnter(e,colorList[8],"Primary Text")} onMouseOut={e=>handleExit(e)}
              >ColorUp. </p>
              <p className='' style={{color:colorList[6].hex}}
                onMouseOver={(e)=>handleEnter(e,colorList[6],"Primary Text")} onMouseOut={e=>handleExit(e)}
              >Palette!</p>
              <p className='' style={{color:colorList[4].hex}}
                onMouseOver={(e)=>handleEnter(e,colorList[4],"Primary Text")} onMouseOut={e=>handleExit(e)}
              >Free & Open.</p>
            </div>
        </div>
      )
    } else if (variant===4){
      setContent(
        <div style={{backgroundColor:greyColorList[10].hex}} className='w-full h-full relative flex flex-col items-end justify-center'
          onMouseOver={(e)=>handleEnter(e,greyColorList[10],"Grey Background")} onMouseOut={e=>handleExit(e)}
        >
          <div className='absolute top-1/2 left-0 transform -translate-y-1/2 flex flex-col gap-6 text-6xl'>
            <p style={{color:greyColorList[9].hex}} className='font-bold  transform -translate-x-12'
              onMouseOver={(e)=>handleEnter(e,greyColorList[9],"Grey Text")} onMouseOut={e=>handleExit(e)}
            >
              DESIGN & <br/>
              DIRECTION
            </p>
            <p style={{color:greyColorList[9].hex}} className='font-bold'
              onMouseOver={(e)=>handleEnter(e,greyColorList[9],"Grey Text")} onMouseOut={e=>handleExit(e)}
            >
              DESIGN & <br/>
              DIRECTION
            </p>
            <p style={{color:greyColorList[9].hex}} className='font-bold transform translate-x-12'
              onMouseOver={(e)=>handleEnter(e,greyColorList[9],"Grey Text")} onMouseOut={e=>handleExit(e)}
            >
              DESIGN & <br/>
              DIRECTION
            </p>
          </div>
          <div className='font-bold text-3xl z-10 w-fit flex flex-col items-end px-5' style={{color:greyColorList[5].hex}}
            onMouseOver={(e)=>handleEnter(e,greyColorList[5],"Grey Text")} onMouseOut={e=>handleExit(e)}
          >
            Greyscale is 
            <br/>
            <p>
            Equally {" "}
            <span className='italic' style={{color:greyColorList[1].hex}}
              onMouseOver={(e)=>handleEnter(e,greyColorList[1],"Grey Text")} onMouseOut={e=>handleExit(e)}
            >SEXY</span>
            </p>

            <button className='px-6 py-2 rounded-lg text-base w-fit mix-blend-screen mt-4' style={{color:greyColorList[9].hex, backgroundColor:greyColorList[1].hex}}
              onMouseOver={(e)=>handleEnter(e,greyColorList[1],"Grey Button",greyColorList[9],"Grey Text")} onMouseOut={e=>handleExit(e)}
            >
              ColorUp
            </button>
          </div>

        </div>
      )
    } else if (variant===5){
      setContent(
        <div 
        // style={{backgroundColor:colorList[0].hex}} 
        className='w-full h-full flex flex-col py-6 pr-16 bg-white/10'>
          <div className='flex flex-col relative'>
            <div className='aspect-square w-64 rounded-full blur-xl absolute top-4 left-4 bg-red-500 opacity-25 transform -translate-x-28 -translate-y-24'>
            </div>
            <div className='aspect-square w-64 rounded-full blur-xl absolute top-24 left-24 bg-yellow-500 opacity-25 transform -translate-x-10 -translate-y-24'>
            </div>
            <div className='aspect-square w-64 rounded-full blur-xl absolute top-44 left-12 bg-green-500 opacity-25 transform -translate-x-24 -translate-y-24'>
            </div>
            <div className='aspect-square w-64 rounded-full blur-xl absolute top-64 left-20 bg-blue-500 opacity-25 transform -translate-x-10 -translate-y-24'>
            </div>
            <div className='rounded-full p-4 px-6 opacity-90 w-fit h-fit flex flex-row gap-3 items-center transform rotate-12 absolute top-4 left-4' style={{backgroundColor:utilitiesColorList[0].hueGroup[0].hex}}>
              <WarningIcon className='opacity-100' style={{color:utilitiesColorList[0].hueGroup[2].hex}}/>
              <span style={{color:utilitiesColorList[0].hueGroup[2].hex}} className=' text-nowrap font-bold'> Useful colors</span>
            </div>
            <div className='rounded-full p-4 px-6 opacity-90 w-fit h-fit flex flex-row gap-3 items-center transform rotate-[-6deg] absolute top-24 left-24' style={{backgroundColor:utilitiesColorList[2].hueGroup[0].hex}}>
              <AirplanemodeActiveIcon className='opacity-100' style={{color:utilitiesColorList[2].hueGroup[2].hex}}/>
              <span style={{color:utilitiesColorList[2].hueGroup[2].hex}} className=' text-nowrap font-bold'>Get up to <span className='italic'>SPEED</span></span>
            </div>
            <div className='rounded-full p-4 px-6 opacity-90 w-fit h-fit flex flex-row gap-3 items-center transform rotate-[6deg] absolute top-44 left-12' style={{backgroundColor:utilitiesColorList[3].hueGroup[0].hex}}>
              <BackHandIcon className='opacity-100' style={{color:utilitiesColorList[3].hueGroup[2].hex}}/>
              <span style={{color:utilitiesColorList[3].hueGroup[2].hex}} className=' text-nowrap font-bold'>Can't Stop.</span>
            </div>
            <div className='rounded-full p-4 px-6 opacity-90 w-fit h-fit flex flex-row gap-3 items-center transform rotate-[-8deg] absolute top-64 left-20' style={{backgroundColor:utilitiesColorList[6].hueGroup[0].hex}}>
              <CookieIcon className='opacity-100' style={{color:utilitiesColorList[6].hueGroup[2].hex}}/>
              <span style={{color:utilitiesColorList[6].hueGroup[2].hex}} className=' text-nowrap font-bold'>Take a break!</span>
            </div>
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
        <div style={{}} className='w-full h-full text-white bg-white bg-opacity-0'>
          <p className='py-6 text-xl text-center font-medium text-neutral-300'>
            Primary Buttons
          </p>
          <div className='flex flex-row justify-center'>
            <div className='flex flex-col gap-3 w-fit'>
              <button style={{backgroundColor:colorList[4].hex,color:colorList[10].hex}} className='democardPrimary'
                onMouseOver={(e)=>handleEnter(e,colorList[4],"Primary Filled Background",colorList[10],"Primary Text")} onMouseOut={e=>handleExit(e)}
              >
                Filled
              </button>
              <button style={{backgroundColor:colorList[8].hex,color:colorList[2].hex}} className='democardPrimary'
                onMouseOver={(e)=>handleEnter(e,colorList[8],"Primary Alternate Background",colorList[2],"Grey Text")} onMouseOut={e=>handleExit(e)}
              >
                Alternate
              </button>
              <button style={{borderColor:colorList[4].hex,color:colorList[4].hex}} className='democardPrimary'
                onMouseOver={(e)=>handleEnter(e,colorList[4],"Primary Outline Border",colorList[4],"Primary Outline Text")} onMouseOut={e=>handleExit(e)}
              >
                Outline
              </button>
              <button style={{backgroundColor:colorList[2].hex,color:colorList[8].hex}} className='democardPrimary'
                onMouseOver={(e)=>handleEnter(e,colorList[2],"Primary Tonal Background",colorList[8],"Primary Tonal Text")} onMouseOut={e=>handleExit(e)}
              >
                Tonal
              </button>
              <button style={{backgroundColor:colorList[4].hex,color:colorList[2].hex}} className='democardPrimary'
                onMouseOver={(e)=>handleEnter(e,colorList[4],"Primary Disabled Background",colorList[2],"Primary Disabled Text")} onMouseOut={e=>handleExit(e)}
              >
                Disabled
              </button>
            </div>
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
        <div style={{}} className='w-full h-full text-white text-xs bg-white bg-opacity-0'>
        <p className='py-6 text-xl text-center font-medium text-neutral-300'>
          Utility Buttons
        </p>
          
          <div className='flex flex-row h-full justify-evenly px-2'>
            <div className='flex flex-col gap-2'>
              <p className=' text-center text-neutral-300'>
                Filled
              </p>
              <button style={{backgroundColor:utilitiesColorList[0].hueGroup[1].hex, color:greyColorList[0].hex}} className='democardUtils'
                onMouseOver={(e)=>handleEnter(e,utilitiesColorList[0].hueGroup[1],"Utility Danger Background",greyColorList[0],"Grey Text")} onMouseOut={e=>handleExit(e)}
              >
                Danger
              </button>
              <button style={{backgroundColor:utilitiesColorList[1].hueGroup[1].hex, color:greyColorList[0].hex}} className='democardUtils'
                onMouseOver={(e)=>handleEnter(e,utilitiesColorList[1].hueGroup[1],"Utility Warning Background",greyColorList[0],"Grey Text")} onMouseOut={e=>handleExit(e)}
              >
                Warning
              </button>
              <button style={{backgroundColor:utilitiesColorList[2].hueGroup[1].hex, color:greyColorList[10].hex}} className='democardUtils text-neutral-800'
                onMouseOver={(e)=>handleEnter(e,utilitiesColorList[2].hueGroup[1],"Utility Caution Background",greyColorList[10],"Grey Text")} onMouseOut={e=>handleExit(e)}
              >
                Caution
              </button>
              <button style={{backgroundColor:utilitiesColorList[3].hueGroup[1].hex, color:greyColorList[0].hex}} className='democardUtils'
                onMouseOver={(e)=>handleEnter(e,utilitiesColorList[3].hueGroup[1],"Utility Success Background",greyColorList[0],"Grey Text")} onMouseOut={e=>handleExit(e)}
              >
                Success
              </button>
              <button style={{backgroundColor:utilitiesColorList[6].hueGroup[1].hex, color:greyColorList[0].hex}} className='democardUtils'
                onMouseOver={(e)=>handleEnter(e,utilitiesColorList[6].hueGroup[1],"Utility Info Background",greyColorList[0],"Grey Text")} onMouseOut={e=>handleExit(e)}
              >
                Info
              </button> 
            </div>
            <div className='flex flex-col gap-2 font-bold'>
              <p className=' text-center font-normal text-neutral-300'>
                Outlined
              </p>
              <button style={{borderColor:utilitiesColorList[0].hueGroup[1].hex, color:utilitiesColorList[0].hueGroup[1].hex }} className='democardUtils democardUtilsBorder'
                onMouseOver={(e)=>handleEnter(e,utilitiesColorList[0].hueGroup[1],"Utility Danger Border",utilitiesColorList[0].hueGroup[1],"Utility Danger Text")} onMouseOut={e=>handleExit(e)}
              >
                Danger
              </button>
              <button style={{borderColor:utilitiesColorList[1].hueGroup[1].hex, color:utilitiesColorList[1].hueGroup[1].hex, }} className='democardUtils democardUtilsBorder'
                onMouseOver={(e)=>handleEnter(e,utilitiesColorList[1].hueGroup[1],"Utility Warning Border",utilitiesColorList[1].hueGroup[1],"Utility Warning Text")} onMouseOut={e=>handleExit(e)}
              >
                Warning
              </button>
              <button style={{borderColor:utilitiesColorList[2].hueGroup[1].hex, color:utilitiesColorList[2].hueGroup[1].hex }} className='democardUtils democardUtilsBorder'
                onMouseOver={(e)=>handleEnter(e,utilitiesColorList[2].hueGroup[1],"Utility Caution Border",utilitiesColorList[2].hueGroup[1],"Utility Caution Text")} onMouseOut={e=>handleExit(e)}
              >
                Caution
              </button>
              <button style={{borderColor:utilitiesColorList[3].hueGroup[1].hex, color:utilitiesColorList[3].hueGroup[1].hex }} className='democardUtils democardUtilsBorder'
                onMouseOver={(e)=>handleEnter(e,utilitiesColorList[3].hueGroup[1],"Utility Success Border",utilitiesColorList[3].hueGroup[1],"Utility Success Text")} onMouseOut={e=>handleExit(e)}
              >
                Success
              </button>
              <button style={{borderColor:utilitiesColorList[6].hueGroup[1].hex, color:utilitiesColorList[6].hueGroup[1].hex }} className='democardUtils democardUtilsBorder'
                onMouseOver={(e)=>handleEnter(e,utilitiesColorList[6].hueGroup[1],"Utility Info Border",utilitiesColorList[6].hueGroup[1],"Utility Info Text")} onMouseOut={e=>handleExit(e)}
              >
                Info
              </button> 
            </div>
            <div className='flex flex-col gap-2'>
              <p className=' text-center text-neutral-300'>
                Tonal
              </p>
              <button style={{backgroundColor:utilitiesColorList[0].hueGroup[0].hex,color:utilitiesColorList[0].hueGroup[2].hex}} className='democardUtils'
                onMouseOver={(e)=>handleEnter(e,utilitiesColorList[0].hueGroup[0],"Utility Danger Background",utilitiesColorList[0].hueGroup[2],"Utility Danger Text")} onMouseOut={e=>handleExit(e)}
              >
                Danger 
              </button>
              <button style={{backgroundColor:utilitiesColorList[1].hueGroup[0].hex,color:utilitiesColorList[1].hueGroup[2].hex}} className='democardUtils'
                onMouseOver={(e)=>handleEnter(e,utilitiesColorList[1].hueGroup[0],"Utility Warning Background",utilitiesColorList[1].hueGroup[2],"Utility Warning Text")} onMouseOut={e=>handleExit(e)}
              >
                Warning
              </button>
              <button style={{backgroundColor:utilitiesColorList[2].hueGroup[0].hex,color:utilitiesColorList[2].hueGroup[2].hex}} className='democardUtils'
                onMouseOver={(e)=>handleEnter(e,utilitiesColorList[2].hueGroup[0],"Utility Caution Background",utilitiesColorList[2].hueGroup[2],"Utility Caution Text")} onMouseOut={e=>handleExit(e)}
              >
                Caution
              </button>
              <button style={{backgroundColor:utilitiesColorList[3].hueGroup[0].hex,color:utilitiesColorList[3].hueGroup[2].hex}} className='democardUtils'
                onMouseOver={(e)=>handleEnter(e,utilitiesColorList[3].hueGroup[0],"Utility Success Background",utilitiesColorList[3].hueGroup[2],"Utility Success Text")} onMouseOut={e=>handleExit(e)}
              >
                Success
              </button>
              <button style={{backgroundColor:utilitiesColorList[6].hueGroup[0].hex,color:utilitiesColorList[6].hueGroup[2].hex}} className='democardUtils'
                onMouseOver={(e)=>handleEnter(e,utilitiesColorList[6].hueGroup[0],"Utility Info Background",utilitiesColorList[6].hueGroup[2],"Utility Info Text")} onMouseOut={e=>handleExit(e)}
              >
                Info
              </button> 
            </div>

          </div>
        </div>
      )
    } else if (variant===12){
      setContent(
        <div style={{}} className='w-full h-full'>
       
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