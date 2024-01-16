"use client"

import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../item/page'


const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);
  return (
    <div className='bg-[#f5f1f2] border-b-[1px] border-b-[#020200]'>
      <div className='md:flex md:flex-row grid grid-cols-2 mx-5 md:justify-evenly gap-3 md:gap-5 py-10'>
        {all_products.map((item, i)=>{
            if (props.category===item.category) {
                return <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}/>
            }
            else {
              return null;
            }
        })}
      </div>
    </div>
  )
}

export default ShopCategory