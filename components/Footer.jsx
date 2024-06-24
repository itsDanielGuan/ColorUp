"use client"

import React from 'react'
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';



const Footer = () => {
	const pathname = usePathname();
	const router = useRouter();

	const handleHomeScroll = () => {
		if (pathname === "/") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		} else {
			router.push("/");
		}
	}

  return (
    <div className='text-white bg-neutral-950 border-neutral-700 border-t w-full'>
			<div className='container mx-auto w-full py-12 px-8 text-neutral-500 flex flex-row items-center'>

				<div className='flex flex-col items-center xl:items-start xl:flex-row justify-between w-full gap-y-12'>
					<div className='flex flex-col gap-12 flex-grow'>
						<div className='flex flex-col w-fit items-center xl:items-start'>
							<button className='text-white text-5xl font-extrabold group hover:text-indigo-500 transition-colors ease-in-out' onClick={handleHomeScroll}>
								Color<span className='text-indigo-500 group-hover:text-white'>Up</span>
							</button>
							by Daniel Guan
						</div>
						<div className='flex flex-col gap-2 items-center xl:items-start'>
							<div className="text-white flex flex-col items-center xl:items-start">
								Contact Me
								<Link href="https://www.instagram.com/nad_lei_/" target="_blank" rel="noopener noreferrer" className='text-neutral-500 hover:text-neutral-300'>
									Daniel Guan (@nad_lei_)
								</Link>
							</div>
							
							<div className='flex flex-row gap-2 m-0 xl:-ml-[3px]'>
								<Link href="https://www.instagram.com/nad_lei_/" target="_blank" rel="noopener noreferrer" className='text-neutral-500 hover:text-neutral-300 w-12 aspect-square p-1 -m-1'>
									<InstagramIcon className='w-full h-full'/>
								</Link>
								<Link href="https://www.linkedin.com/in/daniel-guan/" target="_blank" rel="noopener noreferrer" className='text-neutral-500 hover:text-neutral-300 w-12 aspect-square p-1 -m-1'>
									<LinkedInIcon className='w-full h-full'/>
								</Link>
								{/* <Link href="mailto:danielguan23@gmail.com" target="_blank" rel="noopener noreferrer" className='text-neutral-500 hover:text-neutral-300 w-12 aspect-square p-1 -m-1'>
									<MailOutlineIcon className='w-full h-full'/>
								</Link> */}
							</div>
						</div>
					</div>

					<div className='flex flex-col sm:flex-row sm:justify-between flex-grow flex-wrap gap-y-12'>
					<div className='flex flex-col w-[200px] gap-2'>
						<div className='font-bold text-white mb-4'>
							From ColorUp
						</div>
						<button className='text-left w-fit hover:text-neutral-300' onClick={handleHomeScroll}>
							Start Designing
						</button>
						<button className='text-left w-fit hover:text-neutral-300'>
							Log In
						</button>
						<button className='text-left w-fit hover:text-neutral-300'>
							Saved Colors
						</button>
						<button className='text-left w-fit hover:text-neutral-300'>
							Explore Our Palettes
						</button>
					</div>
					<div className='flex flex-col w-[200px] gap-2'>
						<div className='font-bold text-white mb-4 '>
							Company
						</div>
						<Link href="https://daniel-guan.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-left w-fit hover:text-neutral-300'>
							About Me (Support me!)
						</Link>
						<Link href="https://www.instagram.com/nad_lei_/" target="_blank" rel="noopener noreferrer" className='text-left w-fit hover:text-neutral-300'>
							Partnership
						</Link>

					</div>
					<div className='flex flex-col w-[200px] gap-2'>
						<div className='font-bold text-white mb-4'>
							Others
						</div>
						<Link className='text-left w-fit hover:text-neutral-300' href="https://unlicense.org/" rel="noopener noreferrer" target="_blank">
							License: The Unlicense
						</Link>
						<Link href="/credits" className='text-left w-fit hover:text-neutral-300'>
							Credits
						</Link>
						<button className='text-left w-fit hover:text-neutral-300'>
							Feedback
						</button>
					</div>
					<div className='flex flex-col w-[200px]'>
						<div className='font-bold text-white mb-4'>
							Disclosure
						</div>
						<span className='text-left w-fit text-neutral-500 text-pretty cursor-not-allowed'>
							Whatever data/colors you get from my website, you are free to take it entirely. You do not need to pay/credit me or this website. You are welcome.
						</span>
					</div>
					</div>

				</div>
			</div>
    </div>
  )
}

export default Footer