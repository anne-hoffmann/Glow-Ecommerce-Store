"use client"

import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { useParams } from 'next/navigation'
import ProductDisplay from '../../product-display/page'

const ProductId = (props) => {

    const {all_products} = useContext(ShopContext)
    const {productId} = useParams()
    const product = all_products.find((e)=> e.id === Number(productId))

  return (
    <div>
        <ProductDisplay product={product} />
    </div>
  )
}

export default ProductId;