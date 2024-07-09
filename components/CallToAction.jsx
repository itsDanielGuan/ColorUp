import React from 'react'
import Link from 'next/link'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import DoneIcon from '@mui/icons-material/Done';

const planBenefits = {
  basic:["Free","Generate primary colors","Exporting"],
  premium:["Free","Everyting in Basic","Generate more palettes","Save palettes","Check contrasts"],
  business:["Free","Everything in Premium","Generate many more palettes","Live showcase of palettes","Start a business","Unlimited live support (through mail)"],
}


const CallToAction = ({colorList}) => {
  if(!colorList) return null
  return (
    <div  className='w-full text-white' >
      <p style={{color:colorList[1].hex}} className='text-5xl text-white text-center my-32'>
        But <span style={{textDecorationColor:colorList[6].hex,color:colorList[3].hex}} className='font-bold underline'>ColorUp</span> does not end here!
      </p>

      <div style={{color:colorList[1].hex}} className='grid grid-cols-1 lg:grid-cols-3 grid-rows-3 lg:grid-rows-1  justify-center items-center mx-0 xl:-mx-24 '>
        <div style={{borderColor:colorList[1].hex}} className='border-2 lg:border-r-0 backdrop-blur-lg rounded-xl lg:rounded-r-none h-[400px] w-full py-8'>
          <div className='px-8 flex flex-col justify-between h-full'>
            <div>
              <h3 style={{color:colorList[3].hex}} className='font-bold text-2xl'>
                Basic
              </h3>
              <div className='text-4xl'>
                $0
                <span className='text-sm inline-block lg:block xl:inline-block'>
                  /hr, Free forever (Adobe could never)
                </span>
              </div>

              <div style={{color:colorList[1].hex}} className='flex flex-col gap-1 pt-4'>
                {
                  planBenefits.basic.map((benefit)=>(
                    <div className='flex flex-row items-center'>
                      <DoneIcon className='text-sm'/>
                      <span>
                        {benefit}
                      </span>
                    </div>
                  ))
                }
              </div>
            </div>
            
            <div className='mx-auto w-full'>
              <button style={{backgroundColor:colorList[0].hex, color:colorList[9].hex}} className='bg-white text-black px-6 py-2 w-full rounded-full font-bold'>
                Get started
              </button>
            </div>
          </div>
        </div>

        <div style={{borderColor:colorList[1].hex, backgroundColor:colorList[1].hex, color:colorList[9].hex}} className='border-2 backdrop-blur-lg rounded-xl pt-[70px] pb-[82px] h-[500px] bg-white text-black'>
          <div className='px-8 flex flex-col justify-between h-full'>
            <div>
              <h3 style={{color:colorList[7].hex}} className='font-bold text-2xl'>
                Premium
              </h3>
              <div className='text-5xl'>
                $0
                <span className='text-sm leading-3 inline-block lg:block xl:inline-block'>
                /Quadrimester, paid {" "} 
                  <Link className='leading-3' href="https://www.adobe.com/sg/creativecloud/business-plans.html?plan=team&step=2" target="_blank" rel="noopener noreferrer">
                    Ohnosecondly <ArrowOutwardIcon className='text-sm -mt-2 -ml-1'/>
                  </Link>
                </span>
              </div>

              <div className='flex flex-col gap-1 pt-4 '>
                {
                  planBenefits.premium.map((benefit)=>(
                    <div className='flex flex-row items-center'>
                      <DoneIcon className='text-sm'/>
                      <span className=''>
                        {benefit}
                      </span>
                    </div>
                  ))
                }
              </div>
            </div>
            
            <div className='mx-auto w-full'>
              <button style={{ backgroundColor:colorList[7].hex, color:colorList[1].hex}} className='bg-black text-white px-6 py-2 rounded-full w-full font-bold'>
                Try free for all months
              </button>
            </div>
          </div>
        </div>

        <div style={{borderColor:colorList[1].hex}} className='border-2 lg:border-l-0 backdrop-blur-lg rounded-xl lg:rounded-l-none h-[400px] w-full py-8'>
          <div className='px-8 flex flex-col justify-between h-full'>
            <div>
              <h3 style={{color:colorList[3].hex}} className='font-bold text-2xl'>
                Business
              </h3>
              <div className='text-4xl'>
                $0
                <span className='text-sm'>
                  /month, First month free on us!
                </span>
              </div>

              <div className='flex flex-col gap-1 pt-4'>
                {
                  planBenefits.business.map((benefit)=>(
                    <div className='flex flex-row items-center'>
                      <DoneIcon className='text-sm'/>
                      <span className=''>
                        {benefit}
                      </span>
                    </div>
                  ))
                }
              </div>
            </div>
            
            <div className='mx-auto w-full'>
              <button style={{backgroundColor:colorList[0].hex, color:colorList[9].hex}} className='bg-white text-black px-6 py-2 w-full rounded-full font-bold'>
                Learn more
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CallToAction