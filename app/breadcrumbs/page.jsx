import React from 'react'
import ArrowIcon from '../assets/right-arrow.png'
import Image from 'next/image';

const Breadcrumb = (props) => {
    const {product} = props;
  return (
    <div className='flex justify-start items-center gap-2 font-sans p-4 bg-[#f5f1f2]'>
        Home  <Image src={ArrowIcon} width={15} height={15} alt='arrow-icon' />  Shop  <Image src={ArrowIcon} width={15} height={15} alt='arrow-icon'/> { product.category}  <Image src={ArrowIcon} width={15} height={15} alt='arrow-icon'/>  {product.name}
    </div>
  )
}

export default Breadcrumb