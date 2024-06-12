import React,{ useEffect, useState } from 'react'

const DemoCard = ({variant, colorList, utilitiesColorList, greyColorList}) => {
  // console.log(colorList)
  if(!colorList) return null
  const [content, setContent] = useState(<></>)

  useEffect(()=>{

    if (variant===0){
      setContent(
        <div style={{backgroundColor:colorList[0].hex}} className=' w-full h-full'>
          <div className='grid grid-cols-4 grid-rows-5 grid-flow-dense w-full h-full gap-0'>
            <div style={{backgroundColor:colorList[7].hex}} className='col-start-1 rounded-tr-full col-span-2 row-start-2 row-span-1'>
            </div>
            <div style={{backgroundColor:colorList[2].hex}} className='col-start-1 col-span-1 row-start-1 row-span-1'>
            </div>
            <div style={{backgroundColor:colorList[1].hex}} className='z-[1] col-start-4 col-span-1 row-start-3 row-span-3 rounded-full'>
            </div>
            <div style={{backgroundColor:colorList[3].hex}} className='z-[1] col-start-3 col-span-1 row-start-4 row-span-3 rounded-full'>
            </div>
            <div style={{backgroundColor:colorList[5].hex}} className='z-[1] col-start-2 col-span-1 row-start-5 row-span-3 rounded-full'>
            </div>
            <div style={{backgroundColor:colorList[9].hex}} className=' col-start-3 col-span-2 row-start-2 row-span-4'>
            </div>


            <div style={{backgroundColor:colorList[10].hex}} className='z-[1] rounded-e-full col-start-2 col-span-1 row-start-3 row-span-2'>
            </div>
            <div style={{backgroundColor:colorList[8].hex}} className='rounded-s-full col-start-1 col-span-2 row-start-3 row-span-2'>
            </div>
            
            <div style={{backgroundColor:colorList[6].hex}} className='rounded-l-full col-start-2 col-span-1 row-start-1 row-span-2'>
            </div>
            <div style={{backgroundColor:colorList[4].hex, clipPath: 'polygon(0% 0%, 50% 0%, 100% 100%, 0% 100%)',}} className='col-start-3 col-span-2 row-start-1 row-span-1'>
            </div>
          </div>
        </div>
      )
    } else if (variant===1){
      setContent(
        <div style={{}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===2){
      setContent(
        <div style={{}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

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
  },[variant,colorList,utilitiesColorList])
  
  
  return (
    <div className='w-full max-w-[320px] h-96 rounded-lg backdrop-blur-lg overflow-hidden border-2 border-neutral-500 text-neutral-500 '>
      
      {content}
    </div>
  )
}

export default DemoCard