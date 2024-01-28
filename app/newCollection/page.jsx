"use client"

import React, { useEffect, useState } from 'react'
import Item from '../item/page'

const NewCollection = () => {

  const [new_collection, setNew_Collection] = useState([]);

  useEffect(()=>{
    fetch('https://glow-server.onrender.com/newcollection')
    .then((response)=>response.json())
    .then((data)=>setNew_Collection(data));
  },[])

  return (
    <div className='flex flex-col justify-evenly items-center gap-4 md:gap-2.5 h-fit md:h-[90vh] py-8 md:py-0 bg-[#f5f1f2] border-b-[1px] border-b-[#020200]'>
        <div>
            <h1 className='text-2xl md:text-5xl'>LATEST PRODUCTS</h1>
            <hr className='w-[200px] h-[1px] md:w-[400px] md:h-[2px] bg-[#020200]' />
        </div>
        <div className='font-sans md:flex md:m-t-12 md:justify-center md:items-center md:gap-7 grid grid-cols-2 gap-2 items-start'>
            {new_collection.map((new_collection, i)=>{
                return <Item
                key={i}
                id={new_collection.id}
                name={new_collection.name}
                image={new_collection.image}
                new_price={new_collection.new_price}
                old_price={new_collection.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollection