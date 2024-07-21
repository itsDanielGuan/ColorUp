"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname,useRouter } from 'next/navigation';
import { auth } from "@/auth"
import { useSession, signIn, signOut } from "next-auth/react";
import { UserAvatar } from "@/components/UserAvatar"
import SignInButton from './SignInButton';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Header = () => {
  const pathname = usePathname();
	const router = useRouter();

	const handleHomeScroll = () => {
		if (pathname === "/") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		} else {
			router.push("/");
		}
	}

  const { data: session, status } = useSession();

  return (
    <div className=' z-50 sticky top-0 w-full bg-neutral-950 border-neutral-800 border-b min-h-[56px] items-center flex flex-col justify-center'>
      <div className='container mx-auto items-center flex flex-row justify-between py-2 px-8 text-sm'>
        <div className='flex flex-row gap-4 text-white'>
          {/* <span className='text-lg'>LOGO</span> */}
          <button onClick={handleHomeScroll} className='text-xl font-bold group hover:text-indigo-500 transition-colors ease-in-out'>
            Color
            <span className='text-indigo-500 group-hover:text-white'>
              Up
            </span>
          </button>
        </div>
        <div className='flex flex-row gap-2 '>
          <SignInButton/>
        </div>
      </div>
    </div>
  )
}

export default Header