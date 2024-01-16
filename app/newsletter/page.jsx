import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-[#FED5c3] h-[20vh] md:h-[40vh] flex flex-col items-center justify-center gap-4 md:gap-6'>
        <h1 className='text-2xl md:text-5xl'>LET&apos;S STAY IN TOUCH!</h1>
        <p className='font-sans text-sm md:text-xl'>SUBSCRIBE TO OUR NEWSLETTER.</p>
        <div className='flex items-center justify-between gap-4'>
            <input className='shadow appearance-none border rounded md:w-full md:py-2 md:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='email' placeholder='Your Email'/>
            <button className='w-20 h-6 md:w-40 md:h-10 text-xs md:text-base bg-[#020200] hover:scale-110 transition ease-in-out  text-[#fed5c3] rounded-full cursor-pointer font-sans text-center'>SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default Newsletter