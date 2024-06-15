import React from 'react'
import Link from 'next/link'

const Credits = () => {
  const creditList = [
    {purpose:"Testing & Feedback",peopleList:["Shafiq","Rasyad","Chih Chia (Tommy)","Joeui"]},
    {purpose:"Ideation",peopleList:["Emmanuel"]},
    {purpose:"Inspiration",peopleList:["UIColors","Realtime Colors"]}
  ]

  return (
    <div className='container mx-auto max-w-5xl px-5 my-auto'>
      <div className='flex flex-col items-center justify-center pt-32 pb-32 text-neutral-300'>
        <span className='text-3xl mb-16 text-center rounded-full py-2 px-4 shadow-inner shadow-indigo-500'>
          Thanks to this bunch
        </span>

        <div className='flex flex-row flex-wrap gap-8 justify-center'>

          {creditList.map((creditGroup,i)=>(
            <div className='flex flex-col gap-4 p-4 border border-neutral-500 rounded-lg min-w-44 transition-all ease-in-out cursor-default shadow-indigo-900 shadow-md transform hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-700 ' key={i}>
              <span className=' text-neutral-500'>
                {creditGroup.purpose}
              </span>
              <div className='flex flex-col gap-2 text-neutral-300'>
                {creditGroup.peopleList.map((peopleName,_i)=>(
                  <div key={_i}>
                    <span className='font-bold'>
                      {peopleName}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

        <Link href="/" className='mt-16 border border-neutral-500 p-2 px-4 rounded-lg hover:border-neutral-300 text-neutral-500 hover:text-neutral-300 transition-all ease-in-out'>
          <span className=''>
            Back
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Credits