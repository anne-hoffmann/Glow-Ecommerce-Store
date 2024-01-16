import React from 'react'
import Image from 'next/image'
import Model1 from '../assets/model-1.jpg'
import Link from 'next/link'


const hero = () => {
  return (
    <div className='grid grid-cols-3 items-center bg-[#d1ccd1] border-b-[1px] border-b-[#020200] h-fit'>
        <div className='col-span-2 flex flex-col justify-evenly m-4 md:m-10 items-center'>
            <p className='font-sans text-sm md:text-4xl text-center pb-1 md:pb-2'>GET READY TO</p>
            <h2 className='font-serif text-2xl md:text-8xl text-center pb-1 md:pb-2'>GLOW.</h2>
            <p className='font-sans text-xs md:text-1xl text-center pb-4'>ORGANIC AND CRUELTY-FREE BEAUTY.</p>
            <div className='py-2 md:py-5'>
              <Link href='/popular'>
                <button className='w-14 h-6 md:w-20 md:h-10 text-sm md:text-base bg-[#020200] hover:scale-110 transition ease-in-out  text-[#d1ccd1] rounded-full cursor-pointer font-sans text-center'>SHOP</button>
              </Link>
            </div>
        </div>

        <div>
            <Image
                src={Model1}
                width={500}
                height={800}
                alt="Model image"
             />
        </div>
    </div>

  )
}

export default hero