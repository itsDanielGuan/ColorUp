import React,{ useEffect, useState } from 'react'

const DemoCard = ({variant}) => {
  const [content, setContent] = useState(<></>)

  useEffect(()=>{

    if (variant===0){
      setContent(
        <div className='w-full h-full rounded-lg'>
          <div className='bg-neutral-500 w-full h-full text-black rounded-lg'>
            Hey There
          </div>
        </div>
      )
    } else if (variant===1){
      
    } else if (variant===2){
      
    } else if (variant===3){
      
    } else if (variant===4){
      
    } else if (variant===5){
      
    } else if (variant===6){
      
    } else if (variant===7){
      
    } else if (variant===8){
      
    } else if (variant===9){
      
    } else if (variant===10){
      
    } else if (variant===11){
      
    } else if (variant===12){
      
    } else {
      return null
    }
  },[variant])
  
  
  return (
    <div className='w-full max-w-[320px] h-96 bg-white rounded-lg'>
      <div>
        {content}
      </div>
      DemoCard {variant}
    </div>
  )
}

export default DemoCard