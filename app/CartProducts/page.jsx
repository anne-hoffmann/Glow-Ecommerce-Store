"use client"

import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Image from 'next/image';
import RemoveIcon from '../assets/cross-icon.png'

const CartProducts = () => {
    const {getTotalCartAmount ,all_products, cartItems, removeFromCart} = useContext(ShopContext);

  return (
    <div className='p-5 md:p-24 bg-[#f5f1f2] align-middle'>
        <div className='grid grid-cols-6 gap-2 md:gap-4 py-4 font-sans font-bold text-sm md:text-xl'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='w-full h-[2px] bg-[#020200]'/>
        {all_products.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                        <div className='grid grid-cols-6 gap-4 py-2 md:py-4 font-sans items-center'>
                            <Image
                            src={e.image}
                            width={100}
                            height={100}
                            alt='img'/>
                            <p className='text-xs md:text-base'>{e.name}</p>
                            <p className='text-sm md:text-base'>${e.new_price}</p>
                            <button className='border-[1px] border-[#020200] w-[30px] md:w-[64px] h-[25px] md:h-[50px]'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <Image
                            src={RemoveIcon}
                            alt='remove-icon'
                            height={20}
                            width={20}
                            onClick={()=>{removeFromCart(e.id)}}
                            className='cursor-pointer'/>
                        </div>
                <hr className='w-full h-[2px] bg-[#020200]'/>
            </div>
            }
            return null;
        })}
        <div className='font-sans m-auto py-2 md:py-4 flex flex-col justify-center items-end'>
            <div className='flex flex-col gap-2 md:gap-4'>
                <h1 className='text-2xl font-bold'>Total</h1>
                <div className='text-base md:text-lg'>
                    <div className='flex justify-between'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr className='w-full h-[2px] bg-[#020200]'/>
                    <div className='flex justify-between'>
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                    <hr className='w-full h-[2px] bg-[#020200]'/>
                    <div className='flex justify-between text-xl font-bold'>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button className='w-44 h-10 md:w-64 md:h-14 bg-[#020200] hover:scale-110 transition ease-in-out  text-white rounded-full cursor-pointer text-center'>Proceed To Checkout</button>
            </div>
        </div>


    </div>
  )
}

export default CartProducts;