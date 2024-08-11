import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { profile } from 'console'

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
            Ready to taking the <span className="text-purple">digital presence</span>  to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">Open to work and to showcase my talents for the company </p>
        <a href="mailto:suryan2398@gmail.com">
            <MagicButton
              title="Catch me in"
              icon={<FaLocationArrow/>}
              position="right"
            />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light p-2">CopyRight © 2024 Surya</p>
        <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
                <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                  <a href="https://www.linkedin.com/in/s-u-r-y-a-n, " target="_blank">
                   <img src={profile.img} alt="icons" width={20} height={20}
                    />
                  </a>
                </div>
            ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer