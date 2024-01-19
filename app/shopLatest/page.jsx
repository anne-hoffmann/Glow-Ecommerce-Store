"use client"

import React from 'react'
import Image from 'next/image'
import Model2 from "../assets/model-2.jpg"
import Link from 'next/link'


const shopLatest = () => {
  return (
    <div className='grid grid-cols-3 items-center bg-[#b4c9ce] border-b-[1px] border-b-[#020200]'>
        <div>
            <Image
            src={Model2}
            width={500}
            height={800}
            alt='model2' />
        </div>
        <div className='col-span-2 flex flex-col justify-evenly md:m-10 items-center gap-2 md:gap-5'>
            <h2 className='font-serif text-2xl md:text-6xl text-center'>SEE WHAT&apos;S NEW.</h2>
            <p className='font-sans text-sm text-center'>SHOP OUR LATEST PRODUCTS.</p>
            <div>
              <Link href='/newCollection'>
                <button className='w-24 h-6 text-xs md:text-base md:w-36 md:h-10 bg-[#020200] hover:scale-110 transition ease-in-out  text-[#b4c9ce] rounded-full cursor-pointer font-sans'>SHOP LATEST</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default shopLatest