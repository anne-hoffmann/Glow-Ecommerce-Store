"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const item = (props) => {
  return (
    <div>
        <Link href={`product/${props.id}`}>
        <Image
            src={props.image}
            width={300}
            height={300}
            alt='props-img'
        />

        </Link>
        <p className='mx-1.5 font-sans'>{props.name}</p>
        <div className='flex gap-5 mx-1.5 font-sans'>
            <div className='text-lg'>
                ${props.new_price}
            </div>
            <div className='text-base line-through'>
                ${props.old_price}
            </div>
        </div>

    </div>
  )
}

export default item