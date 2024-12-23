import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full mb pb-10 md:mb-8' id='contact'>
      
      <div className="flex flex-col items-center">
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital presence to the next level?
        </h1>
        <p className='dark:text-white-200 text-black-100 md:mt-10 my-5 text-center'>Reach out to me today & let&apos;s discuss How i can help you acheive your goals</p>
        <a href="mailto:usmanali730771@gmail.com">
          <MagicButton
          title="Lets get in touch"
          icon={<FaLocationArrow className="mx-2"  />}
          position="right"
          />
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center gap-8'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 M Usman. All rights reserved</p>
        <div className="social flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile, key)=>(
            <Link href={profile.link} target='_blank' key={profile.id}>
            <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-[#d1d5db] rounded-lg border border-black-300'>
                <img src={profile.img} alt={profile.id} width={20} height={20} />
            </div>
            
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
