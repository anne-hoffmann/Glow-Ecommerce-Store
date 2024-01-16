"use client"

import React, { useEffect, useState } from 'react'
import Item from "../item/page"


const Popular = () => {

  const [popularProducts,setPopularProducts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/popular')
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data));
  },[])
  return (
    <div className='flex flex-col justify-evenly items-center gap-4 md:gap-2.5 h-fit md:h-[90vh] py-8 md:py-0 bg-[#f5f1f2] border-b-[1px] border-b-[#020200]'>
        <div className=''>
         <h1 className='text-2xl md:text-5xl'>BEST SELLERS</h1>
         <hr className='w-[150px] h-[1px] md:w-[300px] md:h-[2px] bg-[#020200]' />
        </div>
        <div className='font-sans md:flex md:m-t-12 md:justify-center md:items-center md:gap-7 grid grid-cols-2 gap-2 items-start'>
            {popularProducts.map((data, i)=>{
                return <Item
                key={i}
                id={data.id}
                name={data.name}
                image={data.image}
                new_price={data.new_price}
                old_price={data.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular