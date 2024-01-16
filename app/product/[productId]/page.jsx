"use client"

import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { useParams } from 'next/navigation'
import Breadcrumb from '../../breadcrumbs/page'
import ProductDisplay from '../../product-display/page'

const productId = (props) => {

    const {all_products} = useContext(ShopContext)
    const {productId} = useParams()
    const product = all_products.find((e)=> e.id === Number(productId))

  return (
    <div>
        <Breadcrumb product={product} />
        <ProductDisplay product={product} />
    </div>
  )
}

export default productId;