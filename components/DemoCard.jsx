import React,{ useEffect, useState } from 'react'

const DemoCard = ({variant, colorList, utilitiesColorList}) => {
  // console.log(colorList)
  if(!colorList) return null
  const [content, setContent] = useState(<></>)

  useEffect(()=>{

    if (variant===0){
      setContent(
        <div style={{backgroundColor:colorList[variant%11].hex}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===1){
      setContent(
        <div style={{backgroundColor:colorList[variant%11].hex}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===2){
      setContent(
        <div style={{backgroundColor:colorList[variant%11].hex}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===3){
      setContent(
        <div style={{backgroundColor:colorList[variant%11].hex}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===4){
      setContent(
        <div style={{backgroundColor:colorList[variant%11].hex}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===5){
      setContent(
        <div style={{backgroundColor:colorList[variant%11].hex}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===6){
      setContent(
        <div style={{backgroundColor:colorList[variant%11].hex}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===7){
      setContent(
        <div style={{backgroundColor:colorList[variant%11].hex}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===8){
      setContent(
        <div style={{backgroundColor:colorList[variant%11].hex}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===9){
      setContent(
        <div style={{backgroundColor:colorList[variant%11].hex}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===10){
      setContent(
        <div style={{backgroundColor:colorList[variant%11].hex}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===11){
      setContent(
        <div style={{backgroundColor:colorList[variant%11].hex}} className='w-full h-full'>
          <div>
            Demo {variant}: {colorList[variant%11].hex}
          </div>
          <div>

          </div>
        </div>
      )
    } else if (variant===12){
      setContent(
        <div style={{backgroundColor:colorList[variant%11].hex}} className='w-full h-full'>
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
    <div className='w-full max-w-[320px] h-96 bg-white rounded-lg overflow-hidden text-neutral-500'>
      {content}
    </div>
  )
}

export default DemoCard