import React from 'react'
import Link from 'next/link'
import { SignInButton } from '@/components/SignInButton'

const SignIn = () => {

  return (
    <div className='container mx-auto max-w-5xl px-5 my-auto'>
      <div className='flex flex-col items-center justify-center pt-32 pb-32 text-neutral-300'>
        <span className='text-3xl mb-16 text-center rounded-full py-2 px-4 shadow-inner shadow-indigo-500'>
          Sign In to your account
        </span>

        <div className='flex flex-row flex-wrap gap-8 justify-center'>
          
        </div>
        <SignInButton/>
        <Link href="/" className='mt-16 border border-neutral-500 p-2 px-4 rounded-lg hover:border-neutral-300 text-neutral-500 hover:text-neutral-300 transition-all ease-in-out'>
          <span className=''>
            Back
          </span>
        </Link>
      </div>
    </div>
  )
}

export default SignIn