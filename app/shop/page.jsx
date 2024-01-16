import React from 'react'
import Link from 'next/link'
import Hero from "../hero/page"
import Popular from "../popular/page"
import ShopLatest from '../shopLatest/page'
import NewCollection from '../newCollection/page'
import Newsletter from '../newsletter/page'



const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <ShopLatest />
        <NewCollection />
        <Newsletter />
    </div>
  )
}

export default Shop