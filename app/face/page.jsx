"use client"

import React from 'react'
import ShopCategory from '../shopCategory/page'
import Image from 'next/image'
import DownArrow from '../assets/down-arrow.png'


const face = () => {
  return (
    <div >
      <div className='flex justify-start bg-[#EBED94] border-b-[1px] border-b-[#020200] py-2 md:py-4 px-6 gap-5'>
            <h1 className='text-5xl'>SKIN.</h1>
            <p className='font-sans text-sm md:text-2xl'>SHOP FACE BELOW.</p>
            <Image
            src={DownArrow}
            width={50}
            height={50}
            alt='down-arrow'/>
      </div>

      <div>
        <ShopCategory category="face"/>
      </div>
    </div>
  )
}

export default face;