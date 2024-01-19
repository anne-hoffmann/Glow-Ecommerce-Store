"use client"

import React from 'react'
import Image from 'next/image'
import Logo from "../assets/logo.png"
import Instagram from "../assets/instagram.png"
import TikTok from "../assets/tik-tok.png"
import Twitter from "../assets/twitter.png"

const Footer = () => {
  return (
    <div className='bg-[#fed5c3] flex flex-col justify-center items-center gap-4 border-t-[1px] border-t-[#020200] py-5'>
        <div className='flex items-center gap-2'>
            <Image
            src={Logo}
            width={30}
            height={30}
            alt='logo-img' />
            <p className='text-2xl'>GLOW.</p>
        </div>
        <u className='flex list-none md:gap-5 text-sm md:text-xl gap-2'>
                <li className='cursor-pointer'>Company</li>
                <li className='cursor-pointer'>Products</li>
                <li className='cursor-pointer'>Offices</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
        </u>

        <div className='flex gap-4'>
            <div>
                <Image
                src={Instagram}
                alt='Instagram'
                width={20}
                height={20}/>
            </div>
            <div>
                <Image
                src={TikTok}
                alt='TikTok'
                width={20}
                height={20}/>
            </div>
            <div>
                <Image
                src={Twitter}
                alt='Twitter'
                width={20}
                height={20}/>
            </div>
        </div>


        <div className='flex flex-col items-center gap-3 font-sans'>
            <p>&copy;2023, GLOW.</p>
        </div>
    </div>
  )
}


export default Footer